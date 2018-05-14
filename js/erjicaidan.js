//二级菜单
$(document).on("mouseover",".typeLi",function(){
  // console.log(this)
  $(this).find(".hideUl").show();
    if($(this).find(".hideUl2").has("li").length!=0){
      $(this).find(".hideUl2").show();
    }
    if($(this).find(".hideUl3").has("li").length!=0){
      $(this).find(".hideUl3").show();
    }
    // $(".typeLi").not(this).find(".hideUl,.hideUl2,.hideUl3").hide();
    // $(".typeLi").not(this).find(".hideUl2").hide();
    $(this).css({
        "background-color":"#fff",
        "opacity":".98"
    });
    $(".typeLi").not(this).css("background-color","#f5f5f5");
});
$(document).on("mouseout","#typeList",function(){
    $(".hideUl,.hideUl2,.hideUl3").hide();
    $(this).find(".typeLi").css({
        "background-color":"#f5f5f5",
        "opacity":".98"
    });
});

//正则替换
var str = ``
// var reg = /\s+onclick="location\.href='.+'"/g
var reg2 = /href=".+"/g
// str.replace(reg,"")
str.replace(reg2,'href=""')
console.log(str.replace(reg2,'href=""'))

//轮播图按钮
$(document).on("mouseover",".slider_con",function(){
  $(".arrow-left,.arrow-right").show();
}).on("mouseout",".slider_con",function(){
  $(".arrow-left,.arrow-right").hide();
});