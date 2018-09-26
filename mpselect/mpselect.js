$(document).ready(function() {

	// Create MPSelect Plugin
	$.fn.mpselect = function() {

		// First hide the <select> element
		this.children('select').css('visibility', 'hidden');

		// Return the element for chaining functionality
		return this;
	};

});