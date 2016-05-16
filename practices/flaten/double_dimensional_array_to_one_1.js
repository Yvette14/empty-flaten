'use strict';

function double_to_one(collection) {
	var arr = new Array();
	
	for (var i = 0, length = collection.length; i < length; i++) {
		arr = arr.concat(collection[i]);
	}

	return arr;
}

module.exports = double_to_one;