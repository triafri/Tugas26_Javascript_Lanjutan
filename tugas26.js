var a = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

for (var i=0; i<a.length ; i++){
	if (Number.isFinite(a[i])) {
		console.log("Angka ", a[i], "Infinity")
	}else{
		console.log("Angka ", a[i], "Non Inifinity")
	} 
}