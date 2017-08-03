var strCookie=document.cookie;
var arrCookie=strCookie.split("; ");
//console.log('strCookie是'+strCookie);
//console.log('arrCookie是'+arrCookie);
var u_id;
var myToken;
var curV;
for(var i=0;i<arrCookie.length;i++){
    var arr=arrCookie[i].split("=");
    if("uid"==arr[0]){
        u_id=arr[1];
    }
    if("mytoken"==arr[0]){
        myToken=arr[1];
    }
    if("_o"==arr[0]){
        curV=arr[1];
    }
}
if(!u_id){
    //u_id = window.android.getUId();
    u_id = window.android.getStringParam('userId');
}
if(!myToken){
    //myToken = window.android.getMyToken();
    myToken = window.android.getStringParam('token');
}
if(!curV){
    curV=window.android.getStringParam('version');
}
function hide($type,$btn,$ary){
    $btn.on($type,function(){
        $ary.each(function(){
            this.fadeOut(200);
        })
    })
}
//->错误信息提示
var $errorInfo=$('.error-info');
function showError(str){
    $errorInfo.text(str).fadeIn(200);
    setTimeout(function(){
        $errorInfo.fadeOut(300);
    },3000)
}
//->需要时设置元素的宽高比例
function setScale($ele,num){
    $ele.height($ele.width()/num);
    return $ele.height();
};
//->给祝福语绑定单击事件
function bindSpan(){
    var $spans=$('.wish_list span');
    var $txt=$('.sign_wish textarea');
    $spans.on('click',function(e){
        e.target= e.target|| e.srcElement;
        $txt.val('').val($(e.target).text());
        $(e.target).addClass('bg').siblings().removeClass('bg');
        controlNum.call($txt,$('.textareaInput'),30);
    })
    $txt.on('input',function(){
        var $curSpan=$('.wish_list .bg');
        $txt.val()!=$curSpan.text() ? $curSpan.removeClass('bg') : void 0;
    })
};
//->控制字数多少
function controlNum($obj,maxNum){
    var lenInput = $(this).val().length;
    if(lenInput>=0 && lenInput<=maxNum){
        $obj.html(lenInput);
    }
}
function setUnuse(ary){
    $.each($(ary),function(index,item){
        if(!(item.hasClass('unuse'))){
            item.addClass('unuse');
        }
        var ele=item.find('a').eq(0);
        if(ele.attr('href').indexOf('javascript')==-1){
            ele.attr('href','javascript:;');
        }
    })
}
function setUse(ary){
    $.each($(ary),function(index,item){
        if(item.hasClass('unuse')){
            item.removeClass('unuse');
        }
    })
}
function setLink(ele,linkStr){
    var obj=ele.find('a').eq(0);
    if(obj.attr('href').indexOf('javascript')!=-1){
        obj.attr('href',linkStr);
    }
}