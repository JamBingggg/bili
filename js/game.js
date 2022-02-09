//轮播图
function banner(select) {
    //图片
    var show_length = 7;
    var parent = document.getElementById(select) || document.querySelector(select);
    var show = document.createElement("div");
    var show_ul = document.createElement("ul");
    show.style = "position:relative;overflow:hidden;z-index: 0; ";
    show_ul.classList.add("show-ul");
    //按钮
    var show_btn = document.createElement("div");
    show_btn.style = "z-index: 999";
    show_btn.classList.add("ba-btn");

    this.setData = function () {
        var show_li_str = "";
        var show_btn_str = "";
        for (var i = 0; i < show_length; i++) {
            if (i < 7) {
                if (i == 0) {
                    show_li_str += '<li class="show-li" style="opacity:1; background-image: url(img/b' + (i + 1) + '.jpg)"></li>';
                    show_btn_str += '<p class="demo" id="demo' + (i + 1) + '" name="ba-btn" onclick="btn(this)" data-btn="' + i + ' "style = "transform: scale(1.2)" ><canvas class="pie_timer" width="20" height="20"></canvas></p > '
                } else {
                    show_li_str += '<li class="show-li" style="background-image: url(img/b' + (i + 1) + '.jpg)"></li>'
                    show_btn_str += '<p class="demo" id="demo' + (i + 1) + '" name="ba-btn" onclick="btn(this)" data-btn="' + i + '"><canvas class="pie_timer" width="20" height="20"></canvas></p > '
                }
            }
        }
        show_ul.innerHTML = show_li_str;
        show_btn.innerHTML = show_btn_str;
        parent.appendChild(show_ul);
        parent.appendChild(show_btn);
    }
}
//索引值
var index = 0;
//绑定轮播图
var show_img = document.getElementsByClassName("show-li")
var can = document.getElementsByClassName("pie_timer");

//重置所有图片淡出
function danchu() {
    var btn = document.getElementsByName("ba-btn");

    for (var i = 0; i < btn.length; i++) {
        show_img[i].style.opacity = "0";
    }
}
//重置所有按钮
function shan() {
    for (var i = 0; i < can.length; i++) {
        can[i].style.visibility = "hidden";
    }
}
//重置所有按钮大小
function daxiao() {
    var btn = document.getElementsByName("ba-btn");

    for (var i = 0; i < btn.length; i++) {
        btn[i].style.transform = "scale(1.03)"
    }
}
//按钮组
function btn(e) {
    var btn = document.getElementsByName("ba-btn");

    danchu();
    for (var i = btn.length; i--;) {
        if (btn[i] == e) {
            // alert(i);
            show_img[i].style.opacity = "1";//淡入
            shan();
            daxiao();
            can[i].style.visibility = "visible";
            btn[i].style.transform = "scale(1.2)";//放大
            $(".ba-btn p").pietimer('pause');
            $(".ba-btn p:eq(" + i + ")").pietimer('start');
            index = i;
            // console.log(index)
            break;
        }
    }
}
//下一页
var next = document.getElementById("next");
next.onclick = function () {
    var btn = document.getElementsByName("ba-btn");


    if (index == 6) {
        index = 0;
    } else {
        index++;
    }
    shan();
    danchu();
    can[index].style.visibility = "visible";

    show_img[index].style.opacity = "1";//淡入
    daxiao();
    btn[index].style.transform = "scale(1.2)";//放大
    $(".ba-btn p:eq(" + (index - 1) + ")").pietimer('pause');

    $(".ba-btn p:eq(" + index + ")").pietimer('start');

    // console.log(show_img[index]);

}
//上一页
var prev = document.getElementById("prev");
prev.onclick = function () {
    var btn = document.getElementsByName("ba-btn");

    $(".ba-btn p:eq(" + index + ")").pietimer('pause');
    if (index == 0) {
        index = 6;
    } else {
        index--;
    }
    shan();
    danchu();
    can[index].style.visibility = "visible";

    show_img[index].style.opacity = "1";//淡入
    daxiao();
    btn[index].style.transform = "scale(1.2)";//放大

    $(".ba-btn p:eq(" + index + ")").pietimer('start');

    // console.log(show_img[index]);
}


