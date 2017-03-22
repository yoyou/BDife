var stu=document.getElementById("stu");
var nstu=document.getElementById("nstu");
var unit = document.getElementsByClassName("unit")[0];
var sch = document.getElementsByClassName("sch")[0];
stu.addEventListener("click",function(){
	nstu.checked=false;
	unit.style.display="none";
	sch.style.display="block";	
});

nstu.addEventListener("click",function(){
	stu.checked=false;
	unit.style.display="block";
	sch.style.display="none";	

});