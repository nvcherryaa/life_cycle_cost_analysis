app.controller('DepartmentsCtrl', function($scope, $departments, $timeout){

  //form object for add_department
  $scope.d = {}

  $departments.GetDepartments2().then(function(data){
    console.log(data);
  }).catch(function(){
    console.log('errors')
  })
  
  $scope.CreateDepartment = function(){
    console.log(this.l)
    $scope.l.ladda('start');
    $departments.CreateDepartment(this.d).then(function(data){
      $timeout(function(){
        StopLadda();
        $scope.departments.push(data.data);
        $scope.d = {};
      }, 500)
    }, function(error){
      console.log(error)
    });
  }

  $scope.SuggestCode = function(){
    if($scope.d.name == ''){
      $scope.d.code = '';
      return;
    }

    var articles = ['a', 'an', 'and', 'the', 'of'];
    var arr = $scope.d.name.split(' ');
    var code = '';
    angular.forEach(arr, function(x){
      if(articles.indexOf(x) == -1){
        code += x[0];
      }
    })

    $scope.d.code = code;
  }

  //Initialize Ladda Button
  $scope.InitLadda = function(){
    //user spinner buttons
    $scope.l = $('.ladda-button').ladda();

  }

  $scope.InitLadda();

  function StopLadda(){
    var l = $('.ladda-button').ladda();
    l.ladda( 'stop' );
  }

  this.departments = [];

  //GET DEPARTMENTS
  $scope.GetDepartments = function(){

    $departments.GetDepartments().then(function(data){
      $scope.departments = data;
    })
  }

  //$scope.GetDepartments();

})
