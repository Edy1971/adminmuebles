angular.module('adminmueblesApp')
  .controller('SignupCtrl', function($scope, $location, $auth, toastr) {
    $scope.signup = function() {
      $auth.signup($scope.user)
        .then(function(response) {
          $auth.setToken(response);
          $location.path('/');
          toastr.info('Ha creado con éxito una nueva cuenta ');
        })
        .catch(function(response) {
          toastr.error(response.data.message);
        });
    };
  });