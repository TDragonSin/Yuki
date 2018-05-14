var oUl = document.getElementsByClassName("cate_menu")[0];
var oLi = oUl.children;
var cate_pop = document.getElementById("J_popCtn");
var cate_part = cate_pop.children
var fs_inner = document.getElementsByClassName("fs_inner")
oUl.onmousemove = delegation(oLi,list1)
function list1(){
    for(var i=0;i<cate_part.length;i++){
        cate_part[i].style.display = "none"
    }
    cate_pop.style.display = "block";
    var str = "cate_item"+this.getAttribute("data-index");
    for(var i=0;i<cate_part.length;i++){
        if(cate_part[i].getAttribute("id") == str){
            cate_part[i].style.display = "block"
        }
    }
}
for(var i=0;i<oLi.length;i++){
    var oA = oLi[i].children
    for(var j=0;j<oA.length;j++){
        oA[j].setAttribute("data-index",oLi[i].getAttribute("data-index"))
    }
    oLi[i].onmousemove = delegation(oA,list1)
}
cate_pop.onmousemove = function(){
    cate_pop.style.display = "block";
}
cate_pop.onmouseout = function(){
    cate_pop.style.display = "none";
}
oUl.onmouseout = function(){
    cate_pop.style.display = "none";
}