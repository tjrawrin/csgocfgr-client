import Ember from 'ember';

export default Ember.Component.extend({
  // inject ember services for flash message plugin
  flashMessages: Ember.inject.service(),

  // setting for the file import element
  fileHidden: false,

  // setting for the text import element
  textHidden: true,

  // value of the file import input
  inputFile: null,

  // value of the text import input
  inputText: null,

  // array of import config settings
  config: [],

  actions: {
    // action for importing a config file
    fileImport() {
      this.setProperties({ fileHidden: false, textHidden: true, config: {data: []} });

      const $textEl = Ember.$('#import-text');

      $textEl.val('');
    },

    // action for importing a text config
    textImport() {
      this.setProperties({ fileHidden: true, textHidden: false, config: {data: []} });

      const $fileEl = Ember.$('#import-file');
      const $previewEl = Ember.$('#file-upload-preview');

      $previewEl.val('');
      $fileEl.wrap('<form>').closest('form').get(0).reset();
      $fileEl.unwrap();
    },

    // action for pasring the config settings imported
    parseConfig() {
      const $fileRadio = Ember.$('#file-radio').prop('checked');
      const $textRadio = Ember.$('#text-radio').prop('checked');

      if ($fileRadio) {
        if (this.get('config').length > 0) {
          return this.send('redirectToCreate', this.get('config'));
        } else {
          Ember.get(this, 'flashMessages').danger('No file selected for import!');
          return false;
        }
      }

      if ($textRadio) {
        if (this.get('config').length > 0) {
          return this.send('redirectToCreate', this.get('config'));
        } else {
          Ember.get(this, 'flashMessages').danger('Text input field is empty!');
          return false;
        }
      }
    }
  },

  // executes functions and sets variables when the component is inserted into the dom
  didInsertElement() {
    const $inputFile = Ember.$('#import-file');
    const $inputText = Ember.$('#import-text');

    this.set('inputFile', $inputFile);
    this.set('inputText', $inputText);

    $inputFile.on('change', Ember.$.proxy(this.doParse, this));
    $inputText.on('input', Ember.$.proxy(this.doParse, this));
  },

  // attempt to parse a config based on the event that initiated the parse
  doParse(event) {
    let success = false;

    if (event.type === 'change') {
      success = this.parseFromFile(event);
    } else if (event.type === 'input') {
      success = this.parseFromPaste();
    }

    return success;
  },

  // parse text input into a text field as a config
  parseFromPaste() {
    let pasteContent = this.get('inputText').val();
    pasteContent = this.cleanFileContents(pasteContent);

    let contentArray = this.contentStringToArray(pasteContent);
    contentArray = this.reformatContentArray(contentArray);

    this.writeConfigToModel(contentArray);
  },

  // parse the contents of a file
  parseFromFile(event) {
    if (!this.clientCanReadFiles()) {
      return false;
    }

    // get the first file only
    const file = event.target.files[0];

    if (!file) {
      return false;
    }

    this.parseContentsFromFile(file);
  },

  // determine whether or not a client browser is capable of opening and reading files
  clientCanReadFiles() {
    if (!FileReader) {
      return false;
    }

    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
      return false;
    }

    return true;
  },

  // retrieve the contents of a file
  parseContentsFromFile(file) {
    let fileReader = new FileReader();
    fileReader.onload = Ember.$.proxy(this.fileReaderOnLoad, this, fileReader);
    fileReader.readAsText(file);
  },

  // method called by a FileReader object when it has successfully finished reading a file
  fileReaderOnLoad(fileReader) {
    let content = fileReader.result;
    content = this.cleanFileContents(content);

    let contentArray = this.contentStringToArray(content);
    contentArray = this.reformatContentArray(contentArray);

    this.writeConfigToModel(contentArray);
  },

  // remove extra whitespace and comments from the contents of a config
  cleanFileContents(content) {
    let newContent = content;
    newContent = newContent.replace(/\/{2,}.*/g, '');
    newContent = newContent.replace(/\r|\n{2,}/g, '\n');

    return newContent;
  },

  // convert a string into an array containing an arrays; splits the content string on news lines then splits each line by spaces
  contentStringToArray(content) {
    let contentArray = content.split('\n');

    for (let i = 0, length = contentArray.length; i < length; i++) {
      contentArray[i] = contentArray[i].split(' ');
    }

    return contentArray;
  },

  // reformat an array into a format easier to manipulate
  reformatContentArray(contentArray) {
    let newContentArray = contentArray;

    for (let i = 0, length = contentArray.length; i < length; i++) {
      if (newContentArray[i].length <= 2) {  // skip blank lines
        continue;
      } else if (newContentArray[i][0] === 'bind') {  // handle key bindings
        for (let j = 3; j < newContentArray[i].length; j++) {
          newContentArray[i][2] += ' ' + newContentArray[i][j];
          newContentArray[i][j] = null;
        }
      } else {
        for (let k = 2; k < newContentArray[i].length; k++) {  // handle commands
          newContentArray[i][1] += ' ' + newContentArray[i][k];
          newContentArray[i][k] = null;
        }
      }
    }

    return newContentArray;
  },

  // load a parsed config array into the store model
  writeConfigToModel(contentArray) {
    this.set('config', []);

    for (let i = 0, length = contentArray.length; i < length; i++) {
      if (contentArray[i][0] === 'bind') {
        this.addOptionToConfigExport(this.formatKeyAsModelKeybind(contentArray[i][1]), this.removeQuotes(contentArray[i][2]));
      } else if (contentArray[i][0]) {
        this.addOptionToConfigExport(this.formatKeyAsModelCommand(contentArray[i][0]), this.removeQuotes(contentArray[i][1]));
      }
    }
  },

  // remove quotation marks from a string
  removeQuotes(value) {
    if (!value) {
      return '';
    }

    let newValue = value;
    newValue = newValue.replace(/"/g, '');

    return newValue;
  },

  // convert a string of text into a format used by the data store model to identify keybinds
  formatKeyAsModelKeybind(key) {
    key = key.replace(/"/g, '');
    key = key.toLowerCase();
    let newKey = 'key';

    for (let i = 0, length = key.length; i < length; i++) {
      if (key[i] === '_') {
        continue;
      }

      if (i === 0 || key[i - 1] === '_') {
        newKey += key[i].toUpperCase();
      } else {
        newKey += key[i];
      }
    }

    newKey = this.getKeyAsText(newKey);
    return newKey;
  },

  // convert a string of text into a format used by the data store model to identify commands
  formatKeyAsModelCommand(key) {
    let newKey = '';

    for (let i = 0, length = key.length; i < length; i++) {
      if (key[i] === '_') {
        i++;
        newKey += key[i].toUpperCase();
      } else {
        newKey += key[i];
      }
    }

    return newKey;
  },

  // get the model name of a keybinding key for special characters
  getKeyAsText(key) {
    let keyName = key;

    switch(keyName) {
      case 'key0':
      case 'key1':
      case 'key2':
      case 'key3':
      case 'key4':
      case 'key5':
      case 'key6':
      case 'key7':
      case 'key8':
      case 'key9':
        keyName = keyName.substr(0, keyName.length - 1) + 'K' + keyName[keyName.length - 1];
        break;
      case 'key-':
        keyName = 'keyHyphen';
        break;
      case 'key=':
        keyName = 'keyEquals';
        break;
      case 'key[':
        keyName = 'keyLbracket';
        break;
      case 'key]':
        keyName = 'keyRbracket';
        break;
      case 'key\\':
        keyName = 'keyBkslash';
        break;
      case 'key;':
        keyName = 'keySemicolon';
        break;
      case 'key\'':
        keyName = 'keyApostrophe';
        break;
      case 'key,':
        keyName = 'keyComma';
        break;
      case 'key.':
        keyName = 'keyPeriod';
        break;
      case 'key/':
        keyName = 'keyFwslash';
        break;
      case 'keyCaps':
        keyName = 'keyCapslock';
        break;
    }

    return keyName;
  },

  // add a key, value pair object to the this.config property
  addOptionToConfigExport(key, value) {
    let config = this.get('config');

    return config.push({
      'key': key,
      'value': value
    });
  }
});
