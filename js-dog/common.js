function delegation(child,callback){
    //1.必须是合法元素集合;
    //2.必须在绑定事件的元素的子集;
    var child = [].slice.call(child);
    return function(e){
        var evt = e || widnow.event;
        var target = evt.target || evt.srcElement;
        // alert(1);
        if(child.indexOf(target) != -1){
            //执行事件处理函数;
            callback.call(target,e);
        }
    }
}