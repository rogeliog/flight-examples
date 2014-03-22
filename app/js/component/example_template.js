define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('flight-hogan/lib/with_hogan');

  return defineComponent(exampleTemplate, withHogan);

  function exampleTemplate() {
    this.defaultAttrs({
      codeSelector: '.Example-code',
      appSelector: '.Example-result'
    });

    this.renderBase = function () {
      var html = this.renderTemplate(
        '<div class="Example-code-wrapper"> <textarea class="Example-code"> </textarea> </div> <div class="Example-result"> </div>'
        );
      this.$node.html(html);
    };

    this.renderCode = function () {
      this.select('codeSelector').html(this.attr.codeHtml);
    };

    this.renderApp = function () {
      this.select('appSelector').html(this.attr.appHtml);
    };

    this.render = function () {
      this.renderBase();
      this.renderCode();
      this.renderApp();
      this.trigger('uiTemplateLoaded');
    };

    this.after('initialize', function () {
      this.render();
    });
  }
});
