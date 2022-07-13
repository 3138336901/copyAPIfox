//
let headerFixed = document.querySelector('.theHeader_onTop');
function changeHeader() {
    let allContent = document.getElementsByClassName("topBody")[0]
    let domToTop = allContent.getBoundingClientRect().top;
    if (domToTop != 120) {
        headerFixed.setAttribute('class','theHeader');
    } else {
        headerFixed.setAttribute('class','theHeader_onTop');
    }
}
window.onscroll = () => {
    changeHeader();
}
// 实现伸缩下拉框
function selection_drop() {
    let dropDown = document.querySelector('.selection');
    dropDown.classList.toggle("selection_hover");
}
let activeDrop = document.getElementById('download');

activeDrop.onmouseenter = function () {
    selection_drop();
}
activeDrop.onmouseleave = function () {
    selection_drop();
}
let downBox = document.getElementById('downBox');
downBox.onmouseleave = function () {
    selection_drop();
}
downBox.onmouseleave = function () {
    selection_drop();
}
// 点击按钮后的页面跳转
let dropWeb = document.getElementById('webEdition');
dropWeb.onclick = function () {
    window.open('https://www.apifox.cn/web/user/login');
}
// 轮播图按钮的点击事件
let num = 0;
let index = 0;
let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');
let ul = document.querySelector('.imgUl');
let focus = document.querySelector('.playBox');
let focusWidth = focus.offsetWidth;
let downIndex = 0;
// 向ol里的li添加事件监听
let ol = document.getElementById('downImg');
for(let i=0;i<ul.children.length;i++) {
    let li = document.createElement('li');
    li.setAttribute('index', i);
    ol.appendChild(li);
    switch (i) {
        case 0:
            li.innerHTML = '<img src="../img/dark-apifox-api-case-1.png" alt="">';break;
        case 1:
            li.innerHTML = '<img src="../img/dark-apifox-api-case-2.png" alt="">';break;
        case 2:
            li.innerHTML = '<img src="../img/dark-apifox-api-definition-1.png" alt="">';break;
        case 3:
            li.innerHTML = '<img src="../img/dark-apifox-schema-1.png" alt="">';break;
        case 4:
            li.innerHTML = '<img src="../img/dark-apifox-api-definition-2.png" alt="">';break;
        case 5:
            li.innerHTML = '<img src="../img/dark-apifox-test-case-1.png" alt="">';break;
        case 6:
            li.innerHTML = '<img src="../img/dark-apifox-test-case-2.png" alt="">';break;
        case 7:
            li.innerHTML = '<img src="../img/dark-apifox-test-case-3.png" alt="">';break;
        case 8:
            li.innerHTML = '<img src="../img/dark-apifox-mock-1.png" alt="">';break;
        case 9:
            li.innerHTML = '<img src="../img/dark-apifox-mock-2.png" alt="">';break;
        case 10:
            li.innerHTML = '<img src="../img/dark-apifox-mock-3.png" alt="">';break;
        case 11:
            li.innerHTML = '<img src="../img/dark-apifox-codegen-1.png" alt="">';break;
        case 12:
            li.innerHTML = '<img src="../img/dark-apifox-codegen-2.png" alt="">';break;
        case 13:
            li.innerHTML = '<img src="../img/dark-apifox-setting-import-1.png" alt="">';break;
        case 14:
            li.innerHTML = '<img src="../img/light-apifox-theme-1.png" alt="">';break;
    }
    li.addEventListener('click',
        function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            index = this.getAttribute('index');
            num = index;
            downIndex = index;
            this.className = 'current'
            animate(ul, -focusWidth*index);
            animate(ol, -index*63);
        })
}
ol.children[0].className = 'current';
let first = ul.children[0].cloneNode(true);
ul.appendChild(first);
// 左右按钮触发事件
arrow_right.addEventListener('click', function () {
    if (num == ul.children.length-1) {
        ul.style.left = '0';
        num = 0;
    }
    num++;
    downIndex++;
    if(downIndex == ol.children.length) {
        downIndex = 0;
    }
    downMove();
});
arrow_left.addEventListener('click', function () {
    if (num == 0) {
        num = ul.children.length-1;
        ul.style.left = -num * focusWidth + 'px';
    }
    num--;
    downIndex--;
    if (downIndex<0) {
        downIndex = ol.children.length-1;
    }
    downMove();
});
function downMove() {
    animate(ol, -downIndex*63);
    animate(ul, -focusWidth*num);
    for(let i=0;i<ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[downIndex].className = 'current';
}
