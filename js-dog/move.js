function move(ele,json,callback){
    if(move.moving){
        move.stop();
    }
    ele.timer = {}
    for(var attr in json){
        (function(myAttr){
            ele.timer[attr] = setInterval(function(){
                if(myAttr == "opacity"){
                    var iNow = parseInt(getStyle(ele,myAttr) * 100)
                }else{
                    var iNow = parseInt(getStyle(ele,myAttr))
                }
                var speed = (json[myAttr] - iNow)/1
                speed = speed > 0?Math.ceil(speed):Math.floor(speed)
                if(json[myAttr] == iNow) {
                    clearInterval(ele.timer[myAttr])
                    delete ele.timer[myAttr]
                    if (!Object.keys(ele.timer).length) {
                        if (callback) {
                            callback();
                            move.moving = false
                        }
                    }
                }else{
                    if(myAttr == "opacity"){
                        iNow = iNow + speed
                        ele.style.opacity = iNow / 100
                    }else{
                        ele.style[myAttr] = iNow + speed + "px"
                    }
                }
            },30)
        })(attr)
    }

    move.stop = function(bool){
        for(var attr in ele.timer){
            clearInterval(ele.timer[attr])
            delete  ele.timer[attr]
        }
        if(bool){
            for(var attr in json){
                if(attr == "opacity"){
                    ele.style.opacity = json[attr] / 100
                }else{
                    ele.style[attr] = json[attr] + "px"
                }
            }
        }
    }
    move.moving = true
}
function getStyle(ele,attr){
    if(getComputedStyle){
        return getComputedStyle(ele)[attr]
    }else{
        return ele.currentStyle[attr]
    }

}