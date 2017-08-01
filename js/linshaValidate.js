/**
 * Created by Administrator on 2017/6/14 0014.
 */
/**
 * 判断是否存在
 * @param data
 * @returns {boolean}
 */
var bool = true;
function checkExist(data) {
    if (data == "" || data == null) {
        return false;
    } else {
        return true;
    }
}
/**
 * 验证手机号码
 * @param data
 * @returns {boolean}
 */
function checkPhone(data){
    if(data.length==0 || data.length!=11){
        return false;
    }
    var myreg = /^1(3|4|5|7|8)\d{9}$/;
    if(!myreg.test(data))
    {
        return false;
    }else{
        return true;
    }
}

