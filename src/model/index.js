define(["goodsList"],function(goodsList){
    var url1 = "http://localhost/PHP/yuki/php/goodsList.php";
    var url2 = "http://localhost:80/PHP/yuki/data/list.json";
    new goodsList(url1,url2,".shopshow");
})
