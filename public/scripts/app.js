angular
  .module('AuthSampleApp', [
    'ngRoute',
    'satellizer'
  ])
  .controller('MainController', MainController)
  .controller('GraphsIndexController', GraphsIndexController)
  .controller('GraphsNewController', GraphsNewController)
  .controller('GraphsShowController', GraphsShowController)
  .controller('LoginController', LoginController)
  .controller('SignupController', SignupController)
  .controller('LogoutController', LogoutController)
  .controller('ProfileController', ProfileController)
  .service('UserService', UserService)
  .config(configRoutes)
  ;
