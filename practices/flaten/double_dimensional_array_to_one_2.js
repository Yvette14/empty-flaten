'use strict';

function double_to_one(collection) {
	var arr = new Array(),
	anotherArr = new Array();

	for (var i = 0, length = collection.length; i < length; i++) {
		arr = arr.concat(collection[i]);
	}

	for(var i=0,len = arr.length;i<len;i++){
		if(anotherArr.indexOf(arr[i])<0){
			anotherArr.push(arr[i]);
		}
	}
	return anotherArr;


}

module.exports = double_to_one;