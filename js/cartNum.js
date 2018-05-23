//登录状态下渲染两个位置
  function CartNum(selector1,selector2){
    this.bag_num = $(selector1);
    this.badged = $(selector2);
    this.init()
  }
  CartNum.prototype={
    constructor:CartNum,
    init:function(){
      this.sum = 0;
      if (!$.cookie("shopCar")) {
        return;
      }
      this.shopCarString = $.cookie("shopCar");
      this.shopCarArray = JSON.parse(this.shopCarString);
    
      this.shopCarArray.forEach(function(item){
        this.sum += item.num;
      }.bind(this))
      this.bag_num.html(this.sum)
      this.badged.html(this.sum)
    }
  }
  new CartNum(".bag_num",".badged")







