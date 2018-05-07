angular.module('adminmueblesApp')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('Has sido desconectado');
        $location.path('/');
      });
  });