angular.module('app',[]);

angular.module('app').controller('TestCtrl',function($scope){
    $scope.jobs=[{
        title:"a1",desc:"good job"
    },{
        title:"a2",desc:"okay job"
    }]
});