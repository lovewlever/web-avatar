<script>
    //let WEB_URL = "http://avater.fun";
    let WEB_URL = "http://localhost:8090";
    const WebApi = {

        TOKEN_KEY:"token",
        //获取验证码
        WEB_GET_VERIFY_CODE: WEB_URL + "/getVerifyCode",
        //查询表情包
        WEB_FIND_EMOTICON: WEB_URL + "/api/find_emoticon_package",
        Web_UPLOAD_EMOTICON:WEB_URL + "/api/upload_emoticon_package",

        //登录
        WEB_TO_LOGIN: WEB_URL + "/login",
        WEB_TO_REGISTERED: WEB_URL + "/registered",


        /*静态变量*/
        //登录存储的token
        WEB_LOGIN_TOKEN: "login-token"
    };


    export default {
        WebApi
    }
</script>
