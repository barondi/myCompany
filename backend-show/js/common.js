var storeName = $('.profile-element span .store-name');
storeName.text(localStorage.getItem('storeName'));
function clear(){
    localStorage.clear();
}
$('.navbar-right .signout').on('click',function(){
    clear();
})

//get auth key
var appKey = '2A376AC6130B440A9F4F73F41911A5E3';
function getAuthKey(clientId, clientSecret){
    var now = new Date().getTime();
    var auth_key =md5(clientId + clientSecret + "AT" + now);
    auth_key = auth_key.substring(8,24);
    return  auth_key+ "." + now;
}

//converse time
function getMyDate(timeStamp){
    var date = new Date(timeStamp);
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();
    var arr = [month,day,year];
    return arr.join('/');
}