$(document).ready(function(){
	var href = window.location.href; 
	if(href == "http://www.zuipin.cn/" || href.indexOf("http://www.zuipin.cn/?")>=0){
		if(window.name == ""){
	    	$("#SonlineBox > .contentBox").animate({"right":"0px"},404);	
	        $("#SonlineBox > .openTrigger").hide();
	    }
	    window.name = "ok";
	}
	
    //展开
    $("#SonlineBox > .openTrigger").click(function(){
        $("#SonlineBox > .contentBox").animate({"right":"0px"},404);	
        $("#SonlineBox > .openTrigger").hide();
    });
    //关闭
    $("#SonlineBox .closeTrigger").click(function(){
        $("#SonlineBox > .contentBox").animate({"right":"-141px"},404);	
        $("#SonlineBox > .openTrigger").show(1000);
    });
    
});
document.write('<!-- ↓联系客服↓ -->');
document.write('<style>');
document.write('.launchBtn{height: 22px;');
document.write('background-repeat: no-repeat;');
document.write('text-indent: 15px;');
document.write('line-height: 22px;');
document.write('display:block;');
document.write('background-image:url(//img3.zuipin.cn/staticimg/home/qqico.png);');
document.write('width:92px;');
document.write('}');
document.write('.SonlineBox .contentBox .listBox .QQList{width:95%;}   ');
document.write('</style>');

document.write('<div class="SonlineBox" id="SonlineBox" style="top: 180px; right: 0px; height: 339px;position: fixed;">');
document.write('	<div class="openTrigger" style="right:0px;" title="展开"></div>');
document.write('    <div class="contentBox" style="right:-141px;">');
document.write('        <div class="closeTrigger"><img src="//www.zuipin.cn/skin/frontend/default/zuipin/images/qq/closeBtnImg.gif" title="关闭"></div>');
document.write('        <div class="titleBox"><span>在线客服</span></div>');
document.write('        <div class="listBox">');
document.write('            <div class="QQList"><span>售前：</span><a class="launchBtn" target="_blank" href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800002599&cref&ref=&f=1&ty=1&ap=&as=&v="></a></div>');
document.write('            <div class="QQList"><span>售后：</span><a class="launchBtn" target="_blank" href="http://crm2.qq.com/page/portalpage/wpa.php?uin=800002599&cref&ref=&f=1&ty=1&ap=&as=&v="></a></div>');
document.write('            <div class="QQList"><span>加盟：</span><a class="launchBtn" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2355873605&site=qq&menu=yes"></a></div>');
document.write('        </div>');
document.write('    </div>');
document.write('</div>');
document.write('<!-- ↑联系客服↑ -->');
