//するするスクロール（TOPページ用）
$(function(){
        // hrefが#で始まるaタグのクリックイベント
	$("a[href^=#]").click(function(){
		var hash = $(this.hash);	// クリックしたaタグのハッシュの要素を取得する
		// ハッシュが"#noscroll"の場合は、スクロール処理を行わない
		if($(hash).selector == "#noscroll") return false;
		// ハッシュの要素の位置を取得
		var offset = $(hash).offset().top;
		// ハッシュの要素の位置まで移動
		$("html,body").animate({scrollTop: offset}, 800);
		// aタグによるページ遷移を回避
		return false;
	});
});

// ロールオーバー（透過）
$(function(){
    $(".over") .hover(function(){
       $(this).fadeTo("4000",0.5); // マウスオーバーで透明度を70%にする
    },function(){
       $(this).fadeTo("4000",1.0); // マウスアウトで透明度を100%に戻す
    });
  });

//ボックス全体をリンク領域に
$(function() {
    //class="box"をクリックでイベント発火
    $('.box').click(function() {
        //a要素からhref属性を探して中身を取得し，そのURLに飛ばす。別窓なら('href'), '_blank'とすればOK
        window.location = $(this).find('a').attr('href');
        return false;
    });
});

//スクロ―ルしたら表示
$(window).scroll(function () {
	var s = $(this).scrollTop();
	var m = 100;
	if(s > m) {
		$("#footer").fadeIn('fast');
	} else if(s < m) {
		$("#footer").fadeOut('fast');
	}
});

//SP用ハンバーガーメニュー（for SP）
$(function(){
  $("#spmenu-open").click(function(){
  $("#spmenu").slideToggle(500);
  return false;
  });
});
$(function() {
	//ロード or スクロールされると実行
	$(window).on('load scroll orientationchange resize', function(){
		WW = $(window).width();
		//window幅480以上なら
		if (WW >= 480) {
			$('#spmenu').css('display', 'none');	
		}
	});
});