$(function () {
    var btn = document.getElementsByName("ba-btn");

    //所有class为demo按钮的扇形倒计时设置
    var pie = $('.demo').pietimer({
        seconds: 5,
        color: 'rgba(45, 189, 241,1)',
        height: 20,
        width: 20
    }, function () {//倒计时后事件
        if (index == 6) {
            index = 0;
        } else {
            index++;
        }
        shan();
        danchu();

        $(".ba-btn p:eq(" + index + ")").pietimer('start');
        can[index].style.visibility = "visible";

        show_img[index].style.opacity = "1"//淡入
        daxiao();
        btn[index].style.transform = "scale(1.2)";//放大
        return false;

    });
    //网页加载就使用按钮倒计时
    $(".ba-btn p:eq(" + 0 + ")").pietimer('start');


    return false;


});


//main-menu选择
var menu_li = document.getElementsByClassName("menu-li");
var menu_a = document.getElementsByClassName("menu-a");

for (let index = 0; index < menu_li.length; index++) {
    menu_li[index].onmousemove = function () {
        menu_li[index].style.background = "url(img/mainmenu-a.jpg) left top no-repeat / 100% auto";
        if (index == 0) {
            menu_a[index].style.background = "url(img/mainmenu-click.png) -1px -110px no-repeat"
        } else if (index == 1) {
            menu_a[index].style.background = "url(img/mainmenu-click.png) -201px -110px no-repeat"
        } else {
            menu_a[index].style.background = "url(img/mainmenu-click.png) -601px -110px no-repeat"
        }
    }
    menu_li[index].onmouseout = function () {
        menu_li[index].style.background = "";
        menu_li[0].style.background = "url(img/mainmenu-a.jpg) left top no-repeat / 100% auto";
        if (index == 0) {
            menu_a[index].style.background = "url(img/mainmenu-click.png) -1px 0px no-repeat"
        } else if (index == 1) {
            menu_a[index].style.background = "url(img/mainmenu-click.png) -201px 0px no-repeat"
        } else {
            menu_a[index].style.background = "url(img/mainmenu-click.png) -601px 0px no-repeat"
        }
    }
}
//main轮播图
var main_ul = document.createElement("ul");
var btn_ul = document.createElement("ul");
var btn_li = document.createElement("li");
var main_text_ul = document.createElement("ul");
var mainly_li_lenght = 17;

function banner2(select) {
    var parent = document.getElementById(select) || document.querySelector(select);
    main_text_ul.classList.add("banner-text");
    this.setData = function () {
        var text_str = "";
        for (var i = 0; i < mainly_li_lenght; i++) {
            if (i < 17) {
                if (i == 0) {
                    text_str += '<li class="text-page" style="opacity: 1; display:inherit;"><h3>' + main_text_json[i].title + '</h3><p>' + main_text_json[i].main + '</p><a href="#">查看详情</a></li>';

                } else {
                    text_str += '<li class="text-page" style="opacity: 0; display:none;"><h3>' + main_text_json[i].title + '</h3><p>' + main_text_json[i].main + '</p><a href="#">查看详情</a></li>';

                }
            }
        }
        main_text_ul.innerHTML = text_str;
        // console.log(main_text_ul)
        parent.appendChild(main_text_ul);

    }
}
function banner1(select) {
    var parent = document.getElementById(select) || document.querySelector(select);
    //小轮播图
    main_ul.classList.add("mainly_ul");
    main_ul.style = "left: 0";

    btn_ul.classList.add("mainly-banner-btn");
    btn_ul.style = "z-index:999";

    btn_li.classList.add("mainly-btn");
    btn_li.onclick = mainly_btn();

    this.setData = function () {
        var mainly_li_str = "";
        for (var i = 0; i < mainly_li_lenght; i++) {
            if (i < 17) {
                var mainly_banner_btn = document.createElement("li");
                mainly_li_str += '<li class="mainly-li"><img src="img/mb' + (i + 1) + '.jpg" alt=""></li>';
                mainly_banner_btn.classList.add("mainly-btn");
                mainly_banner_btn.innerHTML = i;
                mainly_banner_btn.setAttribute("onclick", "mainly_btn(this)");
                mainly_banner_btn.style.background = "url(img/icon.png) -20px -40px no-repeat";
                btn_ul.appendChild(mainly_banner_btn);
            }
        }

        main_ul.innerHTML = mainly_li_str;
        parent.appendChild(main_ul);
        parent.appendChild(btn_ul);
    }
}
var mainly_ul = document.getElementById("banner-show");
var mainly_li = document.getElementsByClassName("mainly-li");
var mainlybtn = document.getElementsByClassName("mainly-btn");
var maintext = document.getElementsByClassName("text-page");
var mainly_index = 0;
var time = null;
function mainly_ban() {
    for (var i = 0; i < mainlybtn.length; i++) {
        btn_ul.children[i].style.background = "url(img/icon.png) -20px -40px no-repeat";//重置所有按钮
        maintext[i].style.opacity = "0";//重置文字
        setTimeout('maintext[' + i + '].style.display = "none";', 100)//等消失后在取消显示

    }
    if (mainly_index == 17) {
        mainly_index = 0;
        setTimeout('maintext[' + mainly_index + '].style.display = "inline";', 200)//然后将对应显示
        main_ul.style.left = -700 * mainly_index + "px";//显示对应按钮
        setTimeout('maintext[' + mainly_index + '].style.opacity = "1";', 300)//显示对应文字

    } else {
        setTimeout('maintext[' + mainly_index + '].style.display = "inline";', 200);
        main_ul.style.left = -700 * mainly_index + "px";
        setTimeout('maintext[' + mainly_index + '].style.opacity = "1";', 300)

    }
    btn_ul.children[mainly_index].style.background = "url(img/icon.png) 0px -40px no-repeat";//显示对应图片

    mainly_index++;
    time = setTimeout(mainly_ban, 3000);
}

