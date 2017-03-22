function init() {
	var btn_l=document.getElementsByTagName("button");
	for (var i = 0; i < btn_l.length; i++) {
		btn_l[i].onclick = function(){
			document.getElementsByClassName("aaa")[0].style.display = "none";
		}
	}

	document.getElementsByClassName("aaa")[0].onclick=function(){
		document.getElementsByClassName("aaa")[0].style.display = "none";
	}
}


init();