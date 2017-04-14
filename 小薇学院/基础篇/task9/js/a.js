var priLi = document.getElementsByClassName("price");
//侧边栏列表
function openList(){
	el = document.getElementsByClassName("asideList")[0];
	el.addEventListener("click",function(event){
		var i,str;
		event =  window.event||event;
		var asList= document.querySelectorAll(".asideList > li");
		for(i = 0;i < asList.length;i++){
			if(asList[i] === event.target){
				Array.prototype.map.call(asList,function(obj,arrIndex){
					var index = obj.className.indexOf("FirSele");
					console.log(index+" "+ obj.className);
					if(index > 0){
						obj.className=obj.className.replace("FirSele","");
						console.log(obj.className);
					}
					return obj;
				})	
				str = asList[i].className;
				str.charAt(str.length) == " " ? asList[i].className+="FirSele": asList[i].className+=" FirSele" ;
				return;
			}
		}
		asList= document.querySelectorAll(".firLayerLi");
		for(i = 0;i < asList.length;i++){
			if(asList[i] === event.target){
				Array.prototype.map.call(asList,function(obj,arrIndex){
					index = obj.className.indexOf("SecSele");
					console.log(index+" "+ obj.className);
					if(index > 0){
						obj.className=obj.className.replace("SecSele","");
						console.log(obj.className);
					}
					return obj;
				})	
				str = asList[i].className;
				str.charAt(str.length) == " " ? asList[i].className+="SecSele": asList[i].className+=" SecSele" ;
				return;
			}
		}
	});
}

function priceList(){
	var btn_left = document.getElementsByClassName("left")[0];
	var btn_right = document.getElementsByClassName("right")[0];
	var priList = document.getElementsByClassName("priList")[0];
	var pri = priLi[0];
	var left = 0,right = 0;

	btn_right.addEventListener("click",function(event){
		if(left == -468) return;
		priList.style.transform = "translateX("+(left-=117)+"px)";
		// priList.appendChild(priList.firstChild);
	});

	btn_left.addEventListener("click",function(event){
		if(left === 0) return;
		priList.style.transform = "translateX("+(left+=117)+"px)";
		// priList.insertBefore(priList.lastElementChild,priList.firstElementChild);
	});
}

function checkTime(){
	var hour = new Date().getHours();
	Array.prototype.forEach.call(priLi,function(obj){
		if(obj.className.indexOf('focus') >= 0 ){
			obj.className=obj.className.replace("focus","");
		}
	});
	if(hour >= 9 && hour <= 18){
		priLi[hour-9].className.slice(-1) == " " ? priLi[hour-9].className+="focus":priLi[hour-9].className+=" focus";
	}
	setTimeout(checkTime,1*60*1000);
}

function tabTable(){
	var proj = document.querySelectorAll(".proj button");
	var btn = document.getElementsByClassName('cli')[0];

	Array.prototype.forEach.call(proj,function(obj){
		obj.addEventListener('mouseover',function(){
			if(btn.className.indexOf('cli') >= 0){
				btn.className = btn.className.replace('cli','');
			}
			this.className.slice(-1) == ' '? this.className+='cli': this.className+=' cli';
			btn = this;
		});
	});
}

function changeDealPerson(){
	var change = document.getElementsByClassName('change')[0];
	var sell = document.querySelector('.sell select');
	var buy = document.querySelector('.buy select');
	var sellDiv = document.getElementsByClassName('sell')[0];
	var buyDiv = document.getElementsByClassName('buy')[0];
	var tmp;
	if(change.addEventListener){
		change.addEventListener('click',function(event){
			sellDiv.replaceChild(buy,sell);
			buyDiv.appendChild(sell);
			sell = [buy,buy = sell][0]
		});
	}
}

function ajaxXHR(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET","./data/account.json");
	xhr.send(null);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status ===200){
			var obj = JSON.parse(xhr.responseText);
			parseAccount(obj.result[0]);		
		}
	}
}

function ajaxPrice(){
	var xhr = new XMLHttpRequest();
	xhr.open('POST','./data/priceList.json');
	var formData = new FormData()
	xhr.send(formData);
	xhr.onreadystatechange = function(){
		var obj = JSON.parse(xhr.responseText);
		parsePriList(obj.result);
	}
}

function parseAccount(account){
	var username = document.getElementsByClassName('username')[0];
	var collNum = document.querySelector('.collect > .number');
	var fansNum = document.querySelector('.fans > .number');

	username.innerHTML = account.name;
	collNum.innerHTML = account.collect;
	fansNum.innerHTML = account.fans;
}

function parsePriList(priceList){
	var prili = document.getElementsByClassName('priList')[0],li,div,time;
	prili.innnerHTML = '';
	for(var i = 0;i<priceList.length;i++){
		li = document.createElement('li');
		li.className = 'price';
		div = document.createElement('div');
		div.className = 'time';
		time = priceList[i].time;
		if(time > 12){
			time = time+":00 am";
		}else{
			time = time+":00 pm";
		}
		div.innnerHTML = time;
		li.appendChild(div);
		div = document.createElement('div');
		div.className = 'num';
		div.innerHTML = priceList[i].moneny;
		li.appendChild(div);
	}
}

function addSubmitEvent(){
	var form = document.getElementsByClassName('form1')[0];
	form.addEventListener('submit',function(event){
		ajaxPrice();
	});
}




function init(){
	openList();	//侧边栏
	priceList();//价格列表
	checkTime();//价格列表时间选择	
	tabTable();	//tab选项卡
	changeDealPerson();//交换交易人
	ajaxXHR();
	addSubmitEvent();
}
window.onload = init()