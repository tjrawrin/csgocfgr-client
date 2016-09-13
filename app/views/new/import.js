// import Ember from 'ember';
//
// export default Ember.View.extend({
//   /**
//   * Parse .cfg files from file input or pasted text.
//   * Cache page elements that may be referenced multiples to the cost of having
//   * to look them up multiple times.
//   * Initialize parser object by caching elements and binding events.
//   */
//   inputFile: null,
//   inputText: null,
//   /**
//   * Bind events to page elements that the ConfigParser object will handle.
//   */
//   bindEvents: function() {
//     var $inputFile = Ember.$('input[data-upload="file"]');
//     var $inputText = Ember.$('textarea[data-upload="text"]');
//
//     this.set('inputFile', $inputFile);
//     this.set('inputText', $inputText);
//
//     $inputFile.on('change', Ember.$.proxy(this.doParse, this));
//     $inputText.on('input', Ember.$.proxy(this.doParse, this));
//   }.on('didInsertElement'),
//   /**
//   * Attempt to parse a config based on the event that initiated the parse.
//   * event - An event used to determine which input method initiated the parse
//   * request.
//   * Returns true if a parse task was successfully started.
//   */
//   doParse: function(event) {
//     // console.log('DoParse: %o', event);
//     var success = false;
//
//     if (event.type === 'change') {
//       success = this.parseFromFile(event);
//     }
//     else if (event.type === 'input') {
//       success = this.parseFromPaste();
//     }
//
//     return success;
//   },
//   /**
//   * Parse text input into a text field as a config.
//   */
//   parseFromPaste: function() {
//     // console.log('ParseFromPaste');
//     var pasteContent = this.get('inputText').val();
//     Ember.$('.content-container').append('<hr><pre>' + pasteContent + '</pre>');
//
//     pasteContent = this.cleanFileContents(pasteContent);
//     Ember.$('.content-container').append('<hr><pre>' + pasteContent + '</pre>');
//     var contentArray = this.contentStringToArray(pasteContent);
//     Ember.$('.content-container').append('<hr><pre>' + contentArray + '</pre>');
//     contentArray = this.reformatContentArray(contentArray);
//     Ember.$('.content-container').append('<hr><pre>' + contentArray + '</pre>');
//
//     this.writeConfigToModel(contentArray);
//   },
//   /**
//   * Parse the contents of a file.
//   * event - A change event triggered by a file input.
//   * Returns true if the file was successfully opened and parsed.
//   */
//   parseFromFile: function(event) {
//     // console.log('ParseFromFile');
//     if (!this.clientCanReadFiles()) {
//       //console.error('The client is unable to read files.');
//       return false;
//     }
//
//     // get the first file only
//     var file = event.target.files[0];
//     if(!file) {
//       //console.error('File not available.');
//       return false;
//     }
//
//     this.parseContentsFromFile(file);
//   },
//   /**
//   * Determine whether or not a client browser is capable of opening and reading
//   * files.
//   * Returns true if the client is capable of opening files.
//   */
//   clientCanReadFiles: function() {
//     // console.log('ClientCanReadFiles');
//     if (!FileReader) {
//       return false;
//     }
//
//     if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
//       return false;
//     }
//
//     return true;
//   },
//   /**
//   * Retrieve the contents of a file.
//   * file - A file object to read from.
//   */
//   parseContentsFromFile: function(file) {
//     // console.log('GetContentsFromFile');
//
//     var fileReader = new FileReader();
//     fileReader.onload = Ember.$.proxy(this.fileReader_OnLoad, this, fileReader);
//     fileReader.readAsText(file);
//   },
//   /**
//   * Method called by a FileReader object when it has successfully finished
//   * reading a file.
//   * fileReader - the FileReader object for which this method is set to.
//   */
//   fileReader_OnLoad: function(fileReader) {
//     // console.log('FileReader_OnLoad');
//     var content = fileReader.result;
//     content = this.cleanFileContents(content);
//
//     var contentArray = this.contentStringToArray(content);
//     contentArray = this.reformatContentArray(contentArray);
//
//     this.writeConfigToModel(contentArray);
//   },
//   /**
//   * Remove extra whitespace and comments from the contents of a config.
//   * content - A string containing the contents to be cleaned.
//   * Returns a string of the contents after removing whitespace and comments.
//   */
//   cleanFileContents: function(content) {
//     // console.log('CleanFileContents');
//     var newContent = content;
//
//     // remove comments to the end of the line
//     //newContent = newContent.replace(/\s+\/{2,}.*/g, '');
//     newContent = newContent.replace(/\/{2,}.*/g, '');
//
//     // remove extra white space
//     newContent = newContent.replace(/\r|\n{2,}/g, '\n');
//
//     return newContent;
//   },
//   /**
//   * Convert a string into an array containing an arrays. Splits the content
//   * string on news lines then splits each line by spaces.
//   * content - A string to be converted to an array of arrays.
//   * Returns the content string converted to an array of arrays.
//   */
//   contentStringToArray: function(content) {
//     // console.log('ContentStringToArray');
//     var contentArray = content.split('\n');
//     for (var i = 0, length = contentArray.length; i < length; i++) {
//       contentArray[i] = contentArray[i].split(' ');
//     }
//
//     return contentArray;
//   },
//   /**
//   * Reformat an array into a format easier to manipulate.
//   * contentArray - An array of arrays to be formatted.
//   * Returns a new array based on the input array with structure and content
//   * changes.
//   */
//   reformatContentArray: function(contentArray) {
//     var newContentArray = contentArray;
//
//     for (var i = 0, length = contentArray.length; i < length; i++) {
//       if(newContentArray[i].length <= 2) {  // skip blank lines
//         continue;
//       }
//       else if (newContentArray[i][0] === 'bind') {  // handle key bindings
//         for (var j = 3; j < newContentArray[i].length; j++) {
//           newContentArray[i][2] += ' ' + newContentArray[i][j];
//           newContentArray[i][j] = null;
//         }
//       }
//       else {
//         for (var k = 2; k < newContentArray[i].length; k++) {  // handle commands
//           newContentArray[i][1] += ' ' + newContentArray[i][k];
//           newContentArray[i][k] = null;
//         }
//       }
//     }
//
//     return newContentArray;
//   },
//   /**
//   * Load a parsed config array into the store model.
//   * contentArray - An array of the parsed config file.
//   */
//   writeConfigToModel: function(contentArray) {
//     this.set('controller.config', []);
//
//     for (var i = 0, length = contentArray.length; i < length; i++) {
//       if (contentArray[i][0] === 'bind') {
//         this.addOptionToConfigExport(this.formatKeyAsModelKeybind(contentArray[i][1]), this.removeQuotes(contentArray[i][2]));
//       }
//       else if (contentArray[i][0]) {
//         this.addOptionToConfigExport(this.formatKeyAsModelCommand(contentArray[i][0]), this.removeQuotes(contentArray[i][1]));
//       }
//     }
//   },
//   /**
//   * Remove quotation marks from a string.
//   * value - The string to remove all quote characters from.
//   * Returns a string with all quote characters removed.
//   */
//   removeQuotes: function(value) {
//     if (!value) {
//       return '';
//     }
//     var newValue = value;
//
//     newValue = newValue.replace(/"/g, '');
//
//     return newValue;
//   },
//   /**
//   * Convert a string of text into a format used by the data store model to
//   * identify keybinds.
//   * key - A string to convert to the keybind format.
//   * Returns a string of the converted key.
//   */
//   formatKeyAsModelKeybind: function(key) {
//     key = key.replace(/"/g, '');
//     key = key.toLowerCase();
//     var newKey = 'key';
//
//     for (var i = 0, length = key.length; i < length; i++) {
//       if (key[i] === '_') {
//         continue;
//       }
//       if (i === 0 || key[i - 1] === '_') {
//         newKey += key[i].toUpperCase();
//       }
//       else {
//         newKey += key[i];
//       }
//     }
//
//     newKey = this.getKeyAsText(newKey);
//     return newKey;
//   },
//   /**
//   * Convert a string of text into a format used by the data store model to
//   * identify commands.
//   * key - A string of text to convert to the command format.
//   * Returns a string of the converted key.
//   */
//   formatKeyAsModelCommand: function(key) {
//     var newKey = '';
//
//     for (var i = 0, length = key.length; i < length; i++) {
//       if (key[i] === '_') {
//         i++;
//         newKey += key[i].toUpperCase();
//       }
//       else {
//         newKey += key[i];
//       }
//     }
//
//     return newKey;
//   },
//   /**
//   * Get the model name of a keybinding key for special characters.
//   * key - A string to convert to the special database key if needed.
//   * Returns either the original string or a modified version of the string
//   * matching the database field name.
//   */
//   getKeyAsText: function(key) {
//     var keyName = key;
//
//     switch(keyName) {
//       case 'key0':
//       case 'key1':
//       case 'key2':
//       case 'key3':
//       case 'key4':
//       case 'key5':
//       case 'key6':
//       case 'key7':
//       case 'key8':
//       case 'key9':
//         keyName = keyName.substr(0, keyName.length - 1) + 'K' + keyName[keyName.length - 1];
//         break;
//       case 'key-':
//         keyName = 'keyHyphen';
//         break;
//       case 'key=':
//         keyName = 'keyEquals';
//         break;
//       case 'key[':
//         keyName = 'keyLbracket';
//         break;
//       case 'key]':
//         keyName = 'keyRbracket';
//         break;
//       case 'key\\':
//         keyName = 'keyBkslash';
//         break;
//       case 'key;':
//         keyName = 'keySemicolon';
//         break;
//       case 'key\'':
//         keyName = 'keyApostrophe';
//         break;
//       case 'key,':
//         keyName = 'keyComma';
//         break;
//       case 'key.':
//         keyName = 'keyPeriod';
//         break;
//       case 'key/':
//         keyName = 'keyFwslash';
//         break;
//       case 'keyCaps':
//         keyName = 'keyCapslock';
//         break;
//     }
//
//     return keyName;
//   },
//   /**
//   * Add a key, value pair object to the this.config property.
//   * key - A string containing the config option name.
//   * value - A string containg the value to set the option to.
//   */
//   addOptionToConfigExport: function(key, value) {
//     var config = this.get('controller.config');
//
//     return config.push({
//       'key': key,
//       'value': value
//     });
//   },
//   /**
//   * Allows the ability to switch between the two different config
//   * loading options. Also clears the config array and input fields.
//   * Resets the file input field if no file is selected.
//   */
//   showHideConfigImport: function() {
//     var $importOptions = Ember.$('input#fileImport, input#textImport');
//     var $fileRadio = Ember.$('input#fileImport');
//     var $configFile = Ember.$('.upload-config-file');
//     var $configText = Ember.$('.upload-config-text');
//     var self = this;
//
//     $importOptions.on('change', function() {
//       var $inputFile = Ember.$('input[data-upload="file"]');
//       var $inputText = Ember.$('textarea[data-upload="text"]');
//
//       if ($fileRadio.prop('checked')) {
//         $configFile.show();
//         $configText.hide();
//         $inputText.val('');
//         self.set('controller.noFileName', 'No file selected...');
//         self.set('controller.config', []);
//       } else {
//         $configFile.hide();
//         $configText.show();
//         $inputFile.val('');
//         self.set('controller.noFileName', '');
//         self.set('controller.config', []);
//       }
//     });
//   }.on('didInsertElement')
// });
