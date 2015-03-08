'use strict';


var controllers = angular.module('worldInfo.controllers', []);


controllers.controller('AppCtrl', function ($scope) {
    $scope.name = "Module!";

});


/*controllers.controller('GetCityNameCtrl', function ($scope, $http) {
//    $scope.data;
//    $scope.city = "London";

    $scope.updateCity = function ($scope, $http) {
//        this.city = "Kitchener";
//        $scope.data;

        $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=London,uk&&units=metric&&callback=JSON_CALLBACK').then(function (data) {
            $scope.data = data.data;
            console.log(data);
        })

    };
});
*/
controllers.controller('WeatherListCtrl', function ($scope, $http) {
    $scope.data;
//$scope.city = "London";
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q=Kitchener&&units=metric&&callback=JSON_CALLBACK').then(function (data) {
        $scope.data = data.data;
        console.log(data);
    })
});