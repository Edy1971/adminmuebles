angular.module('adminmueblesApp')
  .controller('ProfileCtrl', function($scope, $auth, toastr, Account) {
    $scope.getProfile = function() {
      Account.getProfile()
        .then(function(response) {
          $scope.user = response.data;
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.updateProfile = function() {
      Account.updateProfile($scope.user)
        .then(function() {
          toastr.success('Su perfil ha sido actualizado');
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.link = function(provider) {
      $auth.link(provider)
        .then(function() {
          toastr.success('Has vinculado exitosamente una cuenta de ' + provider);
          $scope.getProfile();
        })
        .catch(function(response) {
          toastr.error(response.data.message, response.status);
        });
    };
    $scope.unlink = function(provider) {
      $auth.unlink(provider)
        .then(function() {
          toastr.info('Has desvinculado una cuenta de ' + provider);
          $scope.getProfile();
        })
        .catch(function(response) {
          toastr.error(response.data ? response.data.message : 'No se pudo desvincular la cuenta de  ' + provider, response.status);
        });
    };

    $scope.getProfile();
  });
