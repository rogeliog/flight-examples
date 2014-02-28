define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHighlight = require('component/with_highlight');

  return defineComponent(code, withHighlight);

  function code() {
    this.defaultAttrs({
      codeSelector: 'code',
      lang: 'javascript'
    });

    this.highlightCode = function () {
      this.highlightBlock(this.select('codeSelector')[0]);
    };

    this.after('initialize', function () {
      this.highlightCode();
    });
  }

});
