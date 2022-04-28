$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 4,//スライドを画面に3枚見せる
  slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});


//search box refere https://codepen.io/clue-design/pen/gXqzxL

$(function(){
	// テキストボックスでキーアップされた時に実行
	$('.search__text').keyup(function(){
	  // テキストボックスの内容を保存
	  search__text = $(".search__text").val();
	  // div.team-memberをすべて取得してループ
	  $('.adcol-lg-4').each(function(){
		val = $(this).text();
		if (val.match(search__text)) {
		  $(this).show();
		} else {
		  $(this).hide();
		}
	  });
	});
  });

//modal_serch


$(function(){
  cnt= 0;
  cnt2= 0;
  
  $(document).ready(function(){
    clickAction();
  });
  
  function clickAction(){
    $('.btnf1').click(function() {
      my_id = $(this).attr("id");
      open(my_id);
    });
    $('.btnf2').click(function() {
      my_id = $(this).attr("id");
      open2(my_id);
    });
  }
  
  function open(myid){
    if(cnt==0){
      $('.cate').css('display','none');
    }
  
    $('#cate_'+myid).toggle();
    $('#'+myid).toggleClass('actv');
    cnt++;
  
    if(0 == $(".links .actv").length){
      $('.cate').show();
      cnt= 0;
    }
  }
  
  function open2(myid){
    if(cnt2==0){
      $('.m').css('display','none');
      $('.f').css('display','none');
    }
  
    if(myid=='s1'){
      $('.m').toggle();
    } else{
      $('.f').toggle();
    }

    $('#'+myid).toggleClass('actv');
    cnt2++;
  
    if(0 == $(".links2 .actv").length){
      $('.f').show();
      $('.m').show();
      cnt2= 0;
    }
  }
});

/*Add favorit icon*/
{
  const favId = 'favoriteFlags';
  const storage = localStorage.getItem(favId);
  const fav = storage !== null ? JSON.parse(storage) : {};

  window.addEventListener('load', function() {
      const e = document.querySelectorAll('#fav li');
      for(let i = 0; i < e.length; i++) {
          const o = e[i];
          const no = o.attributes.no;
          if(no !== undefined) {
              o.addEventListener('click', function() {
                  storageUpdateToggle(this, no.value);
              });
              statusSet(o, fav[no.value]);
          }
      }
  });

  function storageUpdateToggle(e, no) {
    console.log(e, no);
      if(fav[no] !== undefined)
          fav[no] ^= 1;
      else
          fav[no] = 1;

      let trueCount = 0;
      for(let i in fav) trueCount += fav[i];

      if(trueCount)
          localStorage.setItem(favId, JSON.stringify(fav));
      else
          localStorage.removeItem(favId);

      statusSet(e, fav[no]);
  }

  function statusSet(e, f) {
      const o = e.querySelector('span');
      if(f !== undefined && f) {
          o.textContent = '♥';
          o.classList.add('heart');
      }
      else {
          o.textContent = '♡';
          o.classList.remove('heart');
      }
  }
}
