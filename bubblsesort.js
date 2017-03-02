function bubbleSort (arr) {
	var res = arr
	var tail = arr.length
	for (var i = 0; i<arr.length;i++) {
		for (var j=0;j<tail-1;j++) {
			var first = res[j]
			var second = res[j+1]
			if(first > second){
				res[j+1] = first
				res[j] = second
			} 
		}
		tail-=1
	}
	return res
}

