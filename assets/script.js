collection = document.getElementsByClassName('animScaleFadeIn');

for (var i = 0; i < collection.length; i++) {
    (function(i) {
        collection[i].style.opacity = "0%";
        collection[i].style.transform = "scale(0.5)";
        setTimeout(function() {
            collection[i].style.transitionDuration = "0.25s";
            collection[i].style.transitionTimingFunction = "ease-out";
            collection[i].style.opacity = 1;
            collection[i].style.transform = "scale(1)";
        }, i * 50);
    })(i);
}