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
      var nextPage = parseInt(currentPage) + 1;

      console.log(nextPage);

      $http({
        method: 'GET',
        url: api,
        params: {
          page: nextPage
        }
      }).then(function successCallback(response) {
        console.log("success", response.data);

        self.data = response.data;
        currentPage = response.data.page;
      }, function errorCallback(response) {
        console.log("hugeFuckingFailure: ", response.data);

      });
    }

    this.searchJobs = function(event) {
      event.preventDefault();

      var self = this;

      var title = $scope.searchTitle;
      var company = $scope.searchCompany;

      $http({
        method: 'GET',
        url: api,
        params: {
          title: title,
          company: company
        }
      }).then(function successCallback(response) {
        console.log("success", response.data);

        self.data = response.data;
        currentPage = response.data.page;
      }, function errorCallback(response) {
        console.log("hugeFuckingFailure: ", response.data);

      });
    }

    this.sortJobs = function(sort) {
      var self = this;

      $http({
        method: 'GET',
        url: api,
        params: {
          sort: sort
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
