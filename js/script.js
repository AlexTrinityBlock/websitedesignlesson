//初始化WoW
new WOW().init();

//載入圖標
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("#loader-c").style.visibility = "visible";
    } else {        
        document.querySelector("#loader-c").style.display = "none";
        $('#navbar-intro-background').backstretch("./source/intro.jpeg");
    }
};

// 當螢幕調整大小
window.onresize = function (){
    document.querySelector("#navbar").style.width="100%";
}

document.addEventListener('scroll', function(e) {
    document.querySelector("#navbar").style.width="100%";
  });