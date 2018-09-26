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

		// Click event for list options
		this.find('ul.mpoptions li').on('click', function() {
			var mpselect_mpoption_value = $(this).data('value'),
				mpselect_mpoption_text = $(this).text();
			$(this).addClass('mpactive').siblings('li').removeClass('mpactive');
			$(this).closest('.mpselect').find('select option[value=' + mpselect_mpoption_value + ']').prop('selected', true);
			$(this).closest('.mpselect').find('span.mpcurrent').text(mpselect_mpoption_text);
		});

		// Return the element for chaining functionality
		return this;
	};

}( jQuery ));