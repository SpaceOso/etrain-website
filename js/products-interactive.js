$(document).ready(function () {

	var $blueBar = $('');
	var currentBtn = '#mobile-icon';
	var infoName = 'mobile';
	
	var $btnContainer = $('#btn-container-full');
	
	var $learnMoreBtn = $('.learnMore-btn');
	
	
	//info
	var $productHeader = $('#product-header');
	var $productSubHeader = $('#product-subheader');
	var $productInfo = $('#product-info');
	var $productImage = $('#product-image');
	
	function hideOldInfo(){
		$(currentBtn + " .blue-bar").hide();
		$(currentBtn).removeClass('selected-product');
	}
	
	function displayInfo(infoName){
		var currentProduct = productInfo[infoName];
		
		$productHeader.html(currentProduct.header);
		$productSubHeader.html(currentProduct.subHeader);
		$productInfo.html(currentProduct.info);
		$productImage.attr('src', currentProduct.img);
		//set learn more button with correct link
		$learnMoreBtn.attr('onclick', currentProduct.link);
	}
	
	function initProductView(targetParent, infoName){
		hideOldInfo();
		currentBtn = targetParent;
		$(currentBtn + " .blue-bar").show();
		$(currentBtn).addClass('selected-product');
		displayInfo(infoName);
	}
	
	
	$('#product-mobile').on('click', function () {
		initProductView('#mobile-icon', 'mobile');
	});
	
	$('#product-web').on('click', function () {
		initProductView('#web-icon', 'web');
	});
	
	$('#product-vr').on('click', function () {
		initProductView('#vr-icon', 'vr');
	});
	
	$('#product-library').on('click', function () {
		initProductView('#library-icon', 'library');
	});
	
	$('#product-services').on('click', function () {
		initProductView('#services-icon', 'services');
	});
	
	function init() {
		var storageInfo = sessionStorage.getItem('etraindata');
		
		var mobileView = false;
		//todo need to check to see if we are in mobile view
		if($btnContainer.css('display') === 'none' || $btnContainer.css('display') === undefined){
			mobileView = true;
		}
		
		//if there is data saved load it
		if(storageInfo){
			if(!mobileView){
				currentBtn = '#' + storageInfo +'-icon';
			} else {
				currentBtn = storageInfo + '-header';
			}
			infoName = storageInfo;
			initProductView(currentBtn, infoName);
		} else {
			var idTag = '#mobile-icon';
			
			//if there isn't set the first button
			if(mobileView){
				idTag = 'mobile-header'
			}
			initProductView(idTag, 'mobile');
		}
		
	}
	init();
});