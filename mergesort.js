function split (arr) {
	var res1= arr.slice(0,Math.floor(arr.length/2))
	var res2 = arr.slice(Math.floor(arr.length/2))
	return [res1,res2];
}

function merge(arr){
	if (arr.length ===1){
		return arr;
	}
	else {
		var splitArray = split(arr);
		var firstVal = merge(splitArray[0]);
		var secondVal = merge(splitArray[1]);
		if (firstVal>secondVal){
			return secondVal.concat(firstVal);
		}
		else{
			return firstVal.concat(secondVal);
		}
	}
}