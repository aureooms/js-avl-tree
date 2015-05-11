
var insert = function ( compare, A, B ) {

	var node, value;

	node = null;
	value = B.value;

	while ( true ) {

		if ( compare( value, A.value ) <= 0 ) {

			node = A.left;

			if ( node === null ) {
				A.left = B;
				break;
			}

			A = node;

		}

		else {

			node = A.right;

			if ( node === null ) {
				A.right = B;
				break;
			}

			A = node;

		}

	}

	return B;

};

exports.insert = insert;
