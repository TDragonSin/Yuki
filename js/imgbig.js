// function Imgmouseover(select,sizeNew,sizeOld){
//   this.select = select;
//   this.sizeNew = sizeNew;
//   this.sizeOld = sizeOld;
//   this.init();
// }
// Imgmouseover.prototype = {
//   constructor:Imgmouseover,
//   init:function(){
//     $(document).on("mouseover",this.select,{New:this.sizeNew},this.bigger)
//     $(document).on("mouseout",this.select,{old:this.sizeOld},this.smaller)
//   },
//   bigger:function(event){
//     console.log(event.data.New)
//       $(this).animate({
//         width:"'"+event.data.New+"'",
//         height:"'"+event.data.New+"'"
//     },2000)
//   },
//   smaller:function(event){
//       $(this).animate({
//         width:"event.data.old",
//         height:"event.data.old"
//     },2000)
//   }
// }
// new Imgmouseover(".imgBorder>img",200,188)


$.extend({
  yuangeEnlarge:function(select,sizeNew,sizeOld){
      $(document)
      .on("mouseover",select,function(){
          $(this).stop().animate({
              height:"195",
              width:"195",
              marginLeft:"-7",
              marginTop:"-7",
          },1000,"swing");
      })
      .on("mouseout",".imgBorder>img",function(){
          $(this).stop().animate({
              height:"188",
              width:"188",
              margin:"0"
          });
      });
  }
});