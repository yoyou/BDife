var hmain,tdiv,lin,rin,lout,rout,inputText,count,sort_btn;
count=0;
function init(){
	hmain = document.getElementsByTagName("main")[0];
	lin = document.getElementById("lin");
	rin = document.getElementById("rin");
	lout = document.getElementById("lout");
	rout = document.getElementById("rout");
	inputText = document.getElementById("inputValue");
	sort_btn = document.getElementById("sort");

	sort_btn.onclick = function(){
		sort(hmain.childNodes);
	}

	lin.onclick = function(){
		if (hmain.childElementCount <= 60) {
			leftQueueIn();	
		}else{
			alert("元素个数大于60");
		}
	};

	rin.onclick = function(){
		if (hmain.childElementCount <= 60) {
			 rightQueueIn();
		}else{
			alert("元素个数大于60");
		}
	}

	lout.onclick = function(){
		leftQueueOut();
	}

	rout.onclick = function(){
		rightQueueOut();
	}
}

function createDIV(height){
	var tmp = document.createElement("div");
	tmp.style.cssText += "width:10px;background-color:red;margin:5px;height:"+height+"px;";
	return tmp;	
}

function leftQueueIn(){
	tdiv = createDIV(inputText.value);
	if (!hmain.firstChild) {
		hmain.insertBefore(tdiv,hmain.firstChild);	
	}else{
		hmain.appendChild(tdiv);
	}
}

function leftQueueOut(){
	hmain.removeChild(hmain.firstChild);
}

function rightQueueIn(){
	tdiv = createDIV(inputText.value);
	hmain.append(tdiv);
}

function rightQueueOut(){
	hmain.removeChild(hmain.lastChild);
}

function sort(list){
	console.log(list.length);
	var i,j,tmp;
	for(i=0;i<list.length;i++){
		for(j=1;j<list.length;j++){
			if (list[i].style.height > list[j].style.height) {
				tmp=hmain.replaceChild(list[i],list[j]);
				hmain.insertBefore(tmp,list[j]);
			}
		}
	}
}


init();
