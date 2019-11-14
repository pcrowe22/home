var sPath = window.location.pathname;
var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
if (sPage == "map.html") {
	
	function initMap(){
		var el = document.getElementById('canvas');
		var myLocation = new google.maps.LatLng(41.7889, -88.0021);
		var mapOptions = {
			center: myLocation,
			zoom: 18,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			mapTypeControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER
			}
		};

		var myMap = new google.maps.Map(el, mapOptions);

		var marker = new google.maps.Marker({
			position: myLocation,
			map: myMap,
			animation: google.maps.Animation.BOUNCE,
			icon: 'media/triforce.png'
		});

		var contentString = '<h1>Home Base</h1><p>This is where the game starts, and multiple paths will branch off from here. I want to make a library shelf here where you can put books you have collected from around the neighborhood.</p><p>The Master Swords represent where I have walked in the past.</p>';
		var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

		google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});
		
		var walkRoute1 = new google.maps.Marker({
			position: new google.maps.LatLng(41.787177, -88.001968),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute2 = new google.maps.Marker({
			position: new google.maps.LatLng(41.783094, -88.001814),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute3 = new google.maps.Marker({
			position: new google.maps.LatLng(41.780601, -87.998962),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute4 = new google.maps.Marker({
			position: new google.maps.LatLng(41.779259, -87.994356),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute5 = new google.maps.Marker({
			position: new google.maps.LatLng(41.779112, -88.001627),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute6 = new google.maps.Marker({
			position: new google.maps.LatLng(41.775676, -88.001831),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute7 = new google.maps.Marker({
			position: new google.maps.LatLng(41.780786, -87.994424),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute8 = new google.maps.Marker({
			position: new google.maps.LatLng(41.780807, -87.989204),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute9 = new google.maps.Marker({
			position: new google.maps.LatLng(41.781068, -87.978793),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute10 = new google.maps.Marker({
			position: new google.maps.LatLng(41.780068, -87.984247),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute11 = new google.maps.Marker({
			position: new google.maps.LatLng(41.777198, -87.986813),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute12 = new google.maps.Marker({
			position: new google.maps.LatLng(41.777850, -87.993928),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute13 = new google.maps.Marker({
			position: new google.maps.LatLng(41.780590, -88.003610),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute14 = new google.maps.Marker({
			position: new google.maps.LatLng(41.781460, -88.004134),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute15 = new google.maps.Marker({
			position: new google.maps.LatLng(41.783308, -88.008509),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute16 = new google.maps.Marker({
			position: new google.maps.LatLng(41.787287, -88.008743),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
		var walkRoute17 = new google.maps.Marker({
			position: new google.maps.LatLng(41.787483, -88.003873),
			map: myMap,
			icon: 'media/Master Sword.png'
		});
	
	}
	function showMap() {
		google.maps.event.addDomListener(window, 'load', initMap);
	}
} 
if (sPage == "pictures.html") {
	
	var slideIndex = 0;
	showSlides();

	var slideIndex = 1;
	showSlides(slideIndex);

// Next/previous controls
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

// Thumbnail image controls
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}	

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("picShow");
		var dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className += " active";
	}
}