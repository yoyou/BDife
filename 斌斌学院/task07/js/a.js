var src,bpr,bin,baf,i,x;
var list = document.getElementsByTagName("div");
var count = document.getElementsByClassName("zero").length;
var zero = document.getElementsByClassName("zero");
var af_link,in_link,pr_link;

af_link=[];
in_link=[];
pr_link=[];

function init() {
	bpr = document.getElementsByClassName("pre-order")[0];
	bin = document.getElementsByClassName("in-order")[0];
	baf = document.getElementsByClassName("af-order")[0];

	bpr.onclick = function(){
		changeColor(pr_link,0);		
	}
	bin.onclick = function(){
		// console.log(list.length-1);
		changeColor(in_link,0);		
		// in_link[1].style.backgroundColor="red";
	}
	baf.onclick = function(){
		changeColor(af_link,0);		
	}
}

function changeColor(arr,count){
	
	if (count<list.length-1) {
		if (count!=0) {
			arr[count-1].style.backgroundColor="white";
		}
		console.log(count);
		arr[count].style.backgroundColor="red";
		setTimeout(function(){changeColor(arr,++count);},1000);
	}	
}

function pr_trave(node){
	if (node!=null) {
		pr_link.push(node);
		pr_trave(node.firstElementChild);
		pr_trave(node.lastElementChild);
	}
}

function in_trave(node){
	if(node!=null){
		in_trave(node.firstElementChild);
		in_link.push(node);
		in_trave(node.lastElementChild);
	}
}

function af_trave(node){
	if (node!=null) {
		af_trave(node.firstElementChild);
		af_trave(node.lastElementChild);
		af_link.push(node);
	}
}

init();



for(i=0;i < count;i++){
	in_trave(zero[i]);//中序遍历
	af_trave(zero[i]);//后序遍历
	pr_trave(zero[i]);//先序遍历
}







