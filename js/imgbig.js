function Imgmouseover(select,sizeNew,sizeOld){
  this.ele = $(select);
  this.sizeNew = sizeNew;
  this.sizeOld = sizeOld;
  this.init();
}
Imgmouseover.prototype = {
  constructor:Imgmouseover,
  init:function(){
    this.ele.on("mouseover",$.proxy(this.bigger,this))
    this.ele.on("mouseout",$.proxy(this.smaller,this))
  },
  bigger:function(){
    this.ele.animate({
      width:"'"+this.sizeNew+"'",
      height:"'"+this.sizeNew+"'",
    },2000)
  },
  smaller:function(){
    this.ele.animate({
      width:"'"+this.sizeOld+"'",
      height:"'"+this.sizeOld+"'",
    },2000)
  }
}
