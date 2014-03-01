define(function (require) {
  'use strict';

  return withCodeMirror;

  function withCodeMirror() {
    this.codeMirrorToTextArea = function(textArea) {
      CodeMirror.fromTextArea(textArea)
      this.trigger('uiDidCodeMirror');
    };
  }
});
