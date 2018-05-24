function Cart(main_selector) {
  this.main = $(main_selector);
  this.jian = $(".jian");
  this.add = $(".add");
  this.init();
}
Cart.prototype = {
  constructor: Cart,
  init: function () {
    this.sum = 0;
    if(!$.cookie("shopCar")){
      $(".showshop").show();
      $(".form").hide();
      return;
    }
    this.shopCarString = $.cookie("shopCar");
    this.shopCarArray = JSON.parse(this.shopCarString);
    if (this.shopCarArray.length == 0) {
      $(".showshop").show();
      $(".form").hide();
      return;
    }
    this.render(this.shopCarArray);
    $(".gw_num").on("click", ".jian", $.proxy(this.changePrice, this));
    $(".gw_num").on("click", ".add", $.proxy(this.changePrice, this));
    $(".gw_num").on("click.single", ".jian", $.proxy(this.single, this));
    $(".gw_num").on("click.single", ".add", $.proxy(this.single, this));
    $(".shopcartitle").on("click", ".del", $.proxy(this.popAppear, this));
    $(".buyshop").on("click", ".delAllCheck", $.proxy(this.popAppear, this));
    $(":checkbox").prop("checked", true);
    this.calc(true);
    this.checkbox();
  },
  render: function (json) {
    this.html = ` 
      <div class="numbershop">
        <input type="checkbox" style="margin-left:16px;margin-right:16px" class="checkAllCurrent xcheckgroup2">
        <span style="margin:0;">全选</span>
        <span style="margin-left:120px;">商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>优惠</span>
        <span>总价</span>
      </div>`;
    this.html2 = ``;
    json.forEach(function (item) {
      var total = parseFloat(item.price) * item.num;
      this.html += `
                  <div class="shopvlue" cartid=${item.id}>
                  <input type="checkbox" name="sku" style="margin-left:16px;margin-right:20px;float:left;line-height:130px;margin-top:60px;"
                    class="xcheckgroup2 checkItem">
                  <div class="shopimg" onclick="javascript:window.open('http://localhost/PHP/yuki/goodsDetail.html?goodId=${item.id}')">
                    <img src=${item.img}>
                  </div>
                  <ul style="display: inline-block;" class="shoprull" onclick="javascript:window.open('http://localhost/PHP/yuki/goodsDetail.html?goodId=${item.id}')">
                    <li>${item.title}</li>
                    <li style="color:#9D9D9D">Sqweeks款 </li>
                  </ul>
                  <div class="price">￥
                    <span class="sprice">${item.price}</span>
                  </div>
                  <div class="gw_number">
                    <div class="gw_num">
                      <div class="jian yunsuan">-</div>
                      <input type="text" value="${item.num}" class="num" readonly="">
                      <div class="add yunsuan">+</div>
                    </div>
                  </div>
                  <img src="images/close.png" alt="" class="del">
                  <span style="float:right;margin-top:58px;margin-right:20px;color:#e33955;width: 100px;text-align:center;" class="shopidmessage">
                    ￥
                    <span class="oneprice">${total}.0</span>
                  </span>
                  <span style="float:right;margin-top:58px;margin-right:135px;color:#e33955" class="shopidmessage">暂无折扣</span>
                </div>         
     `
    }.bind(this))
    this.html2 += `
                    <div class="buyshop">
                    <input type="checkbox" style="margin-left:16px;margin-right:16px" class="xcheckgroup2 checkAllCurrent">
                    <span style="color:#333333;line-height:64px;">全选</span>
                    <span style="color:#333333;margin-left:40px;line-height:64px;cursor: pointer;" class="delAllCheck">批量删除</span>
                    <div class="clearing">
                      <span>结算</span>
                    </div>
                    <ul class="oldprice"> 
                      <li>
                        <span style="color:#333333;font-size:14px">合计(不含运费)：</span>
                        <span style="color:#e33955;font-size:24px">￥
                          <span class="twoprice" style="font-size:24px"></span>
                        </span>
                      </li>
                      <li style="color:#999999;">商品合计：￥
                        <span class="threeprice">
                          <span></span>
                        </span>
                        <span style="margin-left:20px;">优惠：
                          <span class="fourprice"></span>
                        </span>
                      </li>
                    </ul>
                  </div>
    `
    this.main.html(this.main.html() + this.html);
    $(".fullcar").html($(".fullcar").html() + this.html2);
  },
  changePrice: function (event) {
    var target = event.target || event.srcElement;
    var num = parseInt($(target).parent().find(".num").val())
    if ($(target).html() == "+") {
      if (num == 100) return;
      num++;
      this.flag = true;
      this.newNum(num, $(target).parent().parent().parent().attr("cartid"));
    } else if ($(target).html() == "-") {
      if (num == 1) {
        if (this.popShow) {
          return
        }
        $(".popMsgBox").html("购物车里的商品数量不能小于1哦");
        this.popMsgBox();
        this.flag = false;
        return;
      }
      num--;
      this.flag = true;
      this.newNum(num, $(target).parent().parent().parent().attr("cartid"));
    }
    $(target).parent().find(".num").val(num);
    this.danjia = parseFloat($(target).parent().parent().parent().find(".sprice").html())
    this.sumprice = $(target).parent().parent().parent().find(".oneprice")
    this.sumprice.html(num * this.danjia + ".0");
  },
  checkbox: function () {
    this.cBox = $("input[type='checkbox']")
    this.firstBox = this.cBox.eq(0);
    this.lastBox = this.cBox.eq(this.cBox.length - 1);
    this.firstBox.click(function () {
      if (this.firstBox.prop("checked")) {
        $(":checkbox").prop("checked", true);
        this.calc(true);
      } else {
        $(":checkbox").prop("checked", false);
        this.calc(false);
      }
    }.bind(this))
    this.lastBox.click(function () {
      if (this.lastBox.prop("checked")) {
        $(":checkbox").prop("checked", true);
        this.calc(true);
      } else {
        $(":checkbox").prop("checked", false);
        this.calc(false);
      }
    }.bind(this))
    this.cBox.each(function (index, item) {
      if (index == 0 || index == this.cBox.length - 1) return;
      $(item).on("click", function () {
        var allprice = $(".twoprice").html() ? parseFloat($(".twoprice").html()) : 0;
        var singleprice = parseFloat($(this).parent().find(".oneprice").html())
        if ($(this).prop("checked")) {
          $(".twoprice").html(allprice + singleprice)
        } else {
          $(".twoprice").html(allprice - singleprice)
        }
      })
    }.bind(this))
    this.checkItem = $(".checkItem")
    this.checkItem.each(function (index, item) {
      $(item).on("click.all", function () {
        this.isAll();
      }.bind(this))
    }.bind(this))
    this.cBox.on("click", function () {
      $(".twoprice").html($(".twoprice").html() ? $(".twoprice").html() : "0.0");
      $(".threeprice span").html($(".twoprice").html());
      $(".fourprice").html("0.0");
    })
  },
  calc: function (bool) {
    if (bool) {
      $(".oneprice").each(function (index, item) {
        this.sum += parseInt($(item).html());
      }.bind(this))
    } else {
      this.sum = 0;
    }
    $(".twoprice").html(this.sum + ".0")
  },
  single: function (event) {
    if (!this.flag) {
      return;
    }
    $(".twoprice").html($(".twoprice").html() ? $(".twoprice").html() : "0.0");
    $(".threeprice span").html($(".twoprice").html());
    $(".fourprice").html("0.0");
    var target = event.target || event.srcElement;
    var checkBox = $(target).parent().parent().parent().find(".checkItem");
    var allprice = $(".twoprice").html() ? parseFloat($(".twoprice").html()) : 0;
    if (checkBox.prop("checked")) {

      if ($(target).html() == "+") {
        $(".twoprice").html(allprice + this.danjia)
      } else if ($(target).html() == "-") {
        $(".twoprice").html(allprice - this.danjia)
      }
    } else {
      return;
    }
  },
  newNum: function (num, id) {
    this.shopCarString = $.cookie("shopCar");
    this.shopCarArray = JSON.parse(this.shopCarString);
    this.shopCarArray.forEach(function (item) {
      if (item.id == id) {
        item.num = num;
      }
    })
    $.cookie("shopCar", JSON.stringify(this.shopCarArray));
  },
  isAll: function () {
    if ($('input[name="sku"]:checked').length == this.checkItem.length) {
      $(".checkAllCurrent").prop("checked", true);
    } else {
      $(".checkAllCurrent").prop("checked", false);
    }
  },
  popAppear: function (event) {
    var target = event.target || event.srcElement;
    this.shopCarString = $.cookie("shopCar");
    this.shopCarArray = JSON.parse(this.shopCarString);

    if ($(target).attr("class") == "del") {
      $(".popInformation").html("确定要删除嘛");
    } else {
      this.idArray = [];
      this.checkItem.each(function (index, item) {
        if ($(item).prop("checked")) {
          this.idArray.push($(item).parent().attr("cartid"))
        }
      }.bind(this))
      if (this.idArray.length == 0) {
        if (this.popShow) {
          return
        }
        $(".popMsgBox").html("请选中要删除的商品");
        this.popMsgBox();
        return;
      }

      $(".popInformation").html("确定要删除选中的商品吗");
    }
    $(".popWindow").show();
    this.cancel = $(".popCancel");
    this.ensure = $(".popEnsure");
    this.cancel.on("click", function () {
      $(".popWindow").hide();
    })

    this.ensure.on("click", function () {
      if ($(target).attr("class") == "del") {
        this.delete($(target));
      } else {
        this.deleteAll();
      }

    }.bind(this))
  },
  delete: function (that) {
    var delId = that.parent().attr("cartid")
    this.shopCarArray.forEach(function (item, index) {
      if (item.id == delId) {
        this.shopCarArray.splice(index, 1);
      }
    }.bind(this))
    $.cookie("shopCar", JSON.stringify(this.shopCarArray));
    window.location.reload();
  },
  deleteAll: function () {
    this.idArray.forEach(function (id, index) {
      this.shopCarArray.forEach(function (item, index) {
        if (item.id == id) {
          this.shopCarArray.splice(index, 1);
        }
      }.bind(this))
    }.bind(this))
    $.cookie("shopCar", JSON.stringify(this.shopCarArray));
    window.location.reload();
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

