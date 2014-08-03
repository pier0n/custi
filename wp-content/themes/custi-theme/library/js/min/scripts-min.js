function updateViewportDimensions(){var e=window,t=document,n=t.documentElement,o=t.getElementsByTagName("body")[0],i=e.innerWidth||n.clientWidth||o.clientWidth,r=e.innerHeight||n.clientHeight||o.clientHeight;return{width:i,height:r}}function loadGravatars(){viewport=updateViewportDimensions(),viewport.width>=768&&jQuery(".comment img[data-gravatar]").each(function(){jQuery(this).attr("src",jQuery(this).attr("data-gravatar"))})}function responsiveNav(){viewport=updateViewportDimensions();var e=!1;waitForFinalEvent(function(){viewport.width>=768?(console.log("desktop"),e=!0):console.log("desktop")},timeToWaitForLast,"your-function-identifier-string")}!function($){$.fn.extend({simulate:function(e,t){return this.each(function(){var n=$.extend({},$.simulate.defaults,t||{});new $.simulate(this,e,n)})}}),$.simulate=function(e,t,n){this.target=e,this.options=n,/^drag$/.test(t)?this[t].apply(this,[this.target,n]):this.simulateEvent(e,t,n)},$.extend($.simulate.prototype,{simulateEvent:function(e,t,n){var o=this.createEvent(t,n);return this.dispatchEvent(e,t,o,n),o},createEvent:function(e,t){return/^mouse(over|out|down|up|move)|(dbl)?click$/.test(e)?this.mouseEvent(e,t):/^key(up|down|press)$/.test(e)?this.keyboardEvent(e,t):void 0},mouseEvent:function(e,t){var n,o=$.extend({bubbles:!0,cancelable:"mousemove"!=e,view:window,detail:0,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:void 0},t),i=$(o.relatedTarget)[0];return $.isFunction(document.createEvent)?(n=document.createEvent("MouseEvents"),n.initMouseEvent(e,o.bubbles,o.cancelable,o.view,o.detail,o.screenX,o.screenY,o.clientX,o.clientY,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.button,o.relatedTarget||document.body.parentNode)):document.createEventObject&&(n=document.createEventObject(),$.extend(n,o),n.button={0:1,1:4,2:2}[n.button]||n.button),n},keyboardEvent:function(e,t){var n,o=$.extend({bubbles:!0,cancelable:!0,view:window,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:0,charCode:0},t);if($.isFunction(document.createEvent))try{n=document.createEvent("KeyEvents"),n.initKeyEvent(e,o.bubbles,o.cancelable,o.view,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode)}catch(i){n=document.createEvent("Events"),n.initEvent(e,o.bubbles,o.cancelable),$.extend(n,{view:o.view,ctrlKey:o.ctrlKey,altKey:o.altKey,shiftKey:o.shiftKey,metaKey:o.metaKey,keyCode:o.keyCode,charCode:o.charCode})}else document.createEventObject&&(n=document.createEventObject(),$.extend(n,o));return void 0!==$.browser&&($.browser.msie||$.browser.opera)&&(n.keyCode=o.charCode>0?o.charCode:o.keyCode,n.charCode=void 0),n},dispatchEvent:function(e,t,n){return e.dispatchEvent?e.dispatchEvent(n):e.fireEvent&&e.fireEvent("on"+t,n),n},drag:function(e){var t=this,n=this.findCenter(this.target),o=this.options,i=Math.floor(n.x),r=Math.floor(n.y),a=o.dx||0,s=o.dy||0,u=this.target,c={clientX:i,clientY:r};this.simulateEvent(u,"mousedown",c),c={clientX:i+1,clientY:r+1},this.simulateEvent(document,"mousemove",c),c={clientX:i+a,clientY:r+s},this.simulateEvent(document,"mousemove",c),this.simulateEvent(document,"mousemove",c),this.simulateEvent(u,"mouseup",c)},findCenter:function(e){var e=$(this.target),t=e.offset();return{x:t.left+e.outerWidth()/2,y:t.top+e.outerHeight()/2}}}),$.extend($.simulate,{defaults:{speed:"sync"},VK_TAB:9,VK_ENTER:13,VK_ESC:27,VK_PGUP:33,VK_PGDN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40})}(jQuery),function($){$.fn.hoverIntent=function(e,t,n){var o={interval:100,sensitivity:6,timeout:0};o="object"==typeof e?$.extend(o,e):$.isFunction(t)?$.extend(o,{over:e,out:t,selector:n}):$.extend(o,{over:e,out:e,selector:t});var i,r,a,s,u=function(e){i=e.pageX,r=e.pageY},c=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),Math.sqrt((a-i)*(a-i)+(s-r)*(s-r))<o.sensitivity?($(t).off("mousemove.hoverIntent",u),t.hoverIntent_s=!0,o.over.apply(t,[e])):(a=i,s=r,t.hoverIntent_t=setTimeout(function(){c(e,t)},o.interval),void 0)},v=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,o.out.apply(t,[e])},d=function(e){var t=$.extend({},e),n=this;n.hoverIntent_t&&(n.hoverIntent_t=clearTimeout(n.hoverIntent_t)),"mouseenter"===e.type?(a=t.pageX,s=t.pageY,$(n).on("mousemove.hoverIntent",u),n.hoverIntent_s||(n.hoverIntent_t=setTimeout(function(){c(t,n)},o.interval))):($(n).off("mousemove.hoverIntent",u),n.hoverIntent_s&&(n.hoverIntent_t=setTimeout(function(){v(t,n)},o.timeout)))};return this.on({"mouseenter.hoverIntent":d,"mouseleave.hoverIntent":d},o.selector)}}(jQuery);var viewport=updateViewportDimensions(),waitForFinalEvent=function(){var e={};return function(t,n,o){o||(o="Don't call this twice without a uniqueId"),e[o]&&clearTimeout(e[o]),e[o]=setTimeout(t,n)}}(),timeToWaitForLast=100;jQuery(document).ready(function($){loadGravatars(),$(".js-header-search").click(function(e){$("#s").toggleClass("expanded"),e.preventDefault()}),$("#s").attr("placeholder","Czego szukasz?"),$(".mobile-nav-icon").on("click",function(){var e=$(this);return e.hasClass("mobile-nav-active")?($(".js-mobile-nav").focusout(),e.removeClass("mobile-nav-active")):($(".js-mobile-nav").focus(),e.addClass("mobile-nav-active")),!1}),$(".js-show-store-dropdown").hoverIntent({over:function(){$(".store-dropdown").addClass("expanded")},out:function(){$(".store-dropdown").removeClass("expanded")},timeout:700}),$(".js-show-more-info-dropdown").hoverIntent({over:function(){$(".more-info-dropdown").addClass("expanded")},out:function(){$(".more-info-dropdown").removeClass("expanded")},timeout:700}),$(window).resize(function(){responsiveNav()})});