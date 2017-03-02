function split (arr) {
	var res1= arr.slice(0,Math.floor(arr.length/2))
	var res2 = arr.slice(Math.floor(arr.length/2))
	return [res1,res2];
}

function merge(arr){
	var outputArr = []
	if (arr.length === 1){
		return arr;
	}
	else {
		var splitArray = split(arr);
		var firstVal = merge(splitArray[0]);
		var secondVal = merge(splitArray[1]);
			var tempArr = [];
			var tempFirstArr = firstVal
			var tempSecondArr = secondVal
			var tempLength = tempFirstArr.length + tempSecondArr.length
			for (var i = 0; i < tempLength;i++) {
				if (tempSecondArr[0] == undefined || tempFirstArr[0] < tempSecondArr[0]){
					tempArr.push(tempFirstArr.shift())
				}
				else if (tempFirstArr[0] == undefined || tempFirstArr[0] > tempSecondArr[0]) {
					tempArr.push(tempSecondArr.shift())
				} 

			}
			return tempArr
		}
}