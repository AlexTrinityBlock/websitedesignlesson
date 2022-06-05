let Hsin_I_Chang = {
    name: "張心怡",
    img_path: "./source/teachers/profhchang.png",
    degree: "澳洲雪梨大學 藥學 博士",
    lab: "組織工程與藥物傳遞應用研究室"
}

let Ruey_Shyang_Chen={
    name: "陳瑞祥",
    img_path: "./source/teachers/profrechen.png",
    degree: "美國德州農工大學 植物病理與微生物學 博士",
    lab: "植物病理與微生物研究室"
}

let Cheng_Nan_Chen={
    name: "陳政男",
    img_path: "./source/teachers/profcnchen.png",
    degree: "國防醫學院 生命科學研究所 博士",
    lab: "生醫工程實驗室"
}

function setTracherIntroInfo(data) {
    let imageContainerObj = document.getElementById("teacher-intro-img")
    let textObj = document.getElementById("teacher-intro-text")
    let imgObj = document.createElement("img")
    let h2Obj = document.createElement("h2")

    // 清空舊內容
    imageContainerObj.innerHTML="";
    textObj.innerHTML="";
    // 設置圖片
    imgObj.src = data.img_path
    imgObj.classList.add("wow")
    imgObj.classList.add("fadeInLeft")
    imageContainerObj.appendChild(imgObj)
    // 設置文字
    h2Obj.innerHTML = data.name;
    textObj.appendChild(h2Obj);
    let spanObj = document.createElement("span")
    spanObj.innerHTML = "最高學歷:<br/>" + data.degree + "<br/>";
    textObj.appendChild(spanObj);
    spanObj = document.createElement("span")
    spanObj.innerHTML = "研究室:<br/>" + data.lab + "<br/>";
    textObj.appendChild(spanObj);
}

window.onload = function () {
    setTracherIntroInfo(Hsin_I_Chang)
    // 張心怡
    document.getElementById("Hsin_I_Chang").addEventListener("mouseover", function (event) {
        setTracherIntroInfo(Hsin_I_Chang)
    }, false);
    // 陳瑞祥  
    document.getElementById("Ruey_Shyang_Chen").addEventListener("mouseover", function (event) {
        setTracherIntroInfo(Ruey_Shyang_Chen)
    }, false);
    // 陳政男
    document.getElementById("Cheng_Nan_Chen").addEventListener("mouseover", function (event) {
        setTracherIntroInfo(Cheng_Nan_Chen)
    }, false);
}