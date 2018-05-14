function Imgmouseover(select,sizeNew,sizeOld){
  this.select = select;
  this.sizeNew = sizeNew;
  this.sizeOld = sizeOld;
  this.init();
}
Imgmouseover.prototype = {
  constructor:Imgmouseover,
  init:function(){
    $(document).on("mouseover",this.select,{New:this.sizeNew},this.bigger)
    $(document).on("mouseout",this.select,{old:this.sizeOld},this.smaller)
  },
  bigger:function(event){
    console.log($(this))
    console.log(event.data.New)
      $(this).animate({
        width:"'"+event.data.New+"'",
        height:"'"+event.data.New+"'"
    },2000,function(){console.log("width:"+"'"+event.data.New+"'")})
  },
  smaller:function(event){
      $(this).animate({
        width:"event.data.old",
        height:"event.data.old"
    },2000)
  }
}
new Imgmouseover(".flashSale-li-img>img",210,199)