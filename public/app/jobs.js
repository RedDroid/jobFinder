app.factory('jobs',function($resource){
    return $resource('/api/jobs');
})