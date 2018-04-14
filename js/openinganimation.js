function disablelock(){
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowY = "scroll";
    document.body.style.height = "100%";
    document.documentElement.style.height = "100%";
}

setTimeout(function() {
    document.body.style.height = "auto";
    document.documentElement.style.height = "auto";
    $('#open').fadeOut('fast');
    $('#container').fadeOut('fast');
}, 6250);

setTimeout(function() {
    document.getElementById('container').style = "z-index:0;";
}, 6250);


setTimeout(function() {
    $('#locked').fadeOut('fast');
}, 4000);