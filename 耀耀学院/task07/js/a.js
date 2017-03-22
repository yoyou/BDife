var tbody;
function init(){
	var tp = document.getElementsByClassName("top");
	var dn = document.getElementsByClassName("down");
	tbody = document.getElementsByTagName("tbody")[0];

	tp[0].onclick = function(){
		Upsort("china");			
	}

	dn[0].onclick = function(){
		Downsort("china");	
	}

	tp[1].onclick = function(){
		Upsort("math");
	}

	dn[1].onclick = function(){
		Downsort("math");
	}

	tp[2].onclick = function(){
		Upsort("eng");
	}

	dn[2].onclick = function(){
		Downsort("eng");
	}

	tp[3].onclick = function(){
		Upsort("total");
	}

	dn[3].onclick = function(){
		Downsort("total");
	}
}

function Upsort(str){
	console.log(str);
	var i,j,tmp;
	var nodelist = document.getElementsByClassName(str);
	for(i = 0; i < nodelist.length; i++){
		tmp = nodelist[i].parentElement.nextSibling;
		for(j = i+1; j < nodelist.length; j++){
			console.log(nodelist[i].innerHTML+"  "+nodelist[j].innerHTML);
			console.log(nodelist[i].innerHTML< nodelist[j].innerHTML);
			if (parseInt(nodelist[i].innerHTML) < parseInt(nodelist[j].innerHTML)) {
				//交换
				var tri = nodelist[i].parentElement;
				var trj = nodelist[j].parentElement;
				if (tmp === nodelist[j]) {
					tbody.replaceChild(tri,trj);
					tbody.insertBefore(trj,tri);					
				}else{
					tbody.replaceChild(tri,trj);
					tbody.insertBefore(trj,tmp);
				}
			}
		}
	}
}

function Downsort(str){
	console.log(str);
	var i,j,tmp,tri,trj;
	var nodelist = document.getElementsByClassName(str);
	for(i = 0; i < nodelist.length; i++){
		for(j = i+1; j < nodelist.length; j++){
			if (parseInt(nodelist[i].innerHTML) > parseInt(nodelist[j].innerHTML)) {
				//交换
				tmp = nodelist[i].parentElement.nextSibling;

				var tri = nodelist[i].parentElement;
				var trj = nodelist[j].parentElement;
				if (tmp === nodelist[j]) {
					tbody.replaceChild(tri,trj);
					tbody.insertBefore(trj,tri);					
				}else{
					tbody.replaceChild(tri,trj);
					tbody.insertBefore(trj,tmp);
				}
			}
		}
	}
}

init();


// var arr = [1,5,9,2,7,4,8];
// var tmp;
// for (var i = 0; i < arr.length; i++) {
// 	for (var j = 0; j < arr.length;j++){
// 		if (arr[i] > arr[j]) {
// 			tmp = arr[i];
// 			arr[i] = arr[j];
// 			arr[j] = tmp;
// 		}
// 	}
// }

// for(i = 0;i<arr.length;i++){
// 	console.log(arr[i]);
// }