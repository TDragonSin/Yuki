  //这是我的第一个放大镜程序  感觉特别开心
	function Magnifier(options){
		this.small_ele = $(options.small_ele);
		this.focus_ele = $(options.focus_ele);
		this.big_ele = $(options.big_ele);
		if(this.small_ele.length == 0 || this.focus_ele.length == 0 || this.big_ele.length == 0) return;
		this.init();
	}
	Magnifier.prototype = {
		constructor:Magnifier,
		init(){
			//绑定鼠标移入事件;
			this.scale = this.big_ele.width() / this.focus_ele.width();
			this.ratio();
			this.small_ele.on("mouseenter",{hidden:false},$.proxy(this.toggleFocus,this));
			this.small_ele.on("mouseleave",{hidden:true},$.proxy(this.toggleFocus,this));
			this.small_ele.on("mousemove.smallMove",$.proxy(this.smallMove,this));
			this.small_ele.on("mousemove.bigMove",$.proxy(this.bigMove,this));
			// this.small_ele[0].onmousewheel = function(event){
			// 	var evt = event || window.event;
			// 	this.ratio("ch",evt.wheelDelta);
			// }.bind(this);
			// this.small_ele[0].addEventListener("DOMMouseScroll",function(event){
			// 	this.ratio("ff",event.detail);
			// }.bind(this));			
		},
		toggleFocus(event){
			var opacity_img = this.small_ele.find(".opacity-img");
			if(event.data.hidden){
				this.focus_ele.stop().fadeOut(200);
				this.big_ele.stop().fadeOut(200);
				opacity_img.stop().fadeTo("fast",1);
			}else{
				this.focus_ele.stop().fadeIn(200);
				this.big_ele.stop().fadeIn(200);
				opacity_img.stop().fadeTo("fast",0.3);
			}
		},
		smallMove(event){
			var eleX = event.offsetX-this.focus_ele.width()/2;
			var eleY = event.offsetY-this.focus_ele.height()/2;
			var maxWidth = this.small_ele.width() - this.focus_ele.width();
			var maxHeight = this.small_ele.height() - this.focus_ele.height();

			eleX = eleX <= 0 ? 0 : eleX;
			eleX = eleX >= maxWidth ?  maxWidth : eleX;
			
			eleY = eleY <= 0 ? 0 : eleY;
			eleY = eleY >= maxHeight ?  maxHeight : eleY;

			this.focus_ele.css({
				left:eleX,
				top:eleY,
				backgroundPosition:`${-eleX}px ${-eleY}px`
			})

			var fullLongX = this.small_ele.width() - this.focus_ele.width();
			var fullLongY = this.small_ele.height() - this.focus_ele.height();
			this.propX = Math.round(eleX / fullLongX * 100);
			this.propY = Math.round(eleY / fullLongY * 100); 
		},
		bigMove(){
			var bigImg = this.big_ele.find("img")
			var fullLongX = bigImg.width() - this.big_ele.width();
			var fullLongY = bigImg.height() - this.big_ele.height() ;
			
			var eleX = -Math.round(fullLongX * this.propX / 100);
			var eleY = -Math.round(fullLongY * this.propY / 100);
			
			bigImg.css({
				left:eleX,
				top:eleY
			})
		},
		ratio(browser_type,data){
			if(!browser_type || !data){
				var bigImg = this.big_ele.find("img");
				bigImg.css({
					width:Math.round(this.small_ele.width() * this.scale),
					height:Math.round(this.small_ele.height() * this.scale)
				});
				return 0;
			}

			var turn;
			if(browser_type == "ch"){
				data > 0 ? turn = "top" : turn = "bottom";
			}else if(browser_type == "ff"){
				data > 0 ? turn = "bottom" : turn = "top";
			}
			
			var focus_ele_width = this.focus_ele.width() ;
			var focus_ele_height = this.focus_ele.height() ;

			if(turn == "top"){
				if(this.focus_ele.width() <= this.small_ele.width() * 0.8){
					this.focus_ele
					.css({
						width:"+=2",
						height:"+=2",
						top:"-=1",
						backgroundPosition:`${-this.focus_ele.position().left+1}px ${-this.focus_ele.position().top+1}px`
					})

					var maxWidth = this.small_ele.width() - this.focus_ele.width();
					var maxHeight = this.small_ele.height() - this.focus_ele.height();

					var left = this.focus_ele.position().left;
					var top = this.focus_ele.position().top;


					left = left <= 0 ? 0 : left-1;
//					left = left >= maxWidth ?  maxWidth : left;
//
//					top = top <= 0 ? 0 : top-1;
//					top = top >= maxHeight ?  maxHeight : top;

					this.focus_ele.css({
						left:left,
//					top:top
					})
				}

			}else if(turn == "bottom"){
				if(this.focus_ele.width() >= this.small_ele.width() * 0.1){
					this.focus_ele
					.css({
						width:"-=2",
						height:"-=2",
						left:"+=1",
						top:"+=1",
						backgroundPosition:`${-this.focus_ele.position().left-1}px ${-this.focus_ele.position().top-1}px`
					})
				}
			}

			this.scale = this.big_ele.width() / this.focus_ele.width();
			this.ratio();
			this.bigMove();
		}	
	}

	new Magnifier({
		small_ele:"#zoom1",
		focus_ele:".MagicZoomPup",
		big_ele:".MagicZoomBigImageCont"
	})