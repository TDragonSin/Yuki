function addClass(ele,className){
    var reg = new RegExp("(\\s)?"+className,"g");
    ele.className = ele.className.replace(reg,"");
    ele.className += " "+className
}
function removeClass(ele,className){
    var reg = new RegExp("(\\s)?"+className,"g");
    ele.className = ele.className.replace(reg,"");
}
var iNow = 0;
var slider_list = document.getElementsByClassName("slider_list")[0]
var imgWrapper = document.getElementsByClassName("slider_wrapper")[0];
var imgLi = imgWrapper.getElementsByTagName("li")
var right_btn = document.getElementsByClassName("slider_control_next")[0]
var left_btn = document.getElementsByClassName("slider_control_prev")[0]
var slider_indicators = document.getElementsByClassName("slider_indicators")[0]
var slider_indicators_btn = slider_indicators.children
// console.log(imgLi)
    imgLi = [].slice.call(imgLi)  
    function banner_animate(){
        for(var i=0;i<imgLi.length;i++){
            imgLi[i].style.opacity = 0
        }
        move(imgLi[iNow],{opacity:100})
        for(var i=0;i<slider_indicators_btn.length;i++){
            removeClass(slider_indicators_btn[i],"slider_indicators_btn_active")
        }
        addClass(slider_indicators_btn[iNow],"slider_indicators_btn_active")
    }
    right_btn.onclick = function(){
        if(iNow == imgLi.length - 1){
            iNow = 0
        }else{
            iNow ++
        }
        banner_animate() 
    } 
    right_btn.onclick = function(){
        if(iNow == imgLi.length - 1){
            iNow = 0
        }else{
            iNow ++
        }
        banner_animate() 
    } 
    left_btn.onclick = function(){
        if(iNow == 0){
            iNow = imgLi.length - 1
        }else{
            iNow --
        }
        banner_animate() 
    } 
    var temp = 0
    slider_indicators_btn = [].slice.call(slider_indicators_btn)
    slider_indicators_btn.forEach(function(ele,subscript){
        ele.onmouseover = function(){
            if(subscript == temp) return;
            for(var i=0;i<imgLi.length;i++){
                imgLi[i].style.opacity = 0
            }
            for(var i=0;i<slider_indicators_btn.length;i++){
                removeClass(slider_indicators_btn[i],"slider_indicators_btn_active")
            }
            addClass(slider_indicators_btn[subscript],"slider_indicators_btn_active")
            var show = subscript + 1
            move(imgLi[subscript],{opacity:100})
            temp = subscript
        }
    })
    var timer = setInterval(right_btn.onclick,3000)
    slider_list.onmousemove = function(){
        clearInterval(timer)
    }
    slider_list.onmouseout = function(){
        clearInterval(timer)
        timer=setInterval(right_btn.onclick,3000)
    }