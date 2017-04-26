var serverTime = Math.round(new Date().getTime()/1000) * 1000;
$(function(){
    var dateTime = new Date();
    var difference = dateTime.getTime() - serverTime;
	
    setInterval(function(){
      $(".endtime").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000);
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime() + difference;
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24)) % 3;
        var myH=Math.floor(nMS/(1000*60*60)) % 24;
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/16) % 60;
        if(myD>= 0){
			var str = "<label>剩：</label><span>"+myD+"</span><label>天</label><span>"+myH+"</span><label>时</label><span>"+myM+"</span><label>分</label><span>"+myS+"</span><label>秒</label><span>"+myMS+"</span>";
        }else{
			var str = "<label>已结束！</label>";	
		}
		obj.html(str);
      });
    }, 100);
});