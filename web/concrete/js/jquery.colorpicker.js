!function(a){var b=function(){var b=65,c='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" class="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" class="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" class="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" class="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" class="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" class="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" class="text" maxlength="3" size="3" /><span></span></div><input type="button" class="colorpicker_none" name="none" value="x" /><input type="button" class="colorpicker_submit" name="save" value="Ok" /></div>',d={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onNone:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},e=function(b,c){var d=K(b);a(c).data("colorpicker").fields.eq(1).val(d.r).end().eq(2).val(d.g).end().eq(3).val(d.b).end()},f=function(b,c){a(c).data("colorpicker").fields.eq(4).val(b.h).end().eq(5).val(b.s).end().eq(6).val(b.b).end()},g=function(b,c){a(c).data("colorpicker").fields.eq(0).val(M(b)).end()},h=function(b,c){a(c).data("colorpicker").selector.css("backgroundColor","#"+M({h:b.h,s:100,b:100})),a(c).data("colorpicker").selectorIndic.css({left:parseInt(150*b.s/100,10),top:parseInt(150*(100-b.b)/100,10)})},i=function(b,c){a(c).data("colorpicker").hue.css("top",parseInt(150-150*b.h/360,10))},j=function(b,c){a(c).data("colorpicker").currentColor.css("backgroundColor","#"+M(b))},k=function(b,c){a(c).data("colorpicker").newColor.css("backgroundColor","#"+M(b))},l=function(c){var d=c.charCode||c.keyCode||-1;if(d>b&&90>=d||32==d)return!1;var e=a(this).parent().parent();e.data("colorpicker").livePreview===!0&&m.apply(this)},m=function(b){var c,d=a(this).parent().parent();d.data("colorpicker")&&d.data("colorpicker").fields&&(d.data("colorpicker").color=c=this.parentNode.className.indexOf("_hex")>0?I(G(this.value)):this.parentNode.className.indexOf("_hsb")>0?E({h:parseInt(d.data("colorpicker").fields.eq(4).val(),10),s:parseInt(d.data("colorpicker").fields.eq(5).val(),10),b:parseInt(d.data("colorpicker").fields.eq(6).val(),10)}):J(F({r:parseInt(d.data("colorpicker").fields.eq(1).val(),10),g:parseInt(d.data("colorpicker").fields.eq(2).val(),10),b:parseInt(d.data("colorpicker").fields.eq(3).val(),10)})),b&&(e(c,d.get(0)),g(c,d.get(0)),f(c,d.get(0))),h(c,d.get(0)),i(c,d.get(0)),k(c,d.get(0)),d.data("colorpicker").onChange.apply(d,[c,M(c),K(c)]))},n=function(){var b=a(this).parent().parent(),c=b.data("colorpicker");c&&c.fields&&c.fields.parent().removeClass("colorpicker_focus")},o=function(){b=this.parentNode.className.indexOf("_hex")>0?70:65;var c=a(this).parent().parent().data("colorpicker");c&&c.fields&&c.fields.parent().removeClass("colorpicker_focus"),a(this).parent().addClass("colorpicker_focus")},p=function(b){var c=a(this).parent().find("input").focus(),d={el:a(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:b.pageY,field:c,val:parseInt(c.val(),10),preview:a(this).parent().parent().data("colorpicker").livePreview};a(document).bind("mouseup",d,r),a(document).bind("mousemove",d,q)},q=function(a){return a.data.field.val(Math.max(0,Math.min(a.data.max,parseInt(a.data.val+a.pageY-a.data.y,10)))),a.data.preview&&m.apply(a.data.field.get(0),[!0]),!1},r=function(b){return m.apply(b.data.field.get(0),[!0]),b.data.el.removeClass("colorpicker_slider").find("input").focus(),a(document).unbind("mouseup",r),a(document).unbind("mousemove",q),!1},s=function(){var b={cal:a(this).parent(),y:a(this).offset().top};b.preview=b.cal.data("colorpicker").livePreview,a(document).bind("mouseup",b,u),a(document).bind("mousemove",b,t)},t=function(a){return m.apply(a.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,a.pageY-a.data.y)))/150,10)).get(0),[a.data.preview]),!1},u=function(b){return e(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),g(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),a(document).unbind("mouseup",u),a(document).unbind("mousemove",t),!1},v=function(){var b={cal:a(this).parent(),pos:a(this).offset()};b.preview=b.cal.data("colorpicker").livePreview,a(document).bind("mouseup",b,x),a(document).bind("mousemove",b,w)},w=function(a){return m.apply(a.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,a.pageY-a.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,a.pageX-a.data.pos.left))/150,10)).get(0),[a.data.preview]),!1},x=function(b){return e(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),g(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),a(document).unbind("mouseup",x),a(document).unbind("mousemove",w),!1},y=function(){var b=a(this).parent(),c=b.data("colorpicker").color;b.data("colorpicker").origColor=c,j(c,b.get(0));a("#"+a(this).data("colorpickerId"));b.data("colorpicker").onSubmit(c,M(c),K(c),b)},z=function(){var b=a(this).parent();b.data("colorpicker").onNone(b),b.hide()},A=function(){var b=a("#"+a(this).data("colorpickerId"));b.data("colorpicker").onBeforeShow.apply(this,[b.get(0)]);var c=a(this).offset(),d=D(),e=c.top+this.offsetHeight,f=c.left;return e+176>d.t+d.h&&(e-=this.offsetHeight+176),f+356>d.l+d.w&&(f-=356),b.css({left:f+"px",top:e+"px"}),0!=b.data("colorpicker").onShow.apply(this,[b.get(0)])&&b.show(),a(document).bind("mousedown",{cal:b},B),!1},B=function(b){C(b.data.cal.get(0),b.target,b.data.cal.get(0))||(0!=b.data.cal.data("colorpicker").onHide.apply(this,[b.data.cal.get(0)])&&b.data.cal.hide(),a(document).unbind("mousedown",B))},C=function(a,b,c){if(a==b)return!0;if(a.contains)return a.contains(b);if(a.compareDocumentPosition)return!!(16&a.compareDocumentPosition(b));for(var d=b.parentNode;d&&d!=c;){if(d==a)return!0;d=d.parentNode}return!1},D=function(){var a="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(a?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(a?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(a?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(a?document.documentElement.clientHeight:document.body.clientHeight)}},E=function(a){return{h:Math.min(360,Math.max(0,a.h)),s:Math.min(100,Math.max(0,a.s)),b:Math.min(100,Math.max(0,a.b))}},F=function(a){return{r:Math.min(255,Math.max(0,a.r)),g:Math.min(255,Math.max(0,a.g)),b:Math.min(255,Math.max(0,a.b))}},G=function(a){var b=6-a.length;if(b>0){for(var c=[],d=0;b>d;d++)c.push("0");c.push(a),a=c.join("")}return a},H=function(a){var a=parseInt(a.indexOf("#")>-1?a.substring(1):a,16);return{r:a>>16,g:(65280&a)>>8,b:255&a}},I=function(a){return J(H(a))},J=function(a){var b={};return b.b=Math.max(Math.max(a.r,a.g),a.b),b.s=b.b<=0?0:Math.round(100*(b.b-Math.min(Math.min(a.r,a.g),a.b))/b.b),b.b=Math.round(b.b/255*100),b.h=a.r==a.g&&a.g==a.b?0:a.r>=a.g&&a.g>=a.b?60*(a.g-a.b)/(a.r-a.b):a.g>=a.r&&a.r>=a.b?60+60*(a.g-a.r)/(a.g-a.b):a.g>=a.b&&a.b>=a.r?120+60*(a.b-a.r)/(a.g-a.r):a.b>=a.g&&a.g>=a.r?180+60*(a.b-a.g)/(a.b-a.r):a.b>=a.r&&a.r>=a.g?240+60*(a.r-a.g)/(a.b-a.g):a.r>=a.b&&a.b>=a.g?300+60*(a.r-a.b)/(a.r-a.g):0,b.h=Math.round(b.h),b},K=function(a){var b={},c=Math.round(a.h),d=Math.round(255*a.s/100),e=Math.round(255*a.b/100);if(0==d)b.r=b.g=b.b=e;else{var f=e,g=(255-d)*e/255,h=(f-g)*(c%60)/60;360==c&&(c=0),60>c?(b.r=f,b.b=g,b.g=g+h):120>c?(b.g=f,b.b=g,b.r=f-h):180>c?(b.g=f,b.r=g,b.b=g+h):240>c?(b.b=f,b.r=g,b.g=f-h):300>c?(b.b=f,b.g=g,b.r=g+h):360>c?(b.r=f,b.g=g,b.b=f-h):(b.r=0,b.g=0,b.b=0)}return{r:Math.round(b.r),g:Math.round(b.g),b:Math.round(b.b)}},L=function(b){var c=[b.r.toString(16),b.g.toString(16),b.b.toString(16)];return a.each(c,function(a,b){1==b.length&&(c[a]="0"+b)}),c.join("")},M=function(a){return L(K(a))};return{init:function(b){if(b=a.extend({},d,b||{}),"string"==typeof b.color)b.color=I(b.color);else if(void 0!=b.color.r&&void 0!=b.color.g&&void 0!=b.color.b)b.color=J(b.color);else{if(void 0==b.color.h||void 0==b.color.s||void 0==b.color.b)return this;b.color=E(b.color)}return b.change=m,b.origColor=b.color,this.each(function(){if(!a(this).data("colorpickerId")){var d="collorpicker_"+parseInt(1e3*Math.random());a(this).data("colorpickerId",d);var q=a(c).attr("id",d);b.flat?q.appendTo(this).show():q.appendTo(document.body),b.fields=q.find("input").bind("keydown",l).bind("change",m).bind("blur",n).bind("focus",o),q.find("span").bind("mousedown",p),b.selector=q.find("div.colorpicker_color").bind("mousedown",v),b.selectorIndic=b.selector.find("div div"),b.hue=q.find("div.colorpicker_hue div"),q.find("div.colorpicker_hue").bind("mousedown",s),b.newColor=q.find("div.colorpicker_new_color"),b.currentColor=q.find("div.colorpicker_current_color"),q.data("colorpicker",b),q.find("input.colorpicker_none").bind("click",z),q.find("input.colorpicker_submit").bind("click",y),e(b.color,q.get(0)),f(b.color,q.get(0)),g(b.color,q.get(0)),i(b.color,q.get(0)),h(b.color,q.get(0)),j(b.color,q.get(0)),k(b.color,q.get(0)),b.flat?q.css({position:"relative",display:"block"}):a(this).bind(b.eventName,A)}})},showPicker:function(){return this.each(function(){a(this).data("colorpickerId")&&A.apply(this)})},hidePicker:function(){return this.each(function(){a(this).data("colorpickerId")&&a("#"+a(this).data("colorpickerId")).hide()})},setColor:function(b){if("string"==typeof b)b=I(b);else if(void 0!=b.r&&void 0!=b.g&&void 0!=b.b)b=J(b);else{if(void 0==b.h||void 0==b.s||void 0==b.b)return this;b=E(b)}return this.each(function(){if(a(this).data("colorpickerId")){var c=a("#"+a(this).data("colorpickerId"));c.data("colorpicker").color=b,c.data("colorpicker").origColor=b,e(b,c.get(0)),f(b,c.get(0)),g(b,c.get(0)),i(b,c.get(0)),h(b,c.get(0)),j(b,c.get(0)),k(b,c.get(0))}})}}}();a.fn.extend({ColorPicker:b.init,ColorPickerHide:b.hide,ColorPickerShow:b.show,ColorPickerSetColor:b.setColor})}(jQuery);
//# sourceMappingURL=/concrete/js/jquery.colorpicker.js.map