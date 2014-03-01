define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withCodeMirror = require('component/with_code_mirror');

  return defineComponent(code, withCodeMirror);

  function code() {
    this.defaultAttrs({
      codeTextArea: '.Example-code',
      runSelector: '.Example-runner',
      lang: 'javascript'
    });

    this.codeMirror = function () {
      this.codeMirrorToTextArea(this.select('codeTextArea')[0]);
    };

    this.after('initialize', function () {
      this.codeMirror();
      this.on('click', {
        runSelector: this.runCode
      });
    });
  }

});
