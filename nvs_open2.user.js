// ==UserScript==
// @name        nvs_open2
// @namespace   nvs_open2
// @description ニコニコ動画を開いたとき、プレイヤーがトップにくるようスクロール2
// @include     http://www.nicovideo.jp/watch/*
// @version     1.0
// @grant       none
// ==/UserScript==

(function(){
  var e = document.getElementById( "siteHeader" ) ;
  e.innerHTML += '<style>.nvs_floating{bottom:0px;right:0px;position:fixed;z-index:1;}</style><div class="nvs_floating"><button id="nvs_top">top</button><button id="nvs_movie">movie</button></div>' ;
  document.getElementById( "nvs_top" ).addEventListener( 'click', to_top, false ) ;
  document.getElementById( "nvs_movie" ).addEventListener( 'click', to_movie, false ) ;

  to_movie() ;
  
  document.getElementsByClassName( "CommentInput-textarea" )[ 0 ].focus() ;
})() ;

function to_movie()
{
  var playerAreas = document.getElementsByClassName( "MainContainer" ) ;
  if ( playerAreas.length == 0 )
  { // 要素がない
    return ;
  }
  
  var top = playerAreas[ 0 ].getBoundingClientRect().top - window.pageYOffset ;
  var height = document.getElementById( 'siteHeader' ).getBoundingClientRect().bottom ;
  window.scrollTo( 0, top - height ) ;
}

function to_top()
{
  window.scrollTo( 0, 0 ) ;
}
