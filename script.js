window.onload = function(){

   var myAudio = document.getElementById('my-audio');
   var play = document.getElementById('play');
   var pause = document.getElementById('pause');
   var loading = document.getElementById('loading');
   var bar = document.getElementById('bar');

   function displayControls() {
      loading.style.display = "none";
      play.style.display = "inline-block";
   }

   // check that the media is ready before displaying the controls
   if (myAudio.paused) {
      displayControls();
   } else {
      // not ready yet - wait for canplay event
      myAudio.addEventListener('canplay', function() {
         displayControls();
      });
   }

   play.addEventListener('click', function() {
      myAudio.play();
      play.style.display = "none";
      pause.style.display = "inline-block";
   });

   pause.addEventListener('click', function() {
      myAudio.pause();
      pause.style.display = "none";
      play.style.display = "inline-block";
   });

   // display progress

   myAudio.addEventListener('timeupdate', function() {
      //sets the percentage
      bar.style.width = parseInt(((myAudio.currentTime / myAudio.duration) * 100), 10) + "%";
   });
  
 
  
  // Get the video element with id="myVideo"
var thisAudio = document.getElementById("my-audio");

// Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
thisAudio.ontimeupdate = function() {myFunction()};

function myFunction() {
  // Display the current position of the video in a p element with id="demo"
  document.getElementById("playCurrentTime").innerHTML = (((thisAudio.currentTime)/100).toFixed(2)).replace(/\./g,":");
}

}

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self)["rabbit-lyrics"]={})}(this,(function(t){"use strict";function e(t){if(t.dataset.media){var i=document.querySelector(t.dataset.media);if(i)return i}for(var n=t.previousElementSibling;n;){if("audio"===n.tagName.toLowerCase()||"video"===n.tagName.toLowerCase())return n;var s=n.querySelectorAll("audio, video");if(s.length>0)return s.item(s.length-1);n=n.previousElementSibling}return t.parentElement?e(t.parentElement):null}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function n(t){return t&&"string"==typeof t?(e=t.match(/\[(\d+):(\d+):(\d+\.\d+)\]/))&&4===e.length?60*parseInt(e[1])*60+60*parseInt(e[2])+parseFloat(e[3]):(e=t.match(/\[(\d+):(\d+\.\d+)\]/))&&3===e.length?60*parseInt(e[1])+parseFloat(e[2]):0:0;var e}var s=/\[(\d+:)?\d+:\d+\.\d+\]/,r=/^\[(\d+:)?\d+:\d+\.\d+\]/,a=/\[(\d+:)?\d+:\d+\.\d+\]$/;function l(t){for(var e=[],i=0,r=Infinity;i<t.length;){var a=t.substr(i).match(s);if(a&&a[0]&&void 0!==a.index){var l=n(a[0]);a.index>0&&e.push({startsAt:r,endsAt:l,content:t.substr(i,a.index)}),r=l,i+=a.index+a[0].length}else e.push({startsAt:r,endsAt:Infinity,content:t.substr(i)}),i=t.length}return e}var c=function(){function t(t,e,i){var n=this;if(this.lyricsElement=t,this.mediaElement=e,this.viewMode="clip",this.alignment="center",this.lyrics="",this.lyricsLines=[],this.handleStatusChange=function(t){var e;switch(t.type){case"play":case"playing":e="playing";break;case"pause":e="paused";break;case"waiting":e="waiting";break;case"ended":e="ended"}n.lyricsElement.classList.remove("rabbit-lyrics--playing","rabbit-lyrics--paused","rabbit-lyrics--waiting","rabbit-lyrics--ended"),e&&n.lyricsElement.classList.add("rabbit-lyrics--"+e)},this.synchronize=function(){var t=n.mediaElement.currentTime,e=!1,i=n.lyricsLines.filter((function(i){return t>=i.startsAt&&t<i.endsAt?(i.element.classList.contains("rabbit-lyrics__line--active")||(e=!0,i.element.classList.add("rabbit-lyrics__line--active")),i.content.forEach((function(e){t>=e.startsAt?e.element.classList.add("rabbit-lyrics__inline--active"):e.element.classList.remove("rabbit-lyrics__inline--active")})),!0):(i.element.classList.contains("rabbit-lyrics__line--active")&&(e=!0,i.element.classList.remove("rabbit-lyrics__line--active"),i.content.forEach((function(t){t.element.classList.remove("rabbit-lyrics__inline--active")}))),!1)}));e&&i.length>0&&(n.lyricsElement.scrollTop=(i[0].element.offsetTop+i[i.length-1].element.offsetTop+i[i.length-1].element.offsetHeight)/2-n.lyricsElement.clientHeight/2)},this.lyricsElement.rabbitLyrics)return this.lyricsElement.rabbitLyrics;this.lyricsElement.rabbitLyrics=this,Object.assign(this,this.getOptionsFromAttributes()),i&&Object.assign(this,i),this.render(),this.lyricsElement.scrollTop=0,this.mediaElement.addEventListener("timeupdate",this.synchronize),this.mediaElement.addEventListener("play",this.handleStatusChange),this.mediaElement.addEventListener("playing",this.handleStatusChange),this.mediaElement.addEventListener("pause",this.handleStatusChange),this.mediaElement.addEventListener("waiting",this.handleStatusChange),this.mediaElement.addEventListener("ended",this.handleStatusChange)}var e=t.prototype;return e.setLyrics=function(t){this.lyrics=t,this.render()},e.setAlignment=function(t){this.alignment=t,this.lyricsElement.classList.remove("rabbit-lyrics--center","rabbit-lyrics--left","rabbit-lyrics--right"),this.lyricsElement.classList.add("rabbit-lyrics--"+this.alignment)},e.setViewMode=function(t){this.viewMode=t,this.lyricsElement.classList.remove("rabbit-lyrics--clip","rabbit-lyrics--full","rabbit-lyrics--mini"),this.lyricsElement.classList.add("rabbit-lyrics--"+this.viewMode)},e.render=function(){var t=this;this.lyricsElement.classList.add("rabbit-lyrics"),this.lyricsElement.classList.add("rabbit-lyrics--"+this.viewMode),this.lyricsElement.classList.add("rabbit-lyrics--"+this.alignment),this.lyricsElement.textContent=null,this.lyricsLines=function(t){for(var e=t.trim().split(/\r\n|\n|\r/).map((function(t){return t.trim()})),i=[],s=0;s<e.length;s++){var c=e[s],o=c.match(r),d=c.match(a),h=o?n(o[0]):Infinity,m=d?n(d[0]):Infinity,y=l(c);i.push({startsAt:h,endsAt:m,content:y})}return function(t){for(var e=Infinity,i=t.length-1;i>=0;i--){Infinity===t[i].endsAt?t[i].endsAt=e:e=t[i].endsAt;for(var n=t[i].content.length-1;n>=0;n--)Infinity===t[i].content[n].endsAt?t[i].content[n].endsAt=e:e=t[i].content[n].endsAt,Infinity!==t[i].content[n].startsAt&&(e=t[i].content[n].startsAt);Infinity!==t[i].startsAt&&(e=t[i].startsAt)}}(i),function(t){for(var e=Infinity,i=0;i<t.length;i++){Infinity===t[i].startsAt?t[i].startsAt=e:e=t[i].startsAt;for(var n=0;n<t[i].content.length;n++)Infinity===t[i].content[n].startsAt?t[i].content[n].startsAt=e:e=t[i].content[n].startsAt}}(i),i}(this.lyrics).map((function(e){var n=document.createElement("div");n.className="rabbit-lyrics__line",n.addEventListener("click",(function(){t.mediaElement.currentTime=e.startsAt,t.synchronize()}));var s=e.content.map((function(t){var e=document.createElement("span");return e.className="rabbit-lyrics__inline",e.textContent=t.content,n.append(e),i({},t,{element:e})}));return t.lyricsElement.append(n),i({},e,{content:s,element:n})})),this.synchronize()},e.getOptionsFromAttributes=function(){var t,e={};return null!=(t=this.lyricsElement.textContent)&&t.trim()&&(e.lyrics=this.lyricsElement.textContent.trim()),this.lyricsElement.dataset.viewMode&&(e.viewMode=this.lyricsElement.dataset.viewMode),this.lyricsElement.dataset.alignment&&(e.alignment=this.lyricsElement.dataset.alignment),e},t}();!function(t,e){void 0===e&&(e={});var i=e.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(".rabbit-lyrics{position:relative;padding:1em 0;height:16.5em;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth;}.rabbit-lyrics--center{text-align:center}.rabbit-lyrics--left{text-align:left}.rabbit-lyrics--right{text-align:right}.rabbit-lyrics__line{line-height:1.5em;min-height:1.5em;padding:0 1em}.rabbit-lyrics__line--active{background-color:rgba(0,0,0,.1)}.rabbit-lyrics--mini{height:1.5em;overflow-y:hidden}.rabbit-lyrics--mini .rabbit-lyrics__line{display:none}.rabbit-lyrics--mini .rabbit-lyrics__line--active{display:block;background:transparent}.rabbit-lyrics--full{height:auto;overflow-y:initial}"),document.addEventListener("DOMContentLoaded",(function(){for(var t=document.getElementsByClassName("rabbit-lyrics"),i=0;i<t.length;i++){var n=t.item(i);if(n){var s=e(n);s&&new c(n,s)}}}),!1),t.default=c,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=rabbit-lyrics.umd.production.min.js.map