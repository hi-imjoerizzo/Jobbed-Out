(function() {
  'use strict';

  var app = angular.module('JobbedOut');

  app.controller("JobsController", function($scope, $http) {
    var self = this;

    $http({
      method: "GET",
      url: "/api/v1/jobs"
    }).then(function successCallback(response) {
      console.log("success", response.data);

      self.jobs = response.data;
    }, function errorCallback(response) {
      console.log("hugeFuckingFailure: ", response.data);

    });
    return this;
  });
})();
