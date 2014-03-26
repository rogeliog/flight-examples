define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(colorMatcher);

  function colorMatcher() {
    this.defaultAttrs({
      inputSelector: '.inputField',
      colorSelector: '.color'
    });

    this.updateName = function (e, data) {
      this.select('colorSelector').css({background: data.el.value});
    };

    this.after('initialize', function () {
      this.on("input", { inputSelector: this.updateName });
    });
  }

});
