define(function (require) {
  'use strict';

   var ColorMatcher = require('examples/color_matcher/js/ui/color_matcher');

  return function () {
    ColorMatcher.attachTo(".Example[data-example-name='color_matcher']");
  };
});
