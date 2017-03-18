var inputText,lin,lout,rin,rout,div_list,main,tdiv,arr;

function init(){
	inputText = document.getElementById("inputText");
	lin = document.getElementById("left_in");
	lout = document.getElementById("left_out");
	rin = document.getElementById("right_in");
	rout = document.getElementById("right_out");
	div_list = document.getElementsByClassName("red_div");
	main = document.getElementsByTagName("main")[0];
	tdiv = div_list[0].cloneNode(true);
	lin.onclick = function(){
		arr = splitArray(inputText.value);
		for(var i = 0;i<arr.length;i++){
			leftQueueIn(arr[i],div_list[0]);
		}
	}
	rin.onclick = function(){
		arr = splitArray(inputText.value);
		for(var i = 0;i<arr.length;i++){
			rightQueueIn(arr[i],div_list[div_list.length-1]);
		}
		
	}

	lout.onclick = function(){
		leftQueueOut();
	}
	rout.onclick = function(){
		rightQueueOut();
	}
}

function splitArray(text){
	var arr = text.split(/[\s.,。、	]/g);
	return arr;
}

function handler(){

	for(var i = 0;i<div_list.length;i++){
		div_list[i]["onclick"] = function(){
			this.textContent="";
		}
	}
};

function leftQueueIn(value,element){
	if (element.innerHTML != " ") {
		if (element.nextElementSibling == null) {
			element.textContent = value.trim();
			return;
		}
		leftQueueIn(element.textContent,element.nextElementSibling);
	}
	element.textContent = value;
}

function rightQueueIn(value,element){
	if (element.innerHTML != " ") {
		if(element.previousElementSibling == null || element.previousElementSibling.nodeName !="DIV"){
			element.textContent = value;
			return;
		}
		rightQueueIn(element.textContent,element.previousElementSibling);
	}
	element.textContent = value;
}

function leftQueueOut(){
	var tmp = tdiv.cloneNode(true)
	main.appendChild(tmp);
	main.removeChild(main.firstElementChild);
}


function rightQueueOut(){
	var tmp = tdiv.cloneNode(true);
	main.insertBefore(tmp,main.firstElementChild);
	main.removeChild(main.lastElementChild);
}


window.onload=function(){
	init();
}









