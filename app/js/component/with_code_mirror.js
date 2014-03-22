define(function (require) {
  'use strict';

  return withCodeMirror;

  function withCodeMirror() {
    this.codeMirrorToTextArea = function(textArea) {
      CodeMirror.fromTextArea(textArea, {readOnly: true});
      this.trigger('uiDidCodeMirror');
    };
  }
});
