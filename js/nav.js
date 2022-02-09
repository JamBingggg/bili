//导航条
var frame = document.getElementsByClassName("t-frame");
var li = document.getElementsByClassName("nav-li");
function om(e) {
    for (var i = li.length; i--;) {
        if (li[i] == e) {
            frame[i].style.visibility = "visible";
            frame[i].style.top = "42px";
            frame[i].style.opacity = "1";
        }
    }
}
function fou(e) {
    for (var i = li.length; i--;) {
        if (li[i] == e) {
            var cy = frame[i].offsetTop;//网页到div高度距离
            var cx = frame[i].offsetLeft;//网页到div宽度距离
            var fy = frame[i].clientHeight + cy; //网页头部到div距离
            var fx = frame[i].clientWidth + cx; //网页左部到div距离  

            var x = event.clientX;//鼠标在网页的位置
            var y = event.clientY;//
            console.log(frame[i].offsetLeft)
            if (x < cx || x > fx || y < cy || y > fy) {
                frame[i].style.visibility = "hidden";
                frame[i].style.top = "62px";
                frame[i].style.opacity = "0";
            }
        }
    }
}
function aou(e) {
    for (var i = li.length; i--;) {
        if (li[i] == e) {
            frame[i].style.visibility = "hidden";
            frame[i].style.top = "62px";
            frame[i].style.opacity = "0";
        }
    }
}


//游戏中心淡出框右侧
var r_li = document.getElementsByClassName("right-li");
var r_img = document.getElementById("right-img");
for (let index = 0; index < r_li.length; index++) {
    r_li[index].onmousemove = function () {
        r_img.style.display = "block";
        r_img.src = "img/r" + (index + 1) + ".png";
    }
    r_li[index].onmouseout = function () {
        r_img.style.display = "none";
        r_img.src = " ";

    }
}
//漫画淡出框右侧

var m_li = document.getElementsByClassName("manhua-li");
var m_img = document.getElementById("manhua-img");
for (let index = 0; index < m_li.length; index++) {
    m_li[index].onmousemove = function () {
        m_img.style.display = "block";
        m_img.src = "img/m" + (index + 1) + ".jpg";
    }
    m_li[index].onmouseout = function () {
        m_img.style.display = "none";
        m_img.src = " ";

    }
}


 
