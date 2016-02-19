(function() {
  var app = angular.module("JobbedOut");

  app.directive("job", function() {
    var directive = {};
    directive.restrict = "E";
    directive.replace = true;
    directive.templateUrl = "/templates/_jobView.html";

    return directive;

  });
})();
