function cadenaLarge(arreglo){
	var alto = 0;
	var obj = {};
	for(var i = 0; i < arreglo.length; i++){
		if(typeof(arreglo[i])==="string"){
			if (arreglo[i].length>alto){
				alto = arreglo[i].length;
				obj.text=arreglo[i];
			}
		} else {
			console.log("Hay un valor no string!");
		}
	}
	obj.longitud = alto;
	console.log("Mas alto ",alto);
	return obj;
}

var cadenas = ["ljfioji", "bmnsopehj", "ylyldkhewopjdcu"];
var cadenas2 = ["asfsggst", 2, "llkkldslidlkkl"];
console.log(cadenaLarge(cadenas));
console.log(cadenaLarge(cadenas2));
