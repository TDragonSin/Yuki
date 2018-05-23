; +function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory)
  } else {
    factory(jQuery);
  }
}(function ($) {
  function Goodslist(url1,url2,main_selector) {
    if (!url1 || !url2 || !main_selector) return;
    this.url1 = url1;
    this.url2 = url2;
    this.main_ele = $(main_selector);  
    this.init();
  }
  Goodslist.prototype = {
    constructor: Goodslist,
    init: function () {
      this.index =0;   
      this.lastTop = 1500;
      $(window).scroll(function(){
        this.scrollTop = $("html,body").scrollTop();
        this.clientHeight = document.documentElement.clientHeight;
        this.loading_msg = false;   
        // console.log(this.lastTop,this.scrollTop)     
        if(this.scrollTop > this.lastTop){
          this.loading_msg = true;
        }
        if(this.index >= 4 || this.loading || !this.loading_msg){
          return;
        }
        this.loading = true;
        this.index ++ ;
          this.load_data()
            .then(function (res) {
                this.json = res["goodBeanList"+this.index]
                // console.log(this.json)
                this.render_page();
                this.loading = false;
                this.lastTop += 1450;
              }.bind(this))
            // .fail(function (def, type, err_msg) {
            // })
      }.bind(this))
      $(".top").click(function(){
        if(!$("html").is(":animated")){
            $("html").animate({scrollTop:0},1000);
        }
      });
      this.mycookie();
    },
    load_data: function () {
      this.opt = {
        url: this.url2,
        dataType: "json",
        // data:{page:this.page},
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
    render_page: function () {
      this.html = ``;
                    this.json.forEach(function(item){
                        // console.log(item);

                        this.html +=   `<div class="shopshowchirdren" onclick="javascript:window.open('http://localhost/PHP/yuki/goodsDetail.html?goodId=${item.goodId}')">
                                          <div class="img ">
                                            <div class="imgfind">
                                              <img src=${item.goodPicUrl}
                                              alt=" " class="imgchirdren">
                                            </div>
                                          </div>
                                          <ul class="name ">
                                            <li>${item.goodName}</li>
                                            <li class="oprice ">
                                              ￥${item.oldPrice/100}.0
                                            </li>
                                          </ul>
                                        </div>`
                                      
                    }.bind(this))
                    // console.log(this.html);
                    this.main_ele.html(this.main_ele.html() + this.html);
    },
    mycookie:function(){
      this.sum = 0;
      if(!$.cookie("log")){
        if(!$.cookie("log")){
          $(".bag_num").html("0")
          $(".badged").hide()
        }else{
          $(".badged").show()
        }
      }
      if (!$.cookie("shopCar")) {
        return;
      }
      this.shopCarString = $.cookie("shopCar");
      this.shopCarArray = JSON.parse(this.shopCarString);
      this.shopCarArray.forEach(function(item){
        this.sum += 1;
      }.bind(this))
      $(".badged").html(this.sum)
    }
    
  }

  return Goodslist;
});






