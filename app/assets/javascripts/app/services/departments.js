app.factory('$departments', function($http, $q){

  //return public api
  return({
    CreateDepartment: CreateDepartment,
    GetDepartments: GetDepartments
  });

  function CreateDepartment(department_obj){

    var request = $http({
      method: 'POST',
      url: '/api/v1/departments/',
      data: $.param({
        name: department_obj.name,
        code: department_obj.code,
        password: department_obj.password
      }),
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    });

    return( request.then(SuccessHandler, ErrorHandler) );
  }

  function GetDepartments(){

    var request = $http({
      method: 'GET',
      url: ' /api/v1/departments'
    });

    return( request.then(SuccessHandler, ErrorHandler) );

  }

  //PRIVATE METHODS

  function ErrorHandler(response){

    if (
      ! angular.isObject( response.data ) ||
      ! response.data.message
    ) {
      return( $q.reject( "An unknown error occurred." ) );
    }
    // Otherwise, use expected error message.
    return( $q.reject( response.data.message ) );

  }

  function SuccessHandler( response ) {
    return( response.data );
  }

})