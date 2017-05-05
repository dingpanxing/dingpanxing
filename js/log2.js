$(function(){
	$("#load1").focus(function() {
/*		$("#show1").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
		$("#show1").html("请输入登录账号");*/
		$("#show1").fadeIn("slow",function(){
			$("#show1").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
			$("#show1").html("请输入登录账号");			
		});
	});
	$("#load1").blur(function() {
		if($("#load1").val()==""){
		$("#show1").fadeOut("slow",function(){
			$("#show1").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
			$("#show1").html("请输入登录账号");			
		});
			$("#show1").fadeIn(slow,function(){
				$("#show1").html("登录名不能为空");
			$("#show1").css({"display":"block","color":"#7e0001"});
			});
			
		}else{
			var reg=/^\w+@\w+\.(com|net|com\.cn)$/;
			var reg1=/^1[35784][0-9]{9}$/;
			var str=$("#load1").val();
			if(reg.test(str) || reg1.test(str)){
				$("#show1").html("√");
				$("#show1").css({"display":"block","font-size":"20px","font-weight":"600","color":"green","background":"#fff","text-align":"left","border":"none"});
			}else{
				$("#show1").html("输入不合法");
				$("#show1").css({"display":"block","color":"#7e0001","font-weight":"600"});
			}
		}

	});
	$("#load2").focus(function() {
		$("#show2").css({"display":"block","font-size":"14px","font-weight":"600","color":"green"});
		$("#show2").html("6-16位");
	});
	$("#load2").blur(function(){
		var reg=/^[0-9a-zA-Z]{6-16}$/;
		var str=$("#load2").val();
		if(reg.test(str)){
			$("#show2").html("√");
			$("#show2").css({"display":"block","font-size":"20px","font-weight":"600","color":"green","background":"#fff","text-align":"left","border":"none"});
			
		}else{
			$("#show2").html("输入不合法");
			$("#show2").css({"display":"block","color":"#7e0001","font-size":"14px"});

		}
	});

	$("#load3").blur(function(){
		var str1=$("#load2").val();
		var str2=$("#load3").val();
		if(str1==""){

			$("#show2").html("密码不能为空");
			$("#show2").css({"display":"block","color":"#7e0001","font-size":"14px"});
		}else if(str1==str2){
			$("#show3").html("√");
			$("#show3").css({"display":"block","font-size":"20px","font-weight":"600","color":"green","background":"#fff","text-align":"left","border":"none"});			
		}else{
			$("#show3").html("两次密码不一样");
			$("#show3").css({"display":"block","color":"#7e0001","font-size":"14px"});

		}
	});

});