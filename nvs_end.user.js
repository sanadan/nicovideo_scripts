// ==UserScript==
// @name        nvs_end
// @namespace   nvs_end
// @description ニコニコ動画の再生終了後、動画情報がトップにくるようスクロール
// @include     http://www.nicovideo.jp/*
// @version     1.0
// @grant       none
// ==/UserScript==

( function( $ ) {
  var player = $( '#external_nicoplayer' ) ;
  if ( player.size() == 0 )
  { // プレイヤーがない
    // 終わり
    return ;
  }

  var height = $( '#siteHeader' ).height() ;
  var id = setInterval( function() {
    if ( player[ 0 ].ext_getStatus() == 'end' )
    {
      clearInterval( id ) ;
      $('html,body').animate({ scrollTop: $( '#videoInfoHead' ).offset().top - height }, 'fast' ) ;
    }
  }, 1000 ) ;
} )( jQuery ) ;
