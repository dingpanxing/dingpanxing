var timeout         = 100;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}

$(document).ready(function()
{	$('#nav > li').bind('mouseover', jsddm_open);
	$('#nav > li').bind('mouseout',  jsddm_timer);});

document.onclick = jsddm_close;


(function($){
	$.fn.extend({ 
		"popnav":function(options){    
			options=$.extend({
				_event:0
		    },options);	
		    
			if($(this).hasClass("popnav")){}
			else{
				$(this).addClass("popnav");
			};
			
			var obj = $(this),
				  box = $(".nav_li",obj),
				  tabs = $(".nav_items",box),
				  popbox = $(".popbox",box),
				  listbox =$(".listbox",popbox),
				  newsList = $(".brandbox",popbox),
				  index;
			
			popbox.css({"display":"none"});
			
			if(options._event==1){
				tabs.hover(function(){
					index=tabs.index(this);
					Play(index);
				});
			}else{
				tabs.mouseenter(function(){
					index=tabs.index(this);
					Play(index);
				});
			};
			
			popbox.mouseenter(function(){
					index=popbox.index(this);
					Play(index);
			});
			tabs.mouseleave(function(){
					closepopbox();
			});
			popbox.mouseleave(function(){
					closepopbox();
			});
				
			function Play(index){
					var Len = $(listbox.eq(index)).length;
					closepopbox();
					tabs.eq(index).addClass("list_current");
					popbox.eq(index).css({"display":"block",top:index*50-0});
					newsList.eq(index).css({height:30*Len+20});
			}
			function closepopbox(){
					tabs.removeClass("list_current");
					popbox.css({"display":"none"});
			}
		
		
		
		}
	})
})(jQuery)