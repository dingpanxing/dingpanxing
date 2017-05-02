			function $(str){
				return document.getElementById(str);
			}
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,null)[attr];
				}
			}
			
			var oWrap = $("wrap");
			var oSlide = $("slide");
			var iWidth = parseInt(getStyle(oWrap,"width"));
			var oList = $("list");
			var oLi = oList.getElementsByTagName("li");
			var oLen = oLi.length;
			var oNext = $("next");
			var oPrev = $("prev");
			var m = 0;  //当前第几张图的索引
			var timer = null;
			oSlide.innerHTML+=oSlide.innerHTML;
			
			function autoPlay(){
				timer = setInterval(function(){
					m++;
					if(m==oLen+1){
						oSlide.style.left = "0";
						m=1;
					}
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
					for(var i=0;i<oLen;i++){
						oLi[i].className = "";
					}
					oLi[m%oLen].className = "active";
				},3000)
			}	
			autoPlay();
			
			//当鼠标移动到图片上时停止
			oWrap.onmouseover = function(){
				clearInterval(timer);
			}
			oWrap.onmouseout = function(){
				autoPlay();
			}
			
			for(var i=0;i<oLen;i++){
				oLi[i].index = i;  
				oLi[i].onmouseover = function(){
					for(var j=0;j<oLen;j++){
						oLi[j].className = "";
					}
					oLi[this.index].className = "active";
					m = this.index; 
					move(oSlide,{"left":(-1)*m*iWidth+"px"});
				}
			}
/*			oNext.onclick = function(){
				m++;
				if(m==oLen+1){
					oSlide.style.left = "0";
					m=1;
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});	
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}
			//跳转到指定图片
			oPrev.onclick = function(){
				m--;
				if(m==-1){ 
					m=oLen-1;
					oSlide.style.left = (-1)*oLen*iWidth+"px";
				}
				move(oSlide,{"left":(-1)*m*iWidth+"px"});
				for(var i=0;i<oLen;i++){
					oLi[i].className = "";
				}
				oLi[m%oLen].className = "active";
			}*/
//-----------------选项卡-------
	function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
	var menu=document.getElementById(name+i);
	var con=document.getElementById("con_"+name+"_"+i);
	menu.className=i==cursel?"hover":"";
	con.style.display=i==cursel?"block":"none";
	}
}
window.onload=function(){
	setInterval(setTab,1000);
}
//------------------------luobo-------------------------
			function $(str){
				return document.getElementById(str);
			}
			
			var oWrap1 = $("wapp-1");
			var oslide1 = $("slide1");
			var Iwith = 980;
			var oList1 = $("list1");
			var oli1 = oList1.getElementsByTagName("li");
			var olen = oli1.length;
			var m1 = 0;  //当前第几张图的索引
			var Timer = null;
			oslide1.innerHTML+=oslide1.innerHTML;
			
			function autoPlay1(){
				Timer = setInterval(function(){
					m1++;
					if(m1==olen+1){
						oslide1.style.left = "0";
						m1=1;
					}
					move(oslide1,{"left":(-1)*m1*Iwith+"px"});
					for(var i=0;i<olen;i++){
						oli1[i].className = "";
					}
					oli1[m1%olen].className = "active1";
				},6000)
			}	
			autoPlay1();
			
			//当鼠标移动到图片上时停止
			oWrap1.onmouseover = function(){
				clearInterval(Timer);
			}
			oWrap1.onmouseout = function(){
				autoPlay1();
			}
			
			for(var i=0;i<olen;i++){
				oli1[i].index = i;  
				oli1[i].onmouseover = function(){
					for(var j=0;j<olen;j++){
						oli1[j].className = "";
					}
					oli1[this.index].className = "active1";
					m1 = this.index; 
					move(oslide1,{"left":(-1)*m1*Iwith+"px"});
				}
			}
//-------------------------------banntop---------------------------
/*			var owap = $("play");
			var olsid = $("slid");
			var iwdt = parseInt(getStyle(owap,"width"));
			var olit = $("packet");
			var olis = olit.getElementsByTagName("li");
			var ole = olis.length;

			var m = 0;  //当前第几张图的索引
			var timer3 = null;
			olsid.innerHTML+=olsid.innerHTML;
			
			function atup(){
				timer3 = setInterval(function(){
					m++;
					if(m==ole+1){
						olsid.style.left = "0";
						m=1;
					}
					move(olsid,{"left":(-1)*m*iwdt+"px"});
					for(var i=0;i<ole;i++){
						olis[i].className = "";
					}
					olis[m%ole].className = "active";
				},3000)
			}	
			atup();
			
			//当鼠标移动到图片上时停止
			owap.onmouseover = function(){
				clearInterval(timer3);
			}
			owap.onmouseout = function(){
				atup();
			}
			
			for(var i=0;i<ole;i++){
				olis[i].index = i;  
				olis[i].onmouseover = function(){
					for(var j=0;j<ole;j++){
						olis[j].className = "";
					}
					olis[this.index].className = "active";
					m = this.index; 
					move(olsid,{"left":(-1)*m*iwdt+"px"});
				}
			}*/
