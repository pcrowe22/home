function displayNav() {
	document.getElementById("linkListHolder").classList.toggle("show");
}
window.onclick = function(event) {
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