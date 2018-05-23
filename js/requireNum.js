  function CartNum(selector1){
    this.badged= $(selector1);
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
        this.sum += 1;
      }.bind(this))
      this.badged.html(this.sum)
    }
  }