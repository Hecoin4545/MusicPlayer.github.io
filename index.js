document.querySelector('#guitar-1').addEventListener('click', function (key) {
    var audio = new Audio('g.mp3');
    audio.play();
})
document.querySelector('#guitar-2').addEventListener('click', function () {
    var audio1 = new Audio('u.mp3');
    audio1.play();
})
document.querySelector('#guitar-3').addEventListener('click', function () {
    var audio2 = new Audio('i.mp3');
    audio2.play();
})
document.querySelector('#guitar-4').addEventListener('click', function () {
    var audio3 = new Audio('t.mp3');
    audio3.play();
})
document.querySelector('#guitar-5').addEventListener('click', function () {
    var audio4 = new Audio('a.mp3');
    audio4.play();
})
document.querySelector('#guitar-6').addEventListener('click', function () {
    var audio5 = new Audio('r.mp3');
    audio5.play();
})
window.addEventListener('keydown', checkkeypress, false);
function checkkeypress(key) {
    if (key.keyCode == '71') {
        var audio = new Audio('g.mp3');
        audio.play();
    }
}
window.addEventListener('keydown', checkkeypress2, false);
function checkkeypress2(key) {
    if (key.keyCode == '85') {
        var audio = new Audio('u.mp3');
        audio.play();
    }
}
window.addEventListener('keydown', checkkeypress3, false);
function checkkeypress3(key) {
    if (key.keyCode == '73') {
        var audio = new Audio('i.mp3');
        audio.play();
    }
}
window.addEventListener('keydown', checkkeypress4, false);
function checkkeypress4(key) {
    if (key.keyCode == '84') {
        var audio = new Audio('t.mp3');
        audio.play();
    }
}
window.addEventListener('keydown', checkkeypress5, false);
function checkkeypress5(key) {
    if (key.keyCode == '65') {
        var audio = new Audio('a.mp3');
        audio.play();
    }
}
window.addEventListener('keydown', checkkeypress6, false);
function checkkeypress6(key) {
    if (key.keyCode == '82') {
        var audio = new Audio('r.mp3');
        audio.play();
    }
}