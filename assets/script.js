collection = document.getElementsByClassName('animScaleFadeIn');

for (var i = 0; i < collection.length; i++) {
    (function(i) {
        setTimeout(function() {
        collection[i].style.opacity = 1;
        collection[i].style.transform = "scale(1)";
        }, i * 50);
    })(i);
}