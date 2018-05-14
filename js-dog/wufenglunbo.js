var btn_prev = document.getElementsByClassName("w_slider_control_prev")[0];
var btn_next = document.getElementsByClassName("w_slider_control_next")[0];
var sk_list = document.getElementsByClassName("sk_list_inner")[0];
var slider_list = sk_list.children
function banner_init(father,child){
  //复制第一张图片插入到 大长条结�?;
  //复制�?后一张图片到大长条开�?
  var ofirst_ele = child[0].cloneNode(true);
  var olast_ele = child[child.length - 1].cloneNode(true)
  father.appendChild(ofirst_ele);
  father.insertBefore(olast_ele,child[0])
  father.style.width = child[0].offsetWidth * child.length + "px";
}
banner_init(sk_list,slider_list)
var windex = 1;
var temp = 0
var btn_index = 1
btn_next.onclick = function(){
  var show , point;
  if(btn_index == slider_list.length - 1){
    btn_index = 2;
    show =btn_index;
    sk_list.style.marginLeft = -800+"px"
  }else{
    btn_index ++;
    show =btn_index;
  }
  w_move(sk_list,-800 * show,"marginLeft")
}
btn_prev.onclick = function(){
  var show , point;
  if(btn_index == 0){
    btn_index = slider_list.length - 3;
    show = btn_index;
    sk_list.style.marginLeft = -4000+"px"
  }else{
    btn_index --;
    show = btn_index;
  }
  w_move(sk_list,-800 * show,"marginLeft")
}
/////////////////////////////////////////////////////////////////////
var w_wrapper = document.getElementsByClassName("w_slider_wrapper")[0]
var chn_list = w_wrapper.children
var aSpan = document.querySelector(".w_slider_indicators").children;
banner_init(w_wrapper,chn_list)
var wTimer = setInterval(function(){
  sLider(w_wrapper,chn_list,aSpan,180)
},2500)
function sLider(father,child,dot,long){
  var show , point;
  if(windex == child.length - 1){
    windex = 2;
    show = windex;
    father.style.marginLeft = -long+"px"
  }else{
    windex ++;
    show = windex;
  }
  if(show == child.length - 1){
    point = 0;
  }else{
    point = show-1;
  }
  for(var i = 0 ; i < dot.length ; i++){
    removeClass(dot[i],"slider_indicators_btn_active")
  }
  addClass(dot[point],"slider_indicators_btn_active")
  w_move(father,-long * show,"marginLeft")
  dot = [].slice.call(dot)
  dot.forEach(function(ele,subscript){
    ele.onmouseover = function(){
      for(var i=0;i<dot.length;i++){
        removeClass(dot[i],"slider_indicators_btn_active")
      }
      addClass(ele,"slider_indicators_btn_active")
      var show = subscript + 1
      w_move(father,-long * show,"marginLeft")
    }
  })
}
//////////////////////daily//////////////////////////
var d_prev = document.getElementsByClassName("d_slider_control_prev")[0];
var d_next = document.getElementsByClassName("d_slider_control_next")[0];
var d_slider = document.getElementsByClassName("d_slider_wrapper")[0];
var dSpan = document.querySelector(".d_slider_indicators").children;
var da = d_slider.children
var dindex = 1;
d_next.onclick = function(){
  d_sLider(d_slider,da,dSpan,350)
}
d_prev.onclick = function(){
  d_sLider2(d_slider,da,dSpan,350)
}
function d_sLider(father,child,dot,long){
  var show , point;
  if(dindex == child.length - 1){
    dindex = 2;
    show = dindex;
    father.style.marginLeft = -long+"px"
  }else{
    dindex ++;
    show = dindex;
  }
  if(show == child.length - 1){
    point = 0;
  }else{
    point = show-1;
  }
  for(var i = 0 ; i < dot.length ; i++){
    removeClass(dot[i],"slider_indicators_btn_active")
  }
  addClass(dot[point],"slider_indicators_btn_active")
  w_move(father,-long * show,"marginLeft")
  dot = [].slice.call(dot)
  dot.forEach(function(ele,subscript){
    ele.onmouseover = function(){
      for(var i=0;i<dot.length;i++){
        removeClass(dot[i],"slider_indicators_btn_active")
      }
      addClass(ele,"slider_indicators_btn_active")
      var show = subscript + 1
      w_move(father,-long * show,"marginLeft")
    }
  })
}

function d_sLider2(father,child,dot,long){
  var show , point;
  if(dindex == 0){
    dindex = child.length - 3;
    show = dindex;
    father.style.marginLeft = -5*long+"px"
  }else{
    dindex --;
    show = dindex;
  }
  if(show == 0){
    point = dot.length-1;
  }else{
    point = show-1;
  }
  for(var i = 0 ; i < dot.length ; i++){
    removeClass(dot[i],"slider_indicators_btn_active")
  }
  addClass(dot[point],"slider_indicators_btn_active")
  w_move(father,-long * show,"marginLeft")
}

var dTimer = setInterval(function(){
  d_sLider(d_slider,da,dSpan,350)
},3000)





////////////////////////////////////////////////////////////////////
var m_prev = document.getElementsByClassName("f_slider_control_prev")[0];
var m_next = document.getElementsByClassName("f_slider_control_next")[0];
var m_slider = document.getElementsByClassName("f_slider_wrapper")[0];
var mSpan = document.querySelector(".f_slider_indicators").children;
var ma = m_slider.children
var mindex = 1;

m_next.onclick = function(){
  m_sLider(m_slider,ma,mSpan,350)
}
m_prev.onclick = function(){
  m_sLider2(m_slider,ma,mSpan,350)
}

function m_sLider(father,child,dot,long){
  var show , point;
  if(mindex == child.length - 1){
    mindex = 2;
    show = mindex;
    father.style.marginLeft = -long+"px"
  }else{
    mindex ++;
    show = mindex;
  }
  if(show == child.length - 1){
    point = 0;
  }else{
    point = show-1;
  }
  for(var i = 0 ; i < dot.length ; i++){
    removeClass(dot[i],"slider_indicators_btn_active")
  }
  addClass(dot[point],"slider_indicators_btn_active")
  w_move(father,-long * show,"marginLeft")
  dot = [].slice.call(dot)
  dot.forEach(function(ele,subscript){
    ele.onmouseover = function(){
      for(var i=0;i<dot.length;i++){
        removeClass(dot[i],"slider_indicators_btn_active")
      }
      addClass(ele,"slider_indicators_btn_active")
      var show = subscript + 1
      w_move(father,-long * show,"marginLeft")
    }
  })
}
function m_sLider2(father,child,dot,long){
  var show , point;
  if(mindex == 0){
    console.log(child.length)
    mindex = child.length - 3;
    show = mindex;
    father.style.marginLeft = -5*long+"px"
  }else{
    mindex --;
    show = mindex;
  }
  if(show == 0){
    point = dot.length-1;
  }else{
    point = show-1;
  }

  for(var i = 0 ; i < dot.length ; i++){
    removeClass(dot[i],"slider_indicators_btn_active")
  }
  addClass(dot[point],"slider_indicators_btn_active")
  w_move(father,-long * show,"marginLeft")
}
var mTimer = setInterval(function(){
  m_sLider(m_slider,ma,mSpan,350)
},3000)







//////////////////////////////////////////////////////
function addClass(ele,className){
  var reg = new RegExp("(\\s)?"+className,"g");
  ele.className = ele.className.replace(reg,"");
  ele.className += " "+className
}
function removeClass(ele,className){
  var reg = new RegExp("(\\s)?"+className,"g");
  ele.className = ele.className.replace(reg,"");
}