define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(helloWorld);

  function helloWorld() {
    this.defaultAttrs({
      inputSelector: '.inputField',
      nameSelector: '.name'
    });

    this.updateName = function (e, data) {
      this.select('nameSelector').text(data.el.value);
    }

    this.after('initialize', function () {
      this.on("input", { inputSelector: this.updateName });
    });
  }

});
