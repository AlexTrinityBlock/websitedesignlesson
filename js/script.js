//初始化WoW
new WOW().init();

//載入時
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {        
        document.querySelector("#loader").classList.add("loader-fadeout");        
        document.querySelector("body").style.visibility = "visible";
    }
};