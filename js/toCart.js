$(".shopping-car").on("click",function(){
  if(!$.cookie("log")){
    window.location.href = "http://localhost/PHP/yuki/login.html";
  }else{
    window.location.href = "http://localhost/PHP/yuki/cart.html";
  }
})