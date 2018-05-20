; +function ($) {
  $.fn.gpBanner2 = function (banner_selector, options) {
    new Banner(banner_selector, options);
  }

  function Banner(banner_selector, options) {
    this.init(banner_selector, options);
  }

  Banner.prototype = {
    constructor: Banner,
    init: function (banner_selector, options) {
      this.index = 0;
      this.bannerWrapper = $(banner_selector);
      this.direction = options.direction ? options.direction : "fade";
      this.bannerItem = this.bannerWrapper.children();
      if (options.loop) {
        this.loop();
      }
      this.bannerItem.css("background", function () {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
      })
      this.bannerNum = this.bannerItem.length;
      this.pagination = $(options.pagination ? options.pagination.el : "");
      if (this.pagination.length !== 0) {
        for (var i = 0; i < this.bannerNum; i++) {
          var span = $("<span></span>");
          this.pagination.append(span);
          span.addClass("swiper-btn")
          if (i == this.index) {
            span.addClass("swiper-btn-active");
          }
        }
        this.paginationItem = this.pagination.children();
        this.paginationItem.on("mouseover.changeIndex",{"turn":"toIndex"},$.proxy(this.change_index,this));
        this.paginationItem.on("mouseover.animation",$.proxy(this.animation,this));
        

      }

      if (typeof options.navigation == "object") {
        this.btnPrev = $(options.navigation.prevEl)
        this.btnNext = $(options.navigation.nextEl)
          this.btnPrev
          .on("click.changeIndex",{turn:"prev"},$.proxy(this.change_index,this))
          .on("click.animation",$.proxy(this.animation,this))
          this.btnNext
          .on("click", { turn: "next" }, $.proxy(this.change_index, this))
          .on("click", $.proxy(this.animation, this))
      }
      if (typeof options.pagination == "object") {
        this.paginationEl = $(options.pagination.el)
      }
    },
    change_index: function (event) {
      if(this.animation.moving){
        return;
      }
      var turnList = {
        "prev": function () {
          this.prev = this.index;
          if (this.index == 0) {
            this.index = this.bannerNum - 1;
          } else {
            this.index--;
          }
        }.bind(this),
        "next": function () {
          this.prev = this.index;
          if (this.index == this.bannerNum - 1) {
            this.index = 0;
          } else {
            this.index++;
          }
        }.bind(this),
        "toIndex": function () {
          this.prev = this.index;
          this.index = $(event.target).index();
        }.bind(this)
      }
      if (!(typeof turnList[event.data.turn] == "function")) return 0;
      turnList[event.data.turn]();
    },
    animation: function (event) {
      if(this.animation.moving){
        return;
      }
      if (this.prev == this.index) return;
      var animationList = {
        "slide": function () {
          animationList.slideFadeInit();
          this.bannerItem.eq(this.index)
            .addClass("swiper-active")
            .css({
              display: "none"
            })
            .slideDown(function(){this.animation.moving = false}.bind(this))
            .siblings()
            .removeClass("swiper-active");
        }.bind(this),
        "fade": function () {
          animationList.slideFadeInit();
          this.bannerItem.eq(this.index)
            .addClass("swiper-active")
            .css({
              display: "none"
            })
            .fadeIn(function(){this.animation.moving = false}.bind(this))
            .siblings()
            .removeClass("swiper-active");
        }.bind(this),
        "scroll": function () {
          this.bannerItem
            .css({
              zIndex: 0
            })
            .eq(this.prev)
            .css({
              zIndex: 2
            })
            .end()
            .eq(this.index)
            .css({
              zIndex: 2
            })
          // console.log(this.prev, this.index)
          if (this.prev > this.index) {
            if(this.index == 0 && this.prev == this.bannerNum-1){
              this.bannerItem.eq(this.prev)
                .stop().animate({
                  left: -this.bannerItem.outerWidth()
                },function(){this.animation.moving = false}.bind(this))
                .end()
                .eq(this.index)
                .css({
                  left: this.bannerItem.outerWidth()
                })
                .stop().animate({
                  left: 0
                },function(){this.animation.moving = false}.bind(this))
            }else{
              this.bannerItem.eq(this.prev)
              .stop().animate({
                left: this.bannerItem.outerWidth()
              },function(){this.animation.moving = false}.bind(this))
              .end()
              .eq(this.index)
              .css({
                left: -this.bannerItem.outerWidth()
              })
              .stop().animate({
                left: 0
              },function(){this.animation.moving = false}.bind(this))
            }
            
          } else {
            if(this.index == this.bannerNum-1 && this.prev == 0){
              this.bannerItem.eq(this.prev)
              .stop().animate({
                left: this.bannerItem.outerWidth()
              },function(){this.animation.moving = false}.bind(this))
              .end()
              .eq(this.index)
              .css({
                left: -this.bannerItem.outerWidth()
              })
              .stop().animate({
                left: 0
              },function(){this.animation.moving = false}.bind(this))
            }else{
              this.bannerItem.eq(this.prev)
              .stop().animate({
                left: -this.bannerItem.outerWidth()
              },function(){this.animation.moving = false}.bind(this))
              .end()
              .eq(this.index)
              .css({
                left: this.bannerItem.outerWidth()
              })
              .stop().animate({
                left: 0
              },function(){this.animation.moving = false}.bind(this))
            }              
          }
        }.bind(this),

        "slideFadeInit": function () {
          this.bannerItem.eq(this.prev)
            .css({
              zIndex: 1
            })
            .siblings()
            .css({
              zIndex: ""
            })
        }.bind(this)
      }
      this.animation.moving = true;
      animationList[this.direction]();
      this.pagination.children().eq(this.index)
        .addClass("swiper-btn-active")
        .siblings()
        .removeClass("swiper-btn-active")
    },
    loop:function(){
      this.bannerWrapper.on("mouseenter",function(){
        clearInterval(this.loopTimer)
      }.bind(this))
      this.bannerWrapper.on("mouseleave",function(){
        clearInterval(this.loopTimer);
        this.loopTimer = setInterval(function(){
          this.prev = this.index;
          this.index = ++this.index % this.bannerNum;
          this.animation();
        }.bind(this),2000)
      }.bind(this))
      this.bannerWrapper.trigger("mouseleave")
    }
  }
}(jQuery);