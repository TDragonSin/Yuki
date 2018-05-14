function w_move(ele,target,attr){
	clearInterval(ele.timer);
	ele.timer = setInterval(function(){
		if(attr == "opacity"){
			//透明度的iNow获取;
			var iNow = parseInt(getStyle(ele,attr) * 100)
		}else{
			//iNow 获取不同;
			var iNow = parseInt(getStyle(ele,attr));
		}
		var speed = (target - iNow) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(iNow == target){
			clearInterval(ele.timer)
		}else{

			if(attr == "opacity"){
				iNow = iNow + speed ;
				ele.style.opacity = iNow / 100;
			}else{
				//运动不同;
				ele.style[attr] = iNow + speed + "px";
			}
		}
	}, 10)
}

function getStyle(ele,attr){
	if(getComputedStyle){
		return getComputedStyle(ele)[attr]
	}else{
		return ele.currentStyle[attr]
	}
}
