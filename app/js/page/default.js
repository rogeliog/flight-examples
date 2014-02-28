define(function (require) {

  'use strict';

   var HelloWorld = require('component/hello_world');
   var Code = require('component/code');

  return initialize;

  function initialize() {
    HelloWorld.attachTo(".Example[data-example-name='hello_world']");
    Code.attachTo(".Example-code");
  }

});
