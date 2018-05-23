//登录状态的改变导致两位置的改变
if(!$.cookie("log")){
  $(".bag_num").html("0")
  $(".badged").hide()
}else{
  $(".badged").show()
}