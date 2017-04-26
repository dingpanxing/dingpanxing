var currentindex=1;
$("#slidebg").css("background-color",$("#slide1").attr("name"));
function changeslide(i) {	
currentindex=i;
for (j=1;j<=10;j++){
	if (j==i) 
	{$("#slide"+j).fadeIn("normal");
	$("#slide"+j).css("display","block");
	$("#f"+j).removeClass();
	$("#f"+j).addClass("dq");
	$("#slidebg").css("background-color",$("#slide"+j).attr("name"));
	}
	else
	{$("#slide"+j).css("display","none");
	$("#f"+j).removeClass();
	$("#f"+j).addClass("no");}
}}
function startAm(){
timerID = setInterval("timer_tick()",5000);
}
function stopAm(){
clearInterval(timerID);
}
