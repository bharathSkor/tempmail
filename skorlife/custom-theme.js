(function () {
  "use strict";
  angular.module("SOGo.Common").config(configure);

  configure.$inject = ["$mdThemingProvider"];
  function configure($mdThemingProvider) {
    var greyMap = $mdThemingProvider.extendPalette("grey", {
      200: "F5F5F5",
      300: "E5E5E5",
      1000: "4C566A",
    });
    var blueCow = $mdThemingProvider.extendPalette("blue", {
      600: "E5E5E5",
    });
    $mdThemingProvider.definePalette("frost-grey", greyMap);
    $mdThemingProvider.definePalette("blue-cow", blueCow);
    $mdThemingProvider
      .theme("default")
      .primaryPalette("blue-cow", {
        default: "400",
        "hue-1": "400",
        "hue-2": "600",
        "hue-3": "A700",
      })
      .accentPalette("blue", {
        default: "600",
        "hue-1": "300",
        "hue-2": "300",
        "hue-3": "A700",
      })
      .backgroundPalette("frost-grey");
    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
