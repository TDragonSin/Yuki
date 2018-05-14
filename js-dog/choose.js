var findex = 0;
var mod_tab_head_item = document.getElementsByClassName("mod_tab_head_item");
var mod_active = document.getElementsByClassName("news_tab_active")[0];
var mod_tab_content_item = Array.from(document.querySelectorAll(".mod_tab_content_item"))
mod_tab_head_item = [].slice.call(mod_tab_head_item)
// mod_tab_head_item.forEach(function(ele,index){
//   ele.onmousemove = function(){
//     if(findex == index) return;
//     findex = index;
//     if(findex == 1){
//       _move(mod_active,53,"left")
//     }else{
//       _move(mod_active,0,"left")
//     }
//   }
// })

function Table(btn,show){
  this.btn = btn;
  this.show = show;
  this.init()
}
Table.prototype.init = function(){
  this.aBtn = this.btn;
  this.aShow = this.show
  this.index = 0
  for(let i=0;i<this.aBtn.length;i++){
      this.aBtn[i].onmousemove = function(){
          this.changeIndex(i)
          if(findex == i) return;
          findex = i;
          if(findex == 1){
            _move(mod_active,53,"left")
          }else{
            _move(mod_active,0,"left")
          }
      }.bind(this)
  }
}
Table.prototype.changeIndex = function(i){
  this.index = i;
  this.changeItem()
}
Table.prototype.changeItem = function(){
  for(var i=0;i<this.aShow.length;i++){
      this.aShow[i].style.display = "none"
  }
  this.aShow[this.index].style.display = "block"
}
new Table(mod_tab_head_item,mod_tab_content_item)
function $(select){
  return Array.from(document.querySelectorAll(select))
}
  
///////////////////////////////////////////////////////////////////
var tab_head_item = Array.from(document.getElementsByClassName("tab_head_item"));
var tab_body_item = Array.from(document.getElementsByClassName("tab_body_item"));
var top_tab_lk = Array.from(document.getElementsByClassName("top_tab_lk"));
function Table2(btn,show){
  this.btn = btn;
  this.show = show;
  this.init()
}
Table2.prototype.init = function(){
  this.aBtn = this.btn;
  this.aShow = this.show
  this.index = 0
  for(let i=0;i<this.aBtn.length;i++){
      this.aBtn[i].onmousemove = function(){
          this.changeIndex(i)
          for(var j=0;j<top_tab_lk.length;j++){
            removeClass(top_tab_lk[j],"active")
          }
          addClass(top_tab_lk[i],"active")
      }.bind(this)
  }
}
Table2.prototype.changeIndex = function(i){
  this.index = i;
  this.changeItem()
}
Table2.prototype.changeItem = function(){
  for(var i=0;i<this.aShow.length;i++){
      this.aShow[i].style.display = "none"
  }
  this.aShow[this.index].style.display = "block"
}
new Table2(tab_head_item,tab_body_item)

///////////////////////////////////////////////////////
var ball = Array.from(document.querySelectorAll(".t_slider_indicators"));
var t_slider_wrapper = document.getElementsByClassName("t_slider_wrapper")
for(var i=0;i<t_slider_wrapper.length;i++){
  var ball_btn = Array.from(ball[i].getElementsByClassName("t_slider_indicators_btn"))
  circle(t_slider_wrapper[i],ball_btn,350)
}
function circle(father,dot,long){
  dot.forEach(function(ele,subscript){
    ele.onmouseover = function(){
      for(var i=0;i<dot.length;i++){
        removeClass(dot[i],"slider_indicators_btn_active")
      }
      addClass(ele,"slider_indicators_btn_active")
      var show = subscript
      w_move(father,-long * show,"marginLeft")
    }
  })
}
///////////////////////////////////////////////////////////////////
var mball = Array.from(document.querySelector(".m_slider_indicators").children);
var m_slider_wrapper = document.getElementsByClassName("m_slider_wrapper")[0]
circle(m_slider_wrapper,mball,350)