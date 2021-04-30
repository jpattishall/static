// file1.js
var i;
var els = document.getElementsByClassName('clickable');
var len = els.length - 1;

for(i=0; i < len; i++) {
    els[i].addEventListener('click', function() {
        els[i].setAttribute('style', 'border: 3px solid red');
    })
}