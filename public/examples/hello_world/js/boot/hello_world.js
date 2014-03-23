define(function (require) {
  'use strict';

   var HelloWorld = require('examples/hello_world/js/ui/hello_world');
   var ExampleTemplate = require('component/example_template');

  return helloWorldBoot;

  function helloWorldBoot() {
    ExampleTemplate.attachTo(".Example[data-example-name='hello_world']", {
      codeHtml: '<h1>name</h1>',
      appHtml: '<h1>result</h1>'
    });

    HelloWorld.attachTo(".Example[data-example-name='hello_world']");
  }
});
