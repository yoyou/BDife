

function check(){
	var dis;
	var inp = document.forms[0]["name1"].value;	
	var list=document.getElementsByTagName("p");
	for(var i=0;i<list.length;i++){
		list[i].style.display= "none";
	}
	if (!inp.value) {
		if (inp.length>=4 && inp.length <=16) {
			dis=document.getElementsByClassName("a1")[0].style.display="block";
		}else{
			dis=document.getElementsByClassName("a3")[0].style.display="block";
		}		
	}else{
			dis=document.getElementsByClassName("a2")[0].style.display="block";
	}

}


function init(){
	var btn=document.getElementsByTagName("button")[0];
	btn.onclick=check;
}


init();