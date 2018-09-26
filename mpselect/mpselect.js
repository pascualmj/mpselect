(function ( $ ) {

	// Create MPSelect Plugin
	$.fn.mpselect = function() {

		// First hide the <select> element
		this.children('select').prop('hidden', true);

		// Create a list with the options select tag has
		this.prepend('<ul class="mpoptions"></ul>');
		this.find('select option').each(function() {
			var mpselect_option_value = $(this).val(),
				mpselect_option_text = $(this).text(),
				mpselect_option_format = [mpselect_option_value, mpselect_option_text];
			if(parseInt(mpselect_option_value)) {
				$(this).closest('.mpselect').find('ul.mpoptions').append('<li data-value="' + mpselect_option_format[0] + '">' + mpselect_option_format[1] + '</li>');
			}
		});

		// Create the element for the current item
		this.prepend('<span class="mpcurrent">' + this.find('option[value=0]').text() + '</span>');

		// Return the element for chaining functionality
		return this;
	};

}( jQuery ));