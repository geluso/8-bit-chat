angular.module('ChatApp')
.component('profileComp', {
  templateUrl: 'app/containers/profile/profile.html',
  controller: ProfileCompCtrl,
  controllerAs: 'ProfileComp'
});

function ProfileCompCtrl(Auth) {

}

ProfileCompCtrl.$inject = ['Auth'];
