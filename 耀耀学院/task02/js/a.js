function init(){
	var list=document.getElementsByTagName("input");
	console.log(list.length);
	list[0].addEventListener("focus",function(){
		document.getElementsByClassName("wrong_name")[0].style.display="none";
		document.getElementsByClassName("hint_name")[0].style.display="block";
	});
	list[0].addEventListener("blur",function(){
		document.getElementsByClassName("hint_name")[0].style.display="none";
		if (!this.value) {
			document.getElementsByClassName("wrong_name")[0].style.display="block";
		}
	});

	list[1].addEventListener("blur",function(){
		document.getElementsByClassName("pass1_right")[0].style.display="block";
	});

	list[1].addEventListener("focus",function(){
		document.getElementsByClassName("pass1_right")[0].style.display="none";
	});


	list[2].addEventListener("focus",function(){
		document.getElementsByClassName("pass2_hint")[0].style.display="block";
	});

	list[2].addEventListener("blur",function(){
		document.getElementsByClassName("pass2_hint")[0].style.display="none";
	});

	list[3].addEventListener("blur",function(){
		var re = new RegExp("[a-zA-Z0-9_-]+@(\.[a-zA-Z0-9_-]+)+");
		// var re = new RegExp("")
		if (!re.test(this.value)) {
			document.getElementsByClassName("mail_wrong")[0].style.display="block";
		}
	});
	list[3].addEventListener("focus",function(){
		document.getElementsByClassName("mail_wrong")[0].style.display="none";
	});

	list[4].addEventListener("blur",function(){
		var re = new RegExp("[0-9]+");
		// var re = new RegExp("")
		if ( re.test(this.value)) {
			document.getElementsByClassName("num_right")[0].style.display="block";
		}
	});
	list[4].addEventListener("focus",function(){
		document.getElementsByClassName("num_right")[0].style.display="none";
	});



	list[list.length-1].addEventListener("click",function(){
		if (!list[0].value) {
			document.getElementsByClassName("wrong_name")[0].style.display="block";
		}
		if (!list[1].value) {
			document.getElementsByClassName("pass1_right")[0].style.display="block";
		}
		if (list[1].value == list[2].value) {
			document.getElementsByClassName("pass2_right")[0].style.display="block";
		}
		if (!new RegExp("[a-zA-Z0-9_-]+@(\.[a-zA-Z0-9_-]+)+").test(list[3].value)) {
			document.getElementsByClassName("mail_wrong")[0].style.display="block";
		}
		if (new RegExp("[0-9]+").test(this.value)) {
			document.getElementsByClassName("num_right")[0].style.display="block";
		}
	});
}








init();

