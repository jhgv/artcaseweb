var artcase = angular.module('artcase', []);

artcase.controller('TabCtrl', function(){

	this.tab = 1;

	this.setTab = function(setTab){
		this.tab = setTab;
	};

	this.isTabSelected = function(checkTab){
		return this.tab === checkTab;
	};

});