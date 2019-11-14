var isShowing = false;
function displayNav() {
	if (isShowing == true) {
		document.getElementById("linkListHolder").classList.toggle("show");
		isShowing = false;
	} else {
		var dropdowns = document.getElementsByClassName("dropdownLinks");
		var i;
		for (i=0; i<dropdowns.length; i++){
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
		isShowing = true;
	}
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}