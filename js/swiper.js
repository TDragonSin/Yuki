
// console.log($swiper_item)
// $swiper_item.each(function(index,item){
//   console.log(index,item)
// })
// $swiper_item = $(".swiper-item");
// console.log($swiper_item[0])
function Lunbo(){
  this.init();
}
Lunbo.prototype = {
  constructor:Lunbo,
  init:function(){
    this.$slider_wrapper = $(".slider_wrapper");
    this.$swiper_item_first = $(".swiper-item:nth-child(1)")
    this.$swiper_item_last = $(".swiper-item:nth-child(5)")
    this.$arrow_left = $(".arrow-left");
    this.$arrow_right = $(".arrow-right");
    this.$slider_btn = $(".slider_btn");
    this.$swiper_btn = $(".swiper-btn");
    this.index = 1;
    this.concat();
    this.$swiper_item = $(".swiper-item");
    this.$arrow_right.click(function(){
      if(!this.$slider_wrapper.is(":animated")){
        this.slider_rclick();
      }      
    }.bind(this))
    // this.slider_timer = setInterval(function(){  
    //   this.slider_rclick();
    // }.bind(this),3000)  
  },
  slider_rclick:function(){
    var show,point;
    if(this.index == this.$swiper_item.length - 1){
      this.index = 2;
      show = this.index;
      this.$slider_wrapper.css("margin-left","-1920px");
    }else{
      this.index ++;
      show = this.index;
    }
    if(show == this.$swiper_item.length - 1){
      point = 0;
    }else{
      point = show - 1;
    }
    this.$swiper_btn.removeClass("swiper-btn-active");
    $(this.$swiper_btn[point]).addClass("swiper-btn-active");
    this.$slider_wrapper.stop(true).animate({"marginLeft":show*-1920},"500","swing")
  },
  concat:function(){
    this.$swiper_item_first.before(this.$swiper_item_last.clone())
    this.$swiper_item_last.after(this.$swiper_item_first.clone())
  }
}

new Lunbo();