define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(colorPicker);

  function colorPicker() {
    this.updateColor = function(event, data) {
      this.trigger('uiNeedsColorUpdate', {name: this.$node.val().toLowerCase()});
    };

    this.after('initialize', function () {
      this.on('change', this.updateColor);
    });
  }

});
