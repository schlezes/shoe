/* global
document
window
*/
/**
 *
 * add event listeners to click
 *
 * click anywhere
 * if (event target tag === "IMG")
 * render big size
 * else
 * return
 *
 * this finally works
 */
var click = 0;
var getId = function getId(id) { return document.getElementById(id); };
function expand(e) {
    "use strict";
    var d = e.target.id;
    var dd = getId(d);
    dd.style.borderRadius = 10 + "px";
    dd.style.height = dd.clientHeight * 1.25 + "px";
    dd.style.width = dd.clientWidth * 1.25 + "px";
    dd.style.transition = 'all 1s ease-in';
}
;
function bigSize(e) {
    "use strict";
    var y = e.target.src;
    // console.log(e.target.height, e.target.width);
    var h = e.target.height;
    var w = e.target.width;
    var enlarge = document.getElementById('jumbotron');
    enlarge.innerHTML = '';
    var getImg = document.createElement('img');
    getImg.style.height = 1.5 * h + "px";
    getImg.style.width = 1.5 * w + "px";
    getImg.src = y;
    getImg.id = e.target.id;
    getImg.style.transition = 'all 2s ease-in';
    enlarge.appendChild(getImg);
    expand(e);
    click = getImg.id;
}
;
function over() {
    "use strict";
    document.location.reload();
}
function action(e) {
    var getEl = e.target.tagName;
    if (getEl !== 'IMG') {
        return;
    }
    var m = e.target.id;
    if (m === null || m === undefined) {
        bigSize(e);
    }
    else if (m === click) {
        expand(e);
    }
    else {
        bigSize(e);
    }
}
function listeners() {
    window.addEventListener("click", action, false);
    getId("home").addEventListener("click", over, false);
}
window.onload = listeners;
