<script>
    let WEB_URL = "https://lovewlever.com";
    //let WEB_URL = "http://localhost:8090";
    const WebApi = {
        WEB_URL: WEB_URL,
        STORAGE_TOKEN_KEY:"token",
        STORAGE_USER_NAME:"user_name",
        STORAGE_USER_AVATAR:"user_avatar",
        //获取验证码
        WEB_GET_VERIFY_CODE: WEB_URL + "/api/getVerifyCode",
        //查询表情包
        WEB_FIND_EMOTICON: WEB_URL + "/api/api/find_emoticon_package",
        Web_UPLOAD_EMOTICON:WEB_URL + "/api/api/upload_emoticon_package",

        //登录
        WEB_TO_LOGIN: WEB_URL + "/api/login",
        WEB_TO_REGISTERED: WEB_URL + "/api/registered",


        /*静态变量*/
        //登录存储的token
        WEB_LOGIN_TOKEN: "login-token"
    };


    export default {
        WebApi
    }
</script>
