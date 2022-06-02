//初始化WoW
new WOW().init();

//載入圖標
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("#loader-c").style.visibility = "visible";
    } else {        
        document.querySelector("#loader-c").style.display = "none";
    }
};