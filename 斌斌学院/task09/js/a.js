var prlink,dstNode;
prlink=[];
function init(){
	var btn = document.getElementsByTagName("button");
	var che_btn = document.getElementsByName("checkcout");
	btn[0].addEventListener("click",function(){
		changeColor(prlink,0);
		console.log(document.getElementsByTagName('div').length);
	});	
	che_btn[0].addEventListener("click",function(){
		var arr = prlink;
		var text = document.getElementsByName("searchText")[0].value;
		for(var i=0;i<arr.length;i++){
			if(text == arr[i].firstChild.nodeValue.trim()){
				arr[i].style.backgroundColor="red";
			}
		}
	});
	btn[1].addEventListener("click",function(){
		dstNode.remove();
	});
}

//前序
function pr_traves(node){
	var list;
	list = node.children;
	if (node != null) {
		prlink.push(node);
		node.addEventListener("click",function(eve){
			this.style.backgroundColor="red";
			dstNode=this;
			eve.stopPropagation();
		},false);
		for(var i=0;i<list.length;i++){
			pr_traves(list[i]);
		}
	}
}

function changeColor(arr,index){
	if (index<arr.length) {
		if(index != 0){
			arr[index-1].style.backgroundColor = '#fff';
		}
		arr[index].style.backgroundColor = 'red';
		setTimeout(function(){changeColor(arr,++index)},500);	
	}else{
		arr[index-1].style.backgroundColor = '#fff';
	}
}

init();
pr_traves(document.getElementsByTagName('div')[0]);

