function Gooddetail(url,selector1,selector2){
  if (!url || !selector1 || !selector2) return;
  this.topEle = $(selector1);
  this.bottomEle = $(selector2);
  this.goodid = window.location.search.split("=")[1];
  this.url = url+"?goodId="+this.goodid;
  this.init()
}
Gooddetail.prototype={
  constructor: Gooddetail,
  init(){
    this.load_goodId()
    .then(function(res2){
      this.load_data()
        .then(function(res){    
          for(var i in res){
             res[i].forEach(function(item){
              if(item.goodId == res2){
                this.render_describe(item);
                this.render_page(item.detailsmallPic);           
                this.render_bigImg(item.detailbigPic)
                this.xuanxiangka();
              }
            }.bind(this));
          }
        }.bind(this))
    }.bind(this))
    $(".rulebox").on("click",".desc",this.style);
    $(".shopvalue").on("click",function(){
      $(".shopvalueshow").show();
      $(".showmetheshop").hide();
    })
    $(".eavl").on("click",function(){
      $(".shopvalueshow").hide();
      $(".showmetheshop").show();
    })
    $(".shopmessage").on("click.change","div",function(){
      $(this)
      .siblings()
      .removeClass("shopchange")
      .end()
      .addClass("shopchange")
    })
  },
  load_goodId: function(){
    this.opt = {
      url: this.url,
      statusCode: {
        404: function () {
          alert('page not found');
        },
        403: function () {
          alert('访问失败!');
        }
      }
    };
    return $.ajax(this.opt)
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
  render_page:function(json) {
    this.html = ``;
    json.forEach(function(item){
    this.html+=`
                <a href="" imgurl="${item.smallPic}" rel="zoom1"
                  rev="${item.smallPic}" style="outline: 0px;">
                  <img src="${item.smallPic}">
                </a>
     `                                                   
    }.bind(this))
    
    this.topEle.html(this.topEle.html() + this.html);
  },
  xuanxiangka:function(){
    $(".t2 img").attr("src",$("#showArea a").eq(0).attr("imgurl"));
    $(document).on("mouseover","#showArea a",function(){
      $(".t2 img").attr("src",$(this).attr("imgurl"))
    })
    $("#zoom1").attr("imgurl",$("#showArea a").eq(0).attr("imgurl"));
  },
  render_describe:function(item){
    $(".title").html(item.goodName);
    $(".value").eq(0).html(item.oldPrice/100+".0");
    $(".shopcar").attr("data-id",parseFloat(this.goodid))
  },
  render_bigImg:function(json){
    this.html2 = ``;
    json.forEach(function(item){
    this.html2+=`
                <p>
                  <img src="${item.bigPic}">
                </p>
     `                                                   
    }.bind(this))
    
    this.bottomEle.html(this.bottomEle.html() + this.html2);
  },
  style:function(){
    $(this).toggleClass("desccheck")
    $(this).find(".sel").toggle();
  },
}
new Gooddetail("http://localhost/PHP/yuki/php/goodsList.php","#showArea",".shopvalueshow")