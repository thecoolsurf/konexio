/* ************************************************************************************************** */
/* SERVER */
/* ************************************************************************************************** */
function host() {
    var host;
    if ('https:' === document.location.protocol) {
        host = 'https://' + location.host;
    } else {
        host = 'http://' + location.host;
    }
    return host;
}
function getUrl() {
    var uri;
    var url = location.pathname;
    uri = url.substr(url.indexOf('?'));
    return uri;
}

function getParam() {
    var uri;
    var url = window.location.search;
    uri = url.substr(url.indexOf('&'));
    return uri;
}

function ajaxdir() {
    var matches = window.location.href.match('/admin/');
    suffix = (matches && matches.length) ? matches[0] : '/';
    return suffix;
}

/* ************************************************************************************************** */
/* DOM */
/* ************************************************************************************************** */

function displayNavigation() {
    var w = window.innerWidth;
    var s = window.scrollY;
    var h = document.getElementById('header').offsetHeight;
    var n = document.getElementById('navigation').offsetHeight;
    var navigation = document.getElementById('navigation');
    var navi = document.getElementById('navig');
    var menu = document.getElementById('menu');
    var haut = document.getElementById('haut');
    if (w < 980) {
        /* mobile and ipad */
        navigation.style.display = 'block';
        menu.style.display = 'none';
        if (s > h) {
            menu.style.background = 'none';
            menu.style.position = 'fixed';
            menu.style.top = n + 10;
            haut.style.display = 'block';
        } else {
            menu.style.background = '#6c6c6c';
            menu.style.position = 'absolute';
            menu.style.top = n + 10;
            haut.style.display = 'none';
        }
    } else {
        /* tablet and default */
        navigation.style.display = 'none';
        menu.style.display = 'block';
        if (s > h) {
            menu.style.background = 'none';
            menu.style.position = 'fixed';
            menu.style.top = 0;
            haut.style.display = 'block';
        } else {
            menu.style.background = 'none';
            menu.style.position = 'relative';
            menu.style.top = h - 0;
            haut.style.display = 'none';
        }
    }
    navi.onclick = function () {
        menu.style.display = 'block';
        navi.style.display = 'none';
       navigation.children[0].style.display = 'block';
    };
}

function switchCssMedias() {
    var w = window.innerWidth;
    var media = document.getElementById('media');
    if (w > 1100) {
        media.href = '/style/css/default.css';
        console.log('default');
    }
    if (w > 980 && w < 1100) {
        media.href = '/style/css/tablet.css';
        console.log('tablet');
    }
    if (w > 600 && w < 981) {
        media.href = '/style/css/ipad.css';
        console.log('ipad');
    }
    if (w < 600) {
        media.href = '/style/css/mobile.css';
        console.log('mobile');
    }
}

function csspair(i) {
    var css = (i % 2 === 0) ? 'pair' : 'impair';
    return css;
}

function redorgreen(i) {
    var css = (i < getTimer()) ? 'green' : 'red';
    return css;
}

/* ************************************************************************************************** */
/* DATES */
/* ************************************************************************************************** */

function getNowYearMonthDay() {
    var n = new Date();
    return n.getFullYear() + '-' + (n.getMonth() + 1) + '-' + n.getDate();
}

function getDateNow() {
    var n = new Date();
    return n.getDate() + '/' + (n.getMonth() + 1) + '/' + n.getFullYear();
}

function getTimer() {
    var n = new Date();
    return Math.round(n.getTime() / 1000);
}

function dateConvert(time, type) {
    switch (type) {
        case 1: // time
            times = convertDateToTime(time);
            break;
        case 2: // date FR
            times = time;
            break;
        case 3: // date US
            val = time.split('/');
            times = val[2] + '-' + val[1] + '-' + val[0];
            break;
        case 4:
            val1 = time.split(' ');
            times = val1[0];
            val2 = times.split('-');
            times = val2[2] + '/' + val2[1] + '/' + val2[0];
            break;
    }
    return times;
}
