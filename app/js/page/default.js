define(function (require) {

  'use strict';

   var HelloWorldBoot = require('examples/hello_world/boot/hello_world');
   var Code = require('component/code');
   var ColorPicker = require('component/color_picker');
   var ColorBox = require('component/color_box');

  return initialize;

  function initialize() {
    HelloWorldBoot();
    Code.attachTo(".Example");

    ColorPicker.attachTo(".Example-color-picker");
    ColorBox.attachTo(".Example-color-box");
  }

});