//main轮播图点击按钮
function mainly_btn(e) {
    clearTimeout(time);//清除定时器


    for (var i = 0; i < mainlybtn.length; i++) {
        mainlybtn[i].style.background = "url(img/icon.png) -20px -40px no-repeat";
        maintext[i].style.opacity = "0";
        setTimeout('maintext[' + i + '].style.display = "none";', 200)
    }
    for (var i = mainlybtn.length; i--;) {
        if (mainlybtn[i] == e) {
            setTimeout('maintext[' + mainly_index + '].style.display = "inline";', 300);
            mainlybtn[i].style.background = "url(img/icon.png) 0px -40px no-repeat";
            main_ul.style.left = -700 * i + "px";

            setTimeout('maintext[' + i + '].style.opacity = "1";', 300)

            mainly_index = i;

            break;
        }
    }
    time = setTimeout(mainly_ban);//重新使用定时器


}

//游戏列表
function gamelist1(select) {
    var parent = document.getElementById(select) || document.querySelector(select);

    this.setData = function () {
        var game_li_str = "";
        for (var i = 0; i < game_list1_json.length; i++) {
            game_li_str += '<li><a href="#">' + game_list1_json[i].title + '</a>' + game_list1_json[i].hot + '</li>';
            parent.innerHTML = '<p class="list-title">新游预约</p>' + game_li_str;
        }
    }
}
function gamelist2(select) {
    var parent = document.getElementById(select) || document.querySelector(select);

    this.setData = function () {
        var game_li_str = "";
        for (var i = 0; i < game_list2_json.length; i++) {
            game_li_str += '<li><a href="#">' + game_list2_json[i].title + '</a>' + game_list2_json[i].hot + '</li>';
            parent.innerHTML = '<p class="list-title">热门游戏</p>' + game_li_str;
        }
    }
}
function gamelist3(select) {
    var parent = document.getElementById(select) || document.querySelector(select);

    this.setData = function () {
        var game_li_str = "";
        for (var i = 0; i < game_list3_json.length; i++) {
            game_li_str += '<li><a href="#">' + game_list3_json[i].title + '</a>' + game_list3_json[i].hot + '</li>';
            parent.innerHTML = '<p class="list-title">独立游戏</p>' + game_li_str;
        }
    }
}
function gamelist4(select) {
    var parent = document.getElementById(select) || document.querySelector(select);

    this.setData = function () {
        var game_li_str = "";
        for (var i = 0; i < game_list4_json.length; i++) {
            game_li_str += '<li><a href="#">' + game_list4_json[i].title + '</a>' + game_list4_json[i].hot + '</li>';
            parent.innerHTML = game_li_str;
        }
    }
}



// mainly_ban();
