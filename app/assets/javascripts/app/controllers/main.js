app.controller('MainCtrl', function($scope, $http){

  $scope.main = {
    department_action: 'add'
  }

  $scope.SetAction = function(action){
    $scope.main.department_action = action;
  }

})