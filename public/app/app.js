angular.module('app',["ngResource"]);

angular.module('app').controller('TestCtrl',function($scope,$resource){
    $scope.jobs=$resource('/api/jobs').query();
});