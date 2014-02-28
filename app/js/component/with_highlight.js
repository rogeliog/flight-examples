define(function (require) {
  'use strict';

  var hljs = require('../js/lib/highlight.pack.js');

  return withHighlight;

  function withHighlight() {
    this.highlightBlock = function(element) {
      hljs.highlightBlock(element);
      this.trigger('uiDidHighlighBlock');
    }
  }
});
