define(function (require) {

  'use strict';

   var HelloWorldBoot = require('examples/hello_world/js/boot/hello_world');
   var Code = require('component/code');

  return initialize;

  function initialize() {
    //Examples
    HelloWorldBoot();

    Code.attachTo(".Example");
  }

});
