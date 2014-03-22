define(function (require) {

  'use strict';

   var HelloWorldBoot = require('examples/hello_world/js/boot/hello_world');
   var Code = require('component/code');

  return initialize;

  function initialize() {
    Code.attachTo(".Example");

    //Examples
    HelloWorldBoot();
  }

});
