define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(colorStatPlaceholder);

  /**
   * Module function
   */

  function colorStatPlaceholder() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }

});