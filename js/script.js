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
        let tempElement = document.querySelector('#navbar-intro-background').innerHTML;
        document.querySelector("#navbar-intro-background").innerHTML=""
        document.querySelector("#navbar-intro-background").innerHTML=tempElement
    }
};

// 當螢幕調整大小
window.onresize = function (){
    let tempElement = document.querySelector('#navbar-intro-background').innerHTML;
    document.querySelector("#navbar-intro-background").innerHTML=""
    document.querySelector("#navbar-intro-background").innerHTML=tempElement
}