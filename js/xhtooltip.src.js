/*!
 * xhTooltip - WYSIWYG XHTML Editor
 * @requires jQuery v1.3.2
 *
 * @author Yanis.Wang<yanis.wang@gmail.com>
 * @site http://xheditor.com/
 * @licence LGPL(http://www.opensource.org/licenses/lgpl-license.php)
 *
 * @Version: 1.0.0 alpha2 (build 110304)
 */
(function($){
var jTip,_timer,bShow=false,xy={x:0,y:0};
$.fn.xhtooltip=function()
{
	this.each(function(){
		var _jThis=$(this),sTitle=_jThis.attr("title");
		_jThis.removeAttr('title');
		if(sTitle!=undefined){
			_jThis.mousemove(function(e){
				if(bShow){
					if(Math.abs(e.pageX-xy.x)>10||Math.abs(e.pageY-xy.y)>10)jTip.css("left",-999);
					return;
				}
				clearTimeout(_timer);
				_timer=setTimeout(function(){
					jTip.html(sTitle).css("left", e.pageX).css("top", e.pageY+21).fadeIn("medium");
					bShow=true;
					xy.x=e.pageX;
					xy.y=e.pageY;
				},300);
			}).mouseout(function(){jTip.css("left",-999);bShow=false;});
		}
	});
}
$(function(){$("body").append(jTip=$("<div id='xhtooltip'></div>"));});
 })(jQuery);