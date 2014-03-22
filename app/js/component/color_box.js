define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(colorBox);

  function colorBox() {
    this.defaultAttrs({
    });

    this.addCount = function (event, data) {
      if(this.$node.data('color') == data.name) {
        var newCount = parseInt(this.$node.text()) + 1;
        this.$node.text(newCount);
      }
    };

    this.after('initialize', function () {
      this.on(document, 'uiNeedsColorUpdate', this.addCount);
    });

  }

});
