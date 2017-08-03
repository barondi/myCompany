/*
   原型扩展方法
*/
/*//数组移除
Array.prototype.remove = function (n) {　//n表示第几项，从0开始算起。
    //prototype为对象原型，注意这里为对象增加自定义方法的方法。
    if (n < 0)　//如果n<0，则不进行任何操作。
        return this;
    else
        return this.slice(0, n).concat(this.slice(n + 1, this.length));
    /!*
  　　　concat方法：返回一个新数组，这个新数组是由两个或更多数组组合而成的。
  　　　　　　　　　这里就是返回this.slice(0,n)/this.slice(n+1,this.length)
  　　 　　　　　　组成的新数组，这中间，刚好少了第n项。
  　　　slice方法： 返回一个数组的一段，两个参数，分别指定开始和结束的位置。
  　　*!/
}

//判断元素是否在数组中存在
Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}


/!*
    工具方法
*!/

//原生事件绑定
function addEvents(target, type, func) {
    /!**
     * @description 事件绑定，兼容各浏览器  
     * @param target 事件触发对象   
     * @param type   事件  
     * @param func   事件处理函数  
     *!/

    if (target.addEventListener)    //非ie 和ie9  
        target.addEventListener(type, func, false);
    else if (target.attachEvent)   //ie6到ie8  
        target.attachEvent("on" + type, func);
    else target["on" + type] = func;   //ie5  
};

//通过名称获取Cookie的人值
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return "null";
}

//滚动条在Y轴上的滚动距离
function getScrollTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

//文档的总高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
}

//浏览器视口的高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

// 通过index获取cookie
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
    }
    return unescape(document.cookie.substring(offset, endstr));
}

// 通过key获取cookie
function getCookieName(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) {
            return getCookieVal(j);
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

// 设置cookie
function setCookie(name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

// 移除cookie
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      "; expires=Thu, 01-Jan-1970 00:00:01 GMT";

    }
}

//获取URL参数（正则）
function getUrlParam(name) {

    //构造一个含有目标参数的正则表达式对象

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

    //匹配目标参数
    var r = window.location.hash.substr(1).match(reg);
    //返回参数值
    if (r != null) return decodeURI(r[2]);

    return null;

}

//获取URL参数（字符串拆分）
function getUrlVal(name) {

    var url = location.hash; //获取url中"?"符后的字串
    var obj = {};
    if (url.indexOf("?") != -1) {
        var str = url.substring(url.indexOf("?") + 1, url.length);
        var strs = str.split('&');
        for (var i = 0; i < strs.length; i++) {
            var st = strs[i].split('=');
            obj[st[0]] = st[1];
        }

    }
    return obj[name];
}

/!*
    弹窗
*!/

//普通弹窗
function mLayer(content) {
    layer.open({
        content: content,
        btn: ['OK']
    });
}

//确认窗口
function Confirm($modal, ctrl, prompt, callback) {
    var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'conf.html',
        controller: ctrl,
        resolve: {
            prompt: function () {
                return prompt;
            }
        }
    });

    callback.call(modalInstance, modalInstance); //执行下回调  
}

function OpenModel($modal, prompt, options) {
    var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'tip.html',
        controller: function ($scope, $modalInstance, prompt) {
            $scope.prompt = prompt;
            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        },
        resolve: {
            prompt: function () {
                return prompt;
            }
        }
    });
}


function Pay($modal, ctrl, prompt, callback, options) {
    var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'pay.html',
        controller: ctrl,
        resolve: {
            prompt: function () {
                return prompt;
            }
        }
    });

    callback.call(modalInstance, modalInstance); //执行下回调  
}



/!*
    业务方法
*!/

//网页上传回调
function showimgmessage(path, msg, imgid) {
    if (path != null && path != "") {
        var img = document.getElementById(imgid);
        if (imgid == "HeadUrlFile")
            document.getElementById("headimglist").value = path;
        else
            document.getElementById("lifeimglist").value = path;
        pathObj = JSON.parse(path);
        img.src = pathObj.ThumImagePath;
        mLayer(msg);
    } else {
        mLayer(msg);
    }
}*/
function on() {
    $(".prize-shake-on-container").addClass("bounceIn animated");
    $(".prize-shake-on-container").css("display", "block");
    $('.prize-shake-on-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
        $('.prize-shake-on-container').removeClass("bounceIn animated");
    });
}

function off() {
    $(".prize-shake-off-container").addClass("bounceIn animated");
    $(".prize-shake-off-container").css("display", "block");
    $('.prize-shake-off-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
        $('.prize-shake-off-container').removeClass("bounceIn animated");
    });
}

function error() {
    $(".prize-shake-error-container").addClass("bounceIn animated");
    $(".prize-shake-error-container").css("display", "block");
    $('.prize-shake-error-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
        $('.prize-shake-error-container').removeClass("bounceIn animated");
    });
}

function goback() {
    $(".prize-shake-off-container").css("display", "none");
    $(".prize-shake-gift-container").addClass("fadeIn animated");
    $(".prize-shake-gift-container").css("display", "block");
    $('.prize-shake-gift-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function () {
        $('.prize-shake-gift-container').removeClass("fadeIn animated");
    });
}


function onwoman() {
    $(".prize-shake-on-container-woman").addClass("bounceIn animated");
    $(".prize-shake-on-container-woman").css("display", "block");
    $('.prize-shake-on-container-woman').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
function () {
    $('.prize-shake-on-container-woman').removeClass("bounceIn animated");
});
}

function offwoman() {
    $(".prize-shake-off-container-woman").addClass("bounceIn animated");
    $(".prize-shake-off-container-woman").css("display", "block");
    $('.prize-shake-off-container-woman').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
function () {
    $('.prize-shake-off-container-woman').removeClass("bounceIn animated");
});
}

function errorwoman() {
    $(".prize-shake-error-container-woman").addClass("bounceIn animated");
    $(".prize-shake-error-container-woman").css("display", "block");
    $('.prize-shake-error-container-woman').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
function () {
    $('.prize-shake-error-container-woman').removeClass("bounceIn animated");
});
}

function gobackwoman() {
    $(".prize-shake-off-container-woman").css("display", "none");
    $(".prize-shake-gift-container-woman").addClass("fadeIn animated");
    $(".prize-shake-gift-container-woman").css("display", "block");
    $('.prize-shake-gift-container-woman').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
function () {
    $('.prize-shake-gift-container-woman').removeClass("fadeIn animated");
});
}

function gotourl() {
    window.location.href = "https://cowork.cn.lenovo.com:8445/Pages/Index.aspx?ID=1f8e2229-931d-db2a-6ee4-b02e6f9fb560&token=" + getCookieName('mytoken');
};