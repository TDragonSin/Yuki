function Leftnav(){
  this.init()
}
Leftnav.prototype={
  init:function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > $(".hot-head").offset().top-300){
        $(".nav-left").removeClass("default").addClass("fixed");
        $(".top").show();
      }else{
        $(".nav-left").removeClass("fixed").addClass("default");
        $(".top").hide();
      }
      this.addChange();
    }.bind(this))
    $(".top").click(function(){
      if(!$("html").is(":animated")){
          $("html").animate({scrollTop:0},1000);
      }
    });
  },
  addChange:function(){
    var top = $(document).scrollTop();
    var menu = $("#menu");
    var title = $(".title");
    var curId = "";
    title.each(function(){
        var m = $(this);
        var titleTop = m.offset().top;
        if(top >　titleTop -300){
          curId = "#"+ m.attr("id");
        }else{
          return false;
        }
    });
    var cur = menu.find(".change")
    var curLink = menu.find(".change").find("a");
    if(curId !="" && curLink.attr("href") != curId){
      cur.removeClass("change")
      menu.find("[href=" +"'" +curId + "'" + "]").addClass("change")
    }
  }
}
new Leftnav();
