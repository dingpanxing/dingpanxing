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
$(function(){

	$("#loca1").focus(function() {
		$("#showIf1").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
		$("#showIf1").html("请输入登录账号");
	});
	$("#loca1").blur(function() {
		if($("#loca1").val()==""){
			$("#showIf1").html("登录名不能为空");
			$("#showIf1").css({"display":"block","color":"#7e0001"});
		}else{
			var reg=/^\w+@\w+\.(com|net|com\.cn)$/;
			var reg1=/^1[35784][0-9]{9}$/;
			var str=$("#loca1").val();
			if(reg.test(str) || reg1.test(str)){
				$("#showIf1").html("√");
				$("#showIf1").css({"display":"block","font-size":"20px","font-weight":"600","color":"green","background":"#fff","text-align":"left","border":"none"});
			}else{
				$("#showIf1").html("输入不合法");
				$("#showIf1").css({"display":"block","color":"#7e0001","font-weight":"600"});
			}
		}

	});
	$("#loca2").focus(function() {
		$("#showIf2").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
		$("#showIf2").html("6-16位");
	});
	$("#loca2").blur(function(){
		var reg1=/^[0-9a-zA-Z]]{6-16}$/;
		var str=$("#loca2").val();
		if(reg1.test(str)){
			$("#showIf2").html("√");
			$("#showIf2").css({"display":"block","font-size":"20px","font-weight":"600","color":"green","background":"#fff","text-align":"left","border":"none"});			
		}else{
			$("#showIf2").html("输入不合法");
			$("#showIf2").css({"display":"block","color":"#7e0001","font-size":"14px"});
		}
	});

	$("#loca3").focus(function() {
		$("#showIf3").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
		$("#showIf3").html("请输入手机号");
	});

	$("#loca3").blur(function(){
		if($("#loca3").val()==""){
			$("#showIf3").html("登录名不能为空");
			$("#showIf3").css({"display":"block","color":"#7e0001"});
		}else{
			var reg=/^1[35784][0-9]{9}$/;
			var str=$("#loca3").val();
			if(reg.test(str)){
				$("#showIf3").html("√");
				$("#showIf3").css({"display":"block","font-size":"20px","font-weight":"600","color":"green","background":"#fff","text-align":"left","border":"none"});
				
			}else{
				$("#showIf3").html("输入不合法");
				$("#showIf3").css({"display":"block","color":"#7e0001","font-size":"14px"});

			}
		}

	});
});
