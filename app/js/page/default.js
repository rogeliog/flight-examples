define(function (require) {

  'use strict';

   var HelloWorld = require('component/hello_world');

  return initialize;

  function initialize() {
    HelloWorld.attachTo(".Example[data-example-name='hello_world']");
  }

});
