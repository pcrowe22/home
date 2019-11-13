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
	}
}

	if (!event.target.matches("#nav-button")) {
		var dropdowns = document.getElementsByClassName("dropdownLinks");
		var i;
		for (i=0; i<dropdowns.length; i++){
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}