$(document).ready(function () {
	
	// console.log($( document ).width());
	
	var mobileView = false;
	
	if($(document).width() <= 721){
		mobileView = true;
	}
	
	// console.log(mobileView);
	
	$('#mobile-icon').click(function () {
		var location = '#btn-container-full';
		if(mobileView){
			location = '#mobile-header';
		}
		sessionStorage.setItem('etraindata', 'mobile');
		window.location.href = './services.html' + location;
	});
	
	$('#web-icon').click(function () {
		var location = '#btn-container-full';
		
		if(mobileView){
			location = '#web-header';
		}
		
		sessionStorage.setItem('etraindata', 'web');
		window.location.href = './services.html' + location;
	});
	
	$('#vr-icon').click(function () {
		var location = '#btn-container-full';
		
		if(mobileView){
			location = '#vr-header';
		}
		sessionStorage.setItem('etraindata', 'vr');
		window.location.href = './services.html' + location;
	});
	
	$('#haptics-icon').click(function () {
		var location = '#btn-container-full';
		
		if(mobileView){
			location = '#haptics-header';
		}
		sessionStorage.setItem('etraindata', 'haptics');
		window.location.href = './services.html' + location;
	});
	
	$('#library-icon').click(function () {
		var location = '#btn-container-full';
		
		if(mobileView){
			location = '#library-header';
		}
		sessionStorage.setItem('etraindata', 'library');
		window.location.href = './services.html' + location;
	});
	
	$('#services-icon').click(function () {
		var location = '#btn-container-full';
		
		if(mobileView){
			location = '#services-header';
		}
		sessionStorage.setItem('etraindata', 'services');
		window.location.href = './services.html' + location;
	});
	
	
	
	
	
});