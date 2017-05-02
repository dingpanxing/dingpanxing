//-------------------------------logjs---------------------------
/*$(function(){
	for(var i=0;i<2;i++){
		$("#clic-h>h4").index=i;
		$("#tab1").css("display","block");
		$("#tab1").css("display","none");
		$("#clic-h>h4")[i].click(function(){

			$("#show-log>table")[i].style.display==block?"block":"none";
			$("#clic-h>h4>span")[i].css("border-bottom","2px solid red");
		})
	}

});*/
var clic1=document.getElementById('cli1');
var clic2=document.getElementById('cli2');
var tab1=document.getElementById('tab1');
var tab2=document.getElementById('tab2');
var cli3=document.getElementById('cli3');
var cli4=document.getElementById('cli4');
var Onoff=true;
cli3.style.borderBottom = "5px solid #7e0001";
clic1.onclick=function(){

	tab2.style.display="none";
	tab1.style.display="block";
	cli3.style.borderBottom = "5px solid #7e0001";
	cli4.style.borderBottom = "none";

}
clic2.onclick=function(){
	tab2.style.display="block";
	tab1.style.display="none";
	cli4.style.borderBottom = "5px solid #7e0001";
	cli3.style.borderBottom = "none";

}
/*$(function(){
	$("#loca1").blur(function(event) {
		var reg=/^\w+@\w+\.(com|net|com\.cn)$/;
		var str=$("#loca1").val();
		if(reg.test(str)){

		}
	});
	$("#loca1").focus(function(event) {
		$("#showIf1").css({"display":"block","width":"50px","height":"20px"});
		$("#showIf1").html("请输入手机号");
	});
});*/