/*window.onload = function(){
	var aLi = document.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var oUl = document.getElementsByTagName('ul')[0];
	var aLi2 = oUl.getElementsByTagName('li');
	var iNow = 0;
	var iNow2 = 0;
	var timer3 = null;

	for(var i=0;i<aLi.length;i++){
		aLi[i].index1 = i;
		aLi[i].onmouseover = function(){
			for(var i=0;i<aLi.length;i++){
				aLi[i].className = '';
			};
			this.className = 'active3';
			
			startMove(oUl,{'top' : -150*this.index1});
			iNow = this.index1;
			iNow2 = this.index1;
			clearInterval(timer3);
		};
		
		aLi[i].onmouseout = function(){
			timer3 = setInterval(toRun,2000);
		};
	}
	
	timer3 = setInterval(toRun,2000);
	
	function toRun(){
		if(iNow==aLi.length-1){
			iNow = 0;
			aLi2[0].style.position = 'relative';
			aLi2[0].style.top = 150 * aLi2.length + 'px';
		}
		else{
			iNow++;
		}
		
		iNow2++;
		
		for(var i=0;i<aLi.length;i++){
			aLi[i].className = '';
		};
		aLi[iNow].className = 'active3';		
		startMove(oUl,{ top : -150 * iNow2},function(){
			
			clearInterval(timer3);
			timer3 = setInterval(toRun,2000);
			
			if(iNow==0){
				aLi2[0].style.position = 'static';
				oUl.style.top = 0;
				iNow2 = 0;
			}
			
		});
	}
	
};*/

/*function startMove(obj1,json,times,fx,fn){
		
		var iCur = {};
		var startTime = nowTime();
		
		if( typeof times == 'undefined' ){
			times = 400;
			fx = 'linear';
		}
		
		if( typeof times == 'string' ){
			if(typeof fx == 'function'){
				fn = fx;
			}
			fx = times;
			times = 400;
		}
		else if(typeof times == 'function'){
			fn = times;
			times = 400;
			fx = 'linear';
		}
		else if(typeof times == 'number'){
			if(typeof fx == 'function'){
				fn = fx;
				fx = 'linear';
			}
			else if(typeof fx == 'undefined'){
				fx = 'linear';
			}
		}
		
		for(var Arr1 in json){
			iCur[Arr1] = 0;
			if( Arr1 == 'opacity' ){
				iCur[Arr1] = Math.round(getStyle1(obj1,Arr1)*100);
			}
			else{
				iCur[Arr1] = parseInt(getStyle1(obj1,Arr1));
			}
		}
		
		clearInterval(obj1.timer3);
		obj1.timer3 = setInterval(function(){
			
			var changeTime = nowTime();
			
			//startTime changeTime
			
			var scale = 1-Math.max(0,startTime + times - changeTime)/times; //2000 - 0 -> 1-0 -> 0-1
			
			for(var Arr1 in json){
				
				var value1 = Tween[fx](scale*times,iCur[Arr1],json[Arr1] - iCur[Arr1],times);
				
				if(Arr1 == 'opacity'){
					obj1.style.filter = 'alpha(opacity='+ value1 +')';
					obj1.style.opacity = value1/100;
				}
				else{
					obj1.style[Arr1] = value1 + 'px';
				}
				
			}
			
			if(scale == 1){
				clearInterval(obj1.timer3);
				if(fn){
					fn.call(obj1);
				}
			}
		},30);
		
		
		function nowTime(){
			return (new Date()).getTime();
		}
		
		
	}
	

	
	
	var Tween = {
		linear: function (t, b, c, d){  //匀速
			return c*t/d + b;
		},
		easeIn: function(t, b, c, d){  //加速曲线
			return c*(t/=d)*t + b;
		},
		easeOut: function(t, b, c, d){  //减速曲线
			return -c *(t/=d)*(t-2) + b;
		},
		easeBoth: function(t, b, c, d){  //加速减速曲线
			if ((t/=d/2) < 1) {
				return c/2*t*t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInStrong: function(t, b, c, d){  //加加速曲线
			return c*(t/=d)*t*t*t + b;
		},
		easeOutStrong: function(t, b, c, d){  //减减速曲线
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
			if ((t/=d/2) < 1) {
				return c/2*t*t*t*t + b;
			}
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
			if (t === 0) { 
				return b; 
			}
			if ( (t /= d) == 1 ) {
				return b+c; 
			}
			if (!p) {
				p=d*0.3; 
			}
			if (!a || a < Math.abs(c)) {
				a = c; 
				var s = p/4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
			if (t === 0) {
				return b;
			}
			if ( (t /= d) == 1 ) {
				return b+c;
			}
			if (!p) {
				p=d*0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},    
		elasticBoth: function(t, b, c, d, a, p){
			if (t === 0) {
				return b;
			}
			if ( (t /= d/2) == 2 ) {
				return b+c;
			}
			if (!p) {
				p = d*(0.3*1.5);
			}
			if ( !a || a < Math.abs(c) ) {
				a = c; 
				var s = p/4;
			}
			else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			if (t < 1) {
				return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
						Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			}
			return a*Math.pow(2,-10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
			if (typeof s == 'undefined') {
			   s = 1.70158;
			}
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 3.70158;  //回缩的距离
			}
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		}, 
		backBoth: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 1.70158; 
			}
			if ((t /= d/2 ) < 1) {
				return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			}
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
			return c - Tween['bounceOut'](d-t, 0, c, d) + b;
		},       
		bounceOut: function(t, b, c, d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		},      
		bounceBoth: function(t, b, c, d){
			if (t < d/2) {
				return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
			}
			return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	}
			function getStyle1(obj1,Arr1){
		if(obj1.currentStyle){
			return obj1.currentStyle[Arr1];
		}
		else{
			return getComputedStyle(obj1,false)[Arr1];
		}
	}*/

