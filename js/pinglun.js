var tag = document.getElementsByClassName("tag");
var info = document.getElementsByClassName("tag-info-pane");
var btn_add = document.getElementsByClassName("btn-add");
function tagomo(e) {
    for (var i = tag.length; i--;) {
        if (tag[i] == e) {
            info[i].style.visibility = "visible";
            info[i].style.opacity = "1";
            tag[i].children[0].style.color = "#00a1d6";
        }
    }
}
function tou(e) {
    for (var i = tag.length; i--;) {
        if (tag[i] == e) {
            var cy = info[i].offsetTop;//网页到div高度距离
            var cx = info[i].offsetLeft;//网页到div宽度距离
            var fy = info[i].clientHeight + cy; //网页头部到div距离
            var fx = info[i].clientWidth + cx; //网页左部到div距离  

            var x = event.clientX;//鼠标在网页的位置
            var y = event.clientY;//
            console.log(info[i].offsetLeft)
            if (x < cx || x > fx || y < cy || y > fy) {
                info[i].style.visibility = "hidden";
                tag[i].children[0].style.color = "#9ba3ab";

                info[i].style.opacity = "0";
            }
        }
    }
}
function tagou(e) {
    for (var i = tag.length; i--;) {
        if (tag[i] == e) {
            tag[i].children[0].style.color = "#9ba3ab";
            info[i].style.visibility = "hidden";
            info[i].style.opacity = "0";
        }
    }
}
btn_add[0].onmousemove = function (){
    btn_add[0].children[0].style.backgroundColor = "#00a1d6";
    btn_add[0].children[1].style.backgroundColor = "#00a1d6";
}
btn_add[0].onmouseout = function (){
    btn_add[0].children[0].style.backgroundColor = "#9ba3ab";
    btn_add[0].children[1].style.backgroundColor = "#9ba3ab";
}


var tab = document.getElementsByClassName("rank-tab");
var elecrank = document.getElementsByClassName("elecrank-content");
tab[0].onclick = function (){
    tab[0].classList.add("active");
    tab[1].classList.remove("active");
    elecrank[0].children[0].style.display = "block";
    elecrank[0].children[1].style.display = "none";
    elecrank[0].style.height = "358px";
    
}
tab[1].onclick = function (){
    tab[1].classList.add("active");
    tab[0].classList.remove("active");
    elecrank[0].children[1].style.display = "block";
    elecrank[0].children[0].style.display = "none";
    elecrank[0].style.height = "200px";
}
var lazy = document.getElementsByClassName("lazy-img");
var mask = document.getElementsByClassName("pl-mask");
var live = document.getElementsByClassName("pl-live");

lazy[0].onmousemove = function (){
    mask[0].style.opacity = "1";
    mask[0].style.visibility = "visible";
}
mask[0].onmousemove = function (){
    mask[0].style.opacity = "1";
    mask[0].style.visibility = "visible";
}
mask[0].onmouseout = function (){
    mask[0].style.opacity = "0";
    mask[0].style.visibility = "hidden";
}
lazy[0].onmouseout = function (){
    mask[0].style.opacity = "0";
    mask[0].style.visibility = "hidden";
}
