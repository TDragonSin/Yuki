$(".shopping-car").on("click",function(){
  if(!$.cookie("log")){
    window.location.href = "http://localhost/PHP/yuki/login.html";
  }else{
    window.location.href = "http://localhost/PHP/yuki/cart.html";
  }
})
$(".car").on("click",function(){
  if(!$.cookie("log")){
    parent.location.href = "http://localhost/PHP/yuki/login.html";
  }else{
    parent.location.href = "http://localhost/PHP/yuki/cart.html";
  }
})