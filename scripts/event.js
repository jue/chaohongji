var MobileTouch = function(obj,type,func) {
    var init = {x:5,y:5,sx:0,sy:0,ex:0,ey:0};
    var sTime = 0, eTime = 0;
    type = type.toLowerCase();

    obj.addEventListener("touchstart",function(){
        sTime = new Date().getTime();
        init.sx = event.targetTouches[0].pageX;
        init.sy = event.targetTouches[0].pageY;
        init.ex = init.sx;
        init.ey = init.sy;
        if(type.indexOf("start") != -1) func();
    }, false);

    obj.addEventListener("touchmove",function() {
        event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        init.ex = event.targetTouches[0].pageX;
        init.ey = event.targetTouches[0].pageY;
        if(type.indexOf("move")!=-1) func();
    }, false);

    obj.addEventListener("touchend",function() {
        var changeX = init.sx - init.ex;
        var changeY = init.sy - init.ey;
        if(Math.abs(changeX)>Math.abs(changeY)&&Math.abs(changeY)>init.y) {
            //左右事件
            if(changeX > 0) {
                if(type.indexOf("left")!=-1) func();
				
            }else{
                if(type.indexOf("right")!=-1) {func()};
            }
        }
        else if(Math.abs(changeY)>Math.abs(changeX)&&Math.abs(changeX)>init.x){
            //上下事件
            if(changeY > 0) {
                if(type.indexOf("top")!=-1) func();
            }else{
                if(type.indexOf("down")!=-1) func();
            }
        }
        else if(Math.abs(changeX)<init.x && Math.abs(changeY)<init.y){
            eTime = new Date().getTime();
            //点击事件，//长按 //当点击处理
            if((eTime - sTime) > 300) {
                if(type.indexOf("long")!=-1) func(); 
            }
            else {
                if(type.indexOf("click")!=-1) func(); 
            }
        }
        if(type.indexOf("end")!=-1) func();
    }, false);
};

//$(function(){
//	//MobileTouch($(document)[0],'swipemove',movecallback);
//	//MobileTouch($('.test')[0],'swiperight',rightcallback);
//	//MobileTouch($('.test')[0],'swipeleft',leftcallback);
//	//MobileTouch($('.test')[0],'swiperight',rightcallback);
//	//MobileTouch($('.test')[0],'swipetop',topcallback);
//	//MobileTouch($('.test')[0],'swipedown',downcallback);
//	//MobileTouch($('.test')[0],'clicklong',longcallback);
//	//MobileTouch($('.test')[0],'click',clickcallback);
//})
//
//function movecallback(){
//	$('body').append(1)
//}
//
//function leftcallback(){
//	alert('左滑动了');
//}
//
//function rightcallback(){
//	alert('右滑动了');
//}
//
//function topcallback(){
//	alert('上滑动了');
//}
//
//function downcallback(){
//	alert('下滑动了');
//}
//
//function longcallback(){
//	alert('长按了');
//}
//
//function clickcallback(){
//	alert('点击了');
//}