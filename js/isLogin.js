//头部登录成功样式
if($.cookie("log")){
  var logObj = JSON.parse($.cookie("log"));
  $(".yes>a").html(`${logObj.uname}，您好`);
  $(".yes").show();
  $(".no").hide();
}else{
  $(".yes").hide();
  $(".no").show();
}
$(".exitUser").on("click",function(){
  $.removeCookie("log");
  parent.location.reload();
  window.location.reload();
})
