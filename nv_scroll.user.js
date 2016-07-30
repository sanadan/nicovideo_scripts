// ==UserScript==
// @name        nv_scroll
// @namespace   nv_scroll
// @description ニコニコ動画のプレイヤーがトップにくるようスクロール
// @include     http://www.nicovideo.jp/*
// @version     1.0
// @grant       none
// ==/UserScript==

( function( $ ) {
  var player = $( '#playerAlignmentArea' ) ;
  if ( player.size() == 0 )
  { // 要素がない
    // 終わり
    return ;
  }
  var top = player.offset().top;
  var height = $( '#siteHeader' ).height() ;
  $('html,body').animate({ scrollTop: top - height }, 'fast');
} )( jQuery ) ;
