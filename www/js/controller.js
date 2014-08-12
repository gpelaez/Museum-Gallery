angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $ionicModal, $ionicPopup) {
	$ionicModal.fromTemplateUrl('views/modal-config.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modalConfig = modal;
	});
	var settings = angular.fromJson(window.localStorage.getItem('settings'));
	if(!settings) settings = {
		title: 'Configure la aplicación',
		backgroundColor: '#333',
		password: '0000',
	}
	$scope.settings = settings;
	$scope.saveChange = function() {
		console.log($scope.settings);
		window.localStorage['settings'] = angular.toJson($scope.settings);
	}
	$scope.config = function() {
		try {
			window.plugins.pinDialog.prompt("message", function(result) {
				 if(results.buttonIndex == 1)
				    {
				        // OK clicked, show input value
				        if(settings.password == results.input1) {
				        	$scope.modalConfig.show();
				        }
				    }
				    if(results.buttonIndex == 2)
				    {
				        // Cancel clicked
				        alert("Cancel");
				    }
			}, "title", ["OK","Cancel"]);

		} catch(e) {
			console.warn(e.message);
			$scope.modalConfig.show();
		}
	}
})
.controller('SettingsCtrl', function($scope) {
});
