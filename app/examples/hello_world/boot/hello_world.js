define(function (require) {
  'use strict';

   var HelloWorld = require('examples/hello_world/ui/hello_world');

  return helloWorldBoot;

  function helloWorldBoot() {
    HelloWorld.attachTo(".Example[data-example-name='hello_world']");
  }
});
