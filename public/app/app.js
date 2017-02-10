app = angular.module('app', ["ngResource"]);

angular.module('app').controller('TestCtrl', function($scope, $resource, jobs) {
    $scope.jobs = $resource('/api/jobs').query();


    $scope.submit = function() {
        var job = ({
            title: $scope.title,
            desc: $scope.description
        });

        jobs.save(job);

        $scope.jobs.push(job);
    }
});
