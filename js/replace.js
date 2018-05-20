function tihuan(str) {
  var reg = /\s+onclick=".+"/g;
  var reg2 = /href=".+"/g;
  var reg3 = /.JPEG\?.+"\salt=""/g;
  var reg4 = /http:\/\/yukicomic\-pic.oss\-cn\-hangzhou\.aliyuncs\.com/g
  str = str.replace(reg, "").replace(reg2, 'href=""')
  console.log(str)
}
tihuan(`
	        	
<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/999')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20171205105910710940.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>欧舒丹护手霜套装礼盒 乳木果樱花护手霜女滋润补水保湿30ml 法国正品</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥88.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1015')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180112143451794396.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>澳大利亚 Lucas Papaw番木瓜膏润唇膏万用膏保湿滋润万能膏25g </li>
          <li class="oprice ">
             
             
                  
                                                                              ￥36.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1017')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180112145453385518.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>澳洲Lucas Papaw神奇万用木瓜膏保湿滋润润唇护臀孕妇可用木瓜膏75g</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥63.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1036')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180123150940995994.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本Cosme大赏伊诗露esthe dew 樱桃胎盘祛痘化妆水美白保湿爽肤水红蓝绿三色可选500ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥73.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1044')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180124140439142121.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本M-mark松山油脂身体乳无添加天然柚子精华滋润米糠保湿防干身体乳液300ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥118.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1048')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180125162350906745.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本Loshi 北海道马油身体乳液滋润补水保湿全身护肤润肤乳485ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥46.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1057')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180206100753739971.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>欧缇丽CAUDALIE大葡萄籽活性喷雾爽肤水200ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥98.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1064')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180208175502818469.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本乐敦CC美白精华液渗透VC维他命C祛痘印痘疤去痘印修复淡斑面部美容液20ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥78.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1065')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180209092309519839.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本乐敦CC渗透维他命C美白淡班高渗透化妆水淡化痘印 VC爽肤水170ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥73.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1087')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180325214058965938.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本MUJI无印良品清爽型高保湿滋润化妆水水乳爽肤水乳液敏感肌200ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥64.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1099')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180405140045837798.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本UNO吾诺男士控油保湿补水乳液160ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥66.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1105')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180408183156171542.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本ROYAL皇家脐带血引流精华液干细胞嫩肤抗衰老胎盘素90片装</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥418.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1109')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180417193628550626.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本莎娜SANA NewBorn EX眉采飞扬眉笔眉粉眉刷三合一 B5#亮棕色</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥73.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1073')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180413182524740431.JPEG.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本资生堂Shiseido不晕染自然持久防水防汗不脱色初学者1234六角眉笔一支装</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥29.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1042')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180124135552864324.JPEG?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本KISS ME 花漾美姬梦幻泪眼浓密纤长防水防晕不晕染睫毛膏</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥73.0
                 
          </li>
      </ul>
  </div>

<div class="shopshowchirdren " onclick="javascript:window.open('/web/good/findGoodDetail/1068')">
      <div class="img ">
         
          <div class="imgfind">
              <img src="http://yukicomic-pic.oss-cn-hangzhou.aliyuncs.com/gooddetailimg_20180209102943637903.png?x-oss-process=image/resize,m_fixed,h_270" alt=" " class="imgchirdren ">
          </div>
      </div>
      <ul class="name ">
          <li>日本资生堂INTEGRATE完美意境超水润无瑕多合一矿物质保湿提亮水润裸妆粉底液30ml</li>
          <li class="oprice ">
             
             
                  
                                                                              ￥86.0
                 
          </li>
      </ul>
  </div>

`)