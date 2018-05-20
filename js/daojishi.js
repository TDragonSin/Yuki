;+function($){
  $.fn.Countdown = function(ele,opts){
    new Countdown(ele,opts);
  }
  function Countdown(ele,opts){
    this.opts = opts? opts : "2018/5/22";
    if(!ele) return;
    this.ele = $(ele);
    this.init();
  }
  Countdown.prototype={
    constructor:Countdown,
    init:function(){
      // console.log(this.ele,this.opts)
      this.start();
      this.count_timer = setInterval(function(){
        this.start();
      }.bind(this),1000)
    },
    start:function(){
      var date = this.opts;
      var future = new Date(date);
      var now = new Date();
      var ft = future.getTime();
      var nt = now.getTime();
      var cha = ft - nt;
      if(cha < 0) return false;
      var hour = Math.floor(cha / 1000 / 3600);
      cha = cha - hour * 1000 * 3600;
      var minute = Math.floor(cha / 1000 / 60);
      cha = cha - minute * 1000 * 60;
      var second = Math.floor(cha / 1000);
      this.render({
        hour:hour,
        minute:minute,
        second:second
      })
    },
    render:function(obj){
      this.ele.find(".hour").text(obj.hour<10?"0"+obj.hour:obj.hour);
      this.ele.find(".minite").text(obj.minute<10?"0"+obj.minute:obj.minute);
      this.ele.find(".second").text(obj.second<10?"0"+obj.second:obj.second);
    }
  }
}(jQuery)
