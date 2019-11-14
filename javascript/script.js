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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
}

/*var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}*/
function init(){
	alert('This is a map of my neighborhood and where I photograph and compile into my game.');
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
		position: new google.maps.LatLng(41.787177, -99.001968),
		map: myMap,
		icon: 'media/Master Sword.png'
	});
	
	

}

google.maps.event.addDomListener(window, 'load', init);