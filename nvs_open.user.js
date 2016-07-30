// ==UserScript==
// @name        nvs_open
// @namespace   nvs_open
// @description ニコニコ動画を開いたとき、プレイヤーがトップにくるようスクロール
// @include     http://www.nicovideo.jp/*
// @version     1.0
// @grant       none
// ==/UserScript==

( function( $ ) {
  var playerArea = $( '#playerAlignmentArea' ) ;
  if ( playerArea.size() == 0 )
  { // 要素がない
    // 終わり
    return ;
  }

  var top = playerArea.offset().top;
  var height = $( '#siteHeader' ).height() ;
  $('html,body').animate({ scrollTop: top - height }, 'fast');
} )( jQuery ) ;
