var dst,rotate,trlist,td,trd,index;
var lef,bck,rig,go,to,dir;
index=1;
function init() {
	rotate=0;
	dst = document.getElementsByClassName("dst")[0];
	td = dst.parentNode;
	trd = document.getElementsByTagName("tr")[1];
	lef = document.getElementsByTagName("button")[0];
	rig = document.getElementsByTagName("button")[1];
	bck = document.getElementsByTagName("button")[2];
	go = document.getElementsByTagName("button")[3];
	to = document.getElementsByTagName("button")[4];
	dir = document.getElementById("dir");

	lef.onclick = moveLeft;

	rig.onclick = moveRight;

	bck.onclick = goBack;

	go.onclick = move;

	to.onclick = function(){
		var tmp;
		switch(dir.value){
			case "GO":
				move();
				break;
			case "TUN LEF":
				moveLeft();
				break;
			case "TUN RIG":
				moveRight();
				break;
			case "TUN BAC":
				goBack();
				break;
			case "MOV LEF":
				moveLeft();
			case "TRA LEF":
				goLeft(tmp);
				break;
			case "MOV TOP":
				goBack(1);
			case "TRA TOP":
				goUp(tmp);
				break;
			case "MOV RIG":
				moveRight();
			case "TRA RIG":
				goRight(tmp);
				break;
			case "MOV BOT":
				goBack(-1);
			case "TRA BOT":
				goDown(tmp);
				break;
			case "MOV LEF":
				goDown(tmp);
			default:
				alert("命令错误");
		}
	}

}

function goBack(x){
	if (x == -1) {
		if (rotate != 180 || rotate != -180) {
			toAnimation(dst,rotate,180);
			rotate = 180;
		}
	}else if (x == 1) {
		if (rotate != 0) {
			toAnimation(dst,rotate,0);
			rotate = 0;
		}
	}else if (rotate == 0) {
		toAnimation(dst,0,180);
		rotate = 180;
	}else if (rotate == 180 || rotate == -180){
		toAnimation(dst,rotate,0);
		rotate = 0;
	}else{
		toAnimation(dst,rotate,-rotate);
		rotate *=-1;
	}
	console.log(rotate);
	// dst.style.transform="rotate("+ rotate+"deg)";	
}

function moveRight(){
	if (rotate == 180 || rotate == -180) {
		rotate = -180;
	}
	toAnimation(dst,rotate,rotate+90);	
	rotate +=90;
	// dst.style.transform="rotate("+ rotate+"deg)";
	console.log(rotate);
}

function moveLeft(){
	if (rotate == -180 || rotate == 180) {
		rotate = 180;
	}
	toAnimation(dst,rotate,rotate-90);
	rotate-=90;
	console.log(rotate);
	// dst.style.transform="rotate("+ rotate+"deg)";	
}



function move(){
	var tmp;
	if (rotate==90) {		//右走
		goRight(tmp);			
	}else if (rotate ==-90) {	//左走
		goLeft(tmp);
	}else if (rotate == 0){
		goUp(tmp);
	}else if (rotate == 180 || rotate ==-180) {
		goDown(tmp);
	}
}


function goDown(tmp){
	console.log("下走");
	if (index < 10) {
		index++;
		tmp = trd.parentNode.replaceChild(trd,trd.nextElementSibling);
		trd.parentNode.insertBefore(tmp,trd);
		tmp.firstElementChild.innerHTML=index-1;
		trd.firstElementChild.innerHTML=index;
	}else{
		alert("在边缘了");
	}
}

function goUp(tmp){
	console.log("上走");
	if (index >1) {
		index--;
		tmp = trd.parentNode.replaceChild(trd,trd.previousElementSibling);
		if (index != 9) {
			trd.parentNode.insertBefore(tmp,trd.nextElementSibling);
		}else{
			trd.parentNode.appendChild(tmp);
		}
		tmp.firstElementChild.innerHTML=index+1;
	 	trd.firstElementChild.innerHTML=index;
	}
}

function goRight(tmp){
	console.log("右走");
	if(td.nextElementSibling){
	tmp=trd.replaceChild(td,td.nextElementSibling);
	trd.insertBefore(tmp,td);				
	}else{
		alert("在边缘了");
	}
}

function goLeft(tmp){
	console.log("左走");
	if (td.previousElementSibling.previousElementSibling) {
		tmp=trd.replaceChild(td,td.previousElementSibling);
		trd.insertBefore(tmp,td.nextElementSibling);
	}else{
		alert("在边缘了");
	}

}

function toAnimation(ele,startRadius,endRadius){
	console.log(startRadius+"  "+endRadius);
	setTimeout(function(){
		if (endRadius > startRadius) {
			startRadius+=5;
			ele.style.transform = "rotate("+startRadius+"deg)";
			toAnimation(ele,startRadius,endRadius);
		}if (endRadius < startRadius) {
			startRadius-=5;
			ele.style.transform = "rotate("+startRadius+"deg)";
			toAnimation(ele,startRadius,endRadius);
		}
	},25);
}



window.onload=init();