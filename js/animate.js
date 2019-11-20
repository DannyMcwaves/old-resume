/*! animation v2.1.4 | (c) 2015 mcLIBS Foundation, Inc. | mclibs.com/license */
/*
this library is going to be used with the open source and the popular jquery libaray
to be able to create my own custom animation and to learn more and study more about this things.

animation.js V1.0.0
(c) Danny Mcwaves
open-source-code
free licensed.
-- okay, so enough of this formalities and then go on with the real code that ou can use.
*/

var $ = window.$;
var Animation = (function (Animation) {
    "use strict";
    /* 
    this thing is done by calling the animation and passing the id of the element on which you want
    to pass the animation. Else if you pass a tagname, then you might be passing a new.
    */
    
    function slideOut(elementId, time) {
        var slideOut_width = $(elementId).outerWidth(true);
        $(elementId).attr("data", slideOut_width);
        $(elementId).css({
            overflow: "hidden",
            textOverflow: "clip"
        });
        $(elementId).animate({
            width: 0,
            opacity: 0
        }, time, function () {
            $(this).hide(500);
        });
    }
    
    function slideIn(elementId, time) {

        $(elementId).css({
            overflow: "auto",
            display: "block"
        });
        $(elementId).animate({
            width: $(elementId).attr("data"),
            opacity: 1
        }, time, function () {
            $(elementId).removeAttr("data");
        });
    }
    
    Animation.slideOut = slideOut;
    Animation.slideIn = slideIn;
    
    return Animation;
}(Animation || {}));

