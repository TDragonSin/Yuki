function ShopCar(selector){
  this.main = $(selector);
  this.jian = $(".jian");
  this.add =$(".add");
  this.id = parseInt(window.location.search.split("=")[1]);
  this.init();
};

ShopCar.prototype = {
  constructor:ShopCar,
  init(){
    this.numList = [];
    this.goodNum = parseInt($(".num").val());
    this.jian.on("click",function(){
      if(this.goodNum == 1) return;
      this.goodNum--;
      $(".num").val(this.goodNum);
    }.bind(this))
    this.add.on("click",function(){
      if(this.goodNum == 100) return;
      this.goodNum++;
      $(".num").val(this.goodNum);
    }.bind(this))
  
    this.carNum = $(".badged");
    this.carNum.html(this.getSum());
    this.main.on("click.addCar",".shopcar",$.proxy(this.addCar,this));
    this.main.on("click.changeNum",".shopcar",$.proxy(this.changeNum,this));
    this.get_data();
  },
  get_data:function(){
    this.load_data()
    .then(function(res){  
      for(var i in res){
         res[i].forEach(function(item){
          if(item.goodId == this.id){
            // console.log(item)
            this.img = item.goodPicUrl;
            this.title = item.goodName;
            this.price = parseInt(item.oldPrice)/100+".0";
          }
        }.bind(this));
      }
    }.bind(this))
  },
  addCar(event){
    if(!$.cookie("log")){
      if(this.popShow) {
        return
      }
      $(".popMsgBox").html("请登陆");
      this.popMsgBox();
      return;
    }
    var target = event.target || event.srcElement;
    var goodsId = $(target).attr("data-id");
    if(!$.cookie("shopCar")){
      //表示是第一次存数据;
      var shopCarArray = [
        {
          id:goodsId,
          num:this.goodNum,
          img:this.img,
          title:this.title,
          price:this.price
        }
      ]
      $.cookie("shopCar",JSON.stringify(shopCarArray))
      return 0;
    }
    var shopCarString = $.cookie("shopCar");
    var shopCarArray = JSON.parse(shopCarString);
    var hasItem = false;
    shopCarArray.forEach(function(item){	
      if(item.id == goodsId){
        item.num += this.goodNum;
        hasItem = true;
      }
    }.bind(this))
    if(!hasItem){
      var item = {
        id:goodsId,
        num:this.goodNum,
        img:this.img,
        title:this.title,
        price:this.price
      }
      shopCarArray.push(item)
    }
    $.cookie("shopCar",JSON.stringify(shopCarArray));

  },
  changeNum(){
    this.carNum.html(this.getSum());
    $(".bag_num").html(this.getSum())
  },
  getSum(){
    var shopCarString = $.cookie("shopCar");
    if(shopCarString){
      var shopCarArray = JSON.parse(shopCarString);
      var sum = 0;
      shopCarArray.forEach(function(item){
        sum += 1;
      })
      return sum;
    }
    return 0;
  },
  load_data: function () {
    this.opt = {
      url: "http://localhost:80/PHP/yuki/data/list.json",
      dataType: "json",
      statusCode: {
        404: function () {
          alert('page not found');
        },
        403: function () {
          alert('丫不让我访问!');
        }
      }
    };
    return $.ajax(this.opt)
  },  
  popMsgBox: function () {
    this.popShow = true;
    $(".popMsgBox").show()
    this.popTimer = setTimeout(function () {
      $(".popMsgBox").hide();
      this.popShow = false
    }.bind(this), 2000)
  },
}
