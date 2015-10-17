QUnit.module( 'max' );

QUnit.test( 'returns max value from a number collection', function( assert ) {
	var result = max( [ 1, 42, 0 ] );

	assert.equal( result, 42 );
});

QUnit.test( 'correctly handles invalid values', function( assert ) {
	var result =  max( [ 1, 42, 'a', 100 ] );

	assert.equal( result, 100 );
});
