define(function (require) {
  'use strict';

  return withCodeMirror;

  function withCodeMirror() {
    this.defaultAttrs({
      codeMirrorSelector: '.CodeMirror'
    });

    this.codeMirrorToTextArea = function(textArea) {
      CodeMirror.fromTextArea(textArea)
      this.trigger('uiDidCodeMirror');
    };

    this.runCode = function (event, data) {
      var code = this.select('codeMirrorSelector').text();
      eval(code);
    };

  }
});
