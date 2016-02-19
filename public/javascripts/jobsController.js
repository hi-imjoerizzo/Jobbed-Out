(function() {
  'use strict';

  var app = angular.module('JobbedOut');

  app.controller("JobsController", function($scope, $http) {
    var self = this;

    $http({
      method: "GET",
      url: "/api/v1/jobs"
    }).then(function successCallback(response) {
      console.log("success", response.data.docs);

      self.jobs = response.data.docs;
    }, function errorCallback(response) {
      console.log("hugeFuckingFailure: ", response.data);

    });
    this.loadMore = function(){
      var self = this;

      $http({
        method:"GET",
        url: api,
        data:{
        }
      })
    }
    return this;
  });
})();
