$mt_ad = $(".mt_ad")
$mt_list = $(".mt_ad li")
var mt_top_timer = setInterval(function(){
  if($mt_ad.position().top == -180){
    $mt_ad.offset({top:0});
  }
  $mt_ad.animate({top:"-=36"},"normal","swing")
},3000)

 


