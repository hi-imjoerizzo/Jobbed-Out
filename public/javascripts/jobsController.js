(function() {
  'use strict';

  var app = angular.module('JobbedOut');
  var api = '/api/v1/jobs/';

  app.controller("JobsController", function($scope, $http) {
    var self = this;
    var currentPage;

    $http({
      method: "GET",
      url: api
    }).then(function successCallback(response) {
      console.log("success", response.data);

      self.data = response.data;
      currentPage = response.data.page;
    }, function errorCallback(response) {
      console.log("hugeFuckingFailure: ", response.data);

    });


    this.loadMore = function() {
      var self = this;

      $http({
        method: 'GET',
        url: api,
        data: {
          page: currentPage + 1
        }
      }).then(function successCallback(response) {
        console.log("success", response.data);

        self.data = response.data;
        currentPage = response.data.page;
      }, function errorCallback(response) {
        console.log("hugeFuckingFailure: ", response.data);

      });
    }

    return this;
  });
})();
