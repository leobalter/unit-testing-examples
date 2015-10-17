function max( array ) {
	var value = -Infinity;

	array.forEach(function(current) {
		current = parseFloat( current );
		 if ( current > value ) {
			 value = current;
		 }
	});

	return value;
}
