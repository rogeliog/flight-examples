define(function (require) {

  'use strict';

   var HelloWorld = require('component/hello_world');
   var Code = require('component/code');
   var ColorPicker = require('component/color_picker');
   var ColorBox = require('component/color_box');

  return initialize;

  function initialize() {
    HelloWorld.attachTo(".Example[data-example-name='hello_world']");
    Code.attachTo(".Example");

    ColorPicker.attachTo(".Example-color-picker");
    ColorBox.attachTo(".Example-color-box");
  }

});
