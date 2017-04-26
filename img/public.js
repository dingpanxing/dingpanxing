function iMycartBind(){
 var object_mycart = $(".cart_detail");
 $(".s_cart").bind("mouseover",function(){
  object_mycart.show();      
 }).bind("mouseleave",function() {
  object_mycart.hide();     
 });
}
$(function() {
   //show-mycart
   iMycartBind();
   $(".cart_pro").find(".cart_del").click(function(){
    $(this).parents(".cart_pro").fadeOut();
  });
 //show-all-category
  var object_category = $("#all_category_menu");
  $("#all_category_menu").bind("mouseover",function() {
    object_category.show();
  }).bind("mouseleave",function() {
    object_category.hide();   
  });
});

$(function(){
 $('a,input[type="button"],input[type="submit"],input[type="image"]').bind('focus',function(){
  if(this.blur){this.blur();};
 });  
});

$(function(){
	 $('.rec_pro_box,.producth_box,.products_box,.product_box,.goods_box').hover(function(){
	  $(this).addClass('divOver').removeClass('divStart'); 
	  $(this).find('.pro_li').addClass('pro_li_hover').removeClass('pro_li'); 
	  $(this).find('.pro_hide').show();
	 },function(){
	  $(this).removeClass('divOver').addClass('divStart');
	  $(this).find('.pro_li_hover').removeClass('pro_li_hover').addClass('pro_li');
	  $(this).find('.pro_hide').hide();
	 });
	});

function delProductFromTop(productId,updateUrl){
    delProduct(productId,updateUrl);
}

function showMessage(message){ 
 if($('#shopping_cart_form_div .messages').length > 0 ){
  $('#shopping_cart_form_div .messages').html(message);
 } else {
  $('#shopping_cart_form').before(message);
 }
 window.setTimeout('$("#shopping_cart_form_div .messages").remove()',5000);
}

function delProduct(productId,updateUrl) {
    var reAddUrl = updateUrl.replace('update','addfromcart');
    var delTr = '<tr id="delrow'+productId+'">';
    delTr = delTr + '<td>'+jQuery('#row'+productId+' td').eq(0).html()+'</td>';
    delTr = delTr + '<td>'+jQuery('#row'+productId+' td').eq(1).html()+'</td>';
    delTr = delTr + '<td>'+jQuery('#row'+productId+' td').eq(2).html()+'</td>';
    delTr = delTr + '<td>'+jQuery('#row'+productId+' td').eq(4).html()+'</td>';
    delTr = delTr + '<td>'+jQuery('#row'+productId+' td input').val()+'</td>';
    
    jQuery.ajax({
      type: "POST",
      url: updateUrl,
      dataType: 'json',
      data: 'cart['+productId+'][qty]=0',
      success: function(data, textStatus){
        if(data.result){
        jQuery('#shopping_cart_form_div').html(data.cart);
        jQuery('#top_cart').html(data.topcart);
        iMycartBind();
        
        showMessage(data.message);
        
        jQuery('#deleteProduct').show();
        jQuery('#deleteProductList').show();
        delTr = delTr + '<td><a href="#nogo" onclick="reAdd(\''+reAddUrl+'\','+data.productId+',this);">重新购买</a></td></tr>';
            jQuery('#deleteProductListTable tbody').append(delTr);
          } else {
            showMessage(data.message);
            $('#'+productId).val($('#hidChange'+productId).val());
          }
        },
        error:function(){
          alert('更新购物车失败，请稍候再试!');
        }
    });
  }
function setLocation(url){
    window.location.href = url;
}


function addProduct(productSku){
	addProductParams(productSku,'qty=1');
}

function addProductParams(productSku,params){
	addProductParamsUrl(productSku,params,'http://'+document.domain+'/ajaxcheckout/index/ajaxToCart');
}

function addProductParamsUrl(productSku,params,addUrl) {
	VE.box('温馨提示',"<div id='ajax_content'><div class='user_loading' style='text-align:left;margin-left:110px;'>加载中...，请稍等！</div></div>");
	jQuery.ajax({
        type: "POST",
        url: addUrl,
        dataType: 'json',
        data: 'productSku='+productSku+'&'+params,
        success: function(data){
        	if(data.state == 'ok') {
        		$('#ajax_content').html("<s class='ajax_icon_yes'></s><div id='ajax_content' style='height:40px;font-size:18px;line-height:40px;margin-left:10px;float:left;'>"+data.msg+"</div><div class='clear'></div></div><div style='margin-top:10px;'><a href='//www.zuipin.cn/checkout/cart/' target='_blank' class='ajax_but' style='margin-left:82px;width:100px;'><div class='ajax_text' style='background:#ba7b57;color:#FFF;'>去结算</div></a><a href='javascript:;' onclick='$.unblockUI()' class='ajax_but' style='margin-left:30px;width:100px;'><div class='ajax_text' style='background:#999;color:#FFF;'>继续购物</div></a><div class='clear'></div>");
        		$('#rightCartNum').text(data.qty);
        		$.cookie("cartNum", data.qty,{path:'/',expires:10});  
        	} else {
        		$('#ajax_content').html(data.msg);
        	}
        },
        error:function(data,exc){
        	return true;
        }
    });
  }
