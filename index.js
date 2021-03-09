API = {}
//将数组转变为字符串
API.joinArr = function(arr,sign = ',') {
    if (typeof arr === 'object') {
        return arr.join(sign);
    }else {
        return arr;
    }
}
//将字符串转变为数组
API.splitStr = function(str,sign = ',') {

    if (typeof str === 'string') {
        return str.split(sign);
    }else {
        return str;
    }
}
module.exports.default = module.exports = API;