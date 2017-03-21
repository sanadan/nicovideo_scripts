// ==UserScript==
// @name        nvs_open2
// @namespace   nvs_open2
// @description ニコニコ動画を開いたとき、プレイヤーがトップにくるようスクロール2
// @include     http://www.nicovideo.jp/watch/*
// @version     1.0
// @grant       none
// ==/UserScript==

(function(){
  to_movie() ;
  
  var body = document.getElementsByTagName( "body" )[ 0 ] ;
  body.innerHTML += '<style>.floating{bottom:0px;right:0px;position:fixed;z-index:1;}</style><div class="floating"><button id="top">top</button><button id="movie">movie</button></div>' ;
  document.getElementById( "top" ).addEventListener( 'click', to_top, false ) ;
  document.getElementById( "movie" ).addEventListener( 'click', to_movie, false ) ;
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
