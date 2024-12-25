// fix stupid bug where rotating an iOS device causes the page to zoom in

function rotateWithNoScale() {
    var viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
        var content = viewport.getAttribute("content");
        viewport.setAttribute("content", content + ", maximum-scale=1.0");
        setTimeout(function () { viewport.setAttribute("content", content); }, 90);
    }
}

if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && window.addEventListener && document.querySelector) {
    window.addEventListener('orientationchange', rotateWithNoScale, false);
}
