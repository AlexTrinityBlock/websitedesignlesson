//初始化WoW
new WOW().init();

//載入圖標
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        // document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader-c").style.visibility = "visible";
    } else {        
        // document.querySelector("body").style.visibility = "visible";
        document.querySelector("#loader-c").style.display = "none";
        document.querySelector("#navbar-intro-background").style.width="100%";
    }
};

// 當螢幕調整大小
window.onresize = function (){
    document.querySelector("#navbar").style.width="100%";
}

document.addEventListener('scroll', function(e) {
    document.querySelector("#navbar").style.width="100%";
  });