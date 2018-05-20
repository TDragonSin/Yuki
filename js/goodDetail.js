function Gooddetail(url,selector1,selector2){
  if (!url || !selector1 || !selector2) return;
  this.topEle = $(selector1);
  this.bottomEle = $(selector2);
  var goodid = window.location.search.split("=")[1];
  this.url = url+"?goodId="+goodid;
  console.log(this.url)
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
                this.render_page(item.detailsmallPic);
                this.render_describe(item);
                this.render_bigImg(item.detailbigPic)
                this.xuanxiangka();
              }
            }.bind(this));
          }
        }.bind(this))
    }.bind(this))
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
    console.log(item.smallPic)
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
  }
}
new Gooddetail("http://localhost/PHP/yuki/php/goodsList.php","#showArea",".shopvalueshow")