define(function (require) {

  'use strict';

   var HelloWorldBoot = require('examples/hello_world/js/boot/hello_world');
   var ColorMatcherBoot = require('examples/color_matcher/js/boot/color_matcher');
   var Code = require('component/code');

  return initialize;

  function initialize() {
    //Examples
    HelloWorldBoot();
    ColorMatcherBoot();

    Code.attachTo(".Example");
  }

});
