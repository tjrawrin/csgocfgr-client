/**
 * HoverPopup
 * This object controls the hover over popup for the page
 * Only a single instance of this object needs to exist per page.
 */
var HoverPopup = function () {
  this.$popup = null;
  this.lookup = null;
};

/**
 * Initializes a HoverPopup object by cacheing the popup div and binding
 * events.
 * This should be called once.
 */
HoverPopup.prototype.Init = function () {
  this.CacheElements();
  this.BindEvents();

  // get the command lookup table if it exists
  this.lookup = CMDLookupTable || null;
};

/**
 * Save a reference to a jQuery object of the popup.
 */
HoverPopup.prototype.CacheElements = function () {
  //this.$popup = $('#popup-info-bubble');
};

/**
 * Bind any events required for the HoverPopup object.
 * Uses event delegation to reduce the number of events per page by binding
 * events to the document object and catching events triggered by an element
 * with the icon-info class.
 */
HoverPopup.prototype.BindEvents = function () {
  $(document).on('mouseenter', '.octicon-info', $.proxy(this.ShowPopup, this));
  $(document).on('mouseleave', '.octicon-info', $.proxy(this.HidePopup, this));
};

/**
 * Displays the popup at the element triggering the mouseenter event and sets
 * the popup display information.
 * Note: elements with the icon-info class should also have a data-title
 * attribute and a data-description attribute. The title should be normal text
 * and the description can contain html for presentation.
 */
HoverPopup.prototype.ShowPopup = function (context) {
  // remove any leftover popups that weren't properly removed
  this.CleanUp();

  // ensure the lookup table exists
  if(this.lookup == null) {
    return;
  }

  this.$popup = null;

  // get the information to display in the popup
  var $element = $(context.target);
  var $input = $element.closest('div').find('input:eq(0), select:eq(0), div:eq(0)');
  var command = $input.length > 1 ? $($input[1]).data('command') : $input.data('command');

  var title = "";
  var description = "";

  if(this.lookup[command]) {
    title = this.lookup[command]['title'];
    description = this.lookup[command]['description'];
  }

  // build the popup
  var popup = $(
      '<div id="popup-info-bubble">' +
        '<div class="popup-bubble-container">' +
          '<div class="popup-bubble__header">' +
            '<h4>' + title + '</h4>' +
          '</div>' +
          '<div class="popup-bubble__body">' +
            description +
          '</div>' +
          '<div class="popup-bubble__arrow"></div>' +
        '</div>' +
      '</div>'
    );

  $('body').append(popup);
  this.$popup = $('#popup-info-bubble');
  this.$popup.on('mouseenter', $.proxy(this.KeepPopup, this));
  this.$popup.on('mouseleave', $.proxy(this.HidePopup, this));
  this.$popup.on('click', '.icon-arrows-cw', $.proxy(this.SetFieldDefaults, this, $element));

  // display the popup
  this.PopupDisplay($element);
};

/**
 * Positions the popup relative to the element firing the event and displays it
 * to the user.
 */
HoverPopup.prototype.PopupDisplay = function($element) {
  // position the popup
  var elementPosition = $element.offset();

  // set the position of the popup once and let the browser recalculate its
  // height if it needs to shrink to fit within the view. update the position
  // of the popup a second time to account for a resize. (this is ugly but it
  // works).
  for(var i = 0; i < 2; i++) {
    var positionTop = elementPosition.top - (this.$popup.outerHeight(true) + 18);
    var positionLeft = elementPosition.left - 40;
    this.$popup.css({top: positionTop, left: positionLeft});
  }

  this.$popup.fadeIn('fast');
};

/**
 * Changes the value of a range input and number input to a default value
 * specified within the commands description.
 */
HoverPopup.prototype.SetFieldDefaults = function($element, context) {
  var defaultValue = $(context.target).data('default');
  var $container = $element.closest('div');
  var $slider = $container.find('input[type="range"]');
  var $input = $container.find('input[type="number"]');
  $slider.val(defaultValue);
  $input.val(defaultValue);
};

/**
 * Hides the popup
 */
HoverPopup.prototype.HidePopup = function (context) {
  this.$popup.fadeOut('fast', $.proxy(this.PopupRemove, this));
};

/**
 * Removes the popup from the document body
 */
HoverPopup.prototype.PopupRemove = function (context) {
  this.$popup.remove();
  // force jQuery to remove any extras just incase
  this.CleanUp();
};

/**
 * Removes any leftover popup-info-bubble modules
 */
HoverPopup.prototype.CleanUp = function () {
  $('#popup-info-bubble').each(function() {
    $(this).remove();
  });
};

/**
 * Keeps the popup open
 */
HoverPopup.prototype.KeepPopup = function (context) {
  this.$popup.stop();
  this.$popup.css({opacity: '1'});
};

