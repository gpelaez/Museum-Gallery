angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $ionicModal, $ionicPopup, $timeout) {
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
		textColor: '#ddd',
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
	$scope.initGallery = function(index) {
		var gallery = $scope.settings.gallery[index];
		gallery.thumbnail = (gallery.images.length>0? gallery.images[0]:null);
		if(gallery.images.length>1) {
			var currentThumbnail = 0;
			$timeout(function() {
				currentThumbnail++;
				if(currentThumbnail>gallery.images.length) currentThumbnail = 0;
				$scope.settings.gallery[index].thumbnail 
			}, 1400)
		}
	}
})
.controller('SettingsCtrl', function($scope) {
});
