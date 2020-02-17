<template>
    <div class="content">
        <div class="login-content">

            <div class="login-item" id="login-page">
                <label>
                    <p>账号：</p>
                    <input class="login-item-pw" type="text" placeholder="邮箱/手机号/用户名" name="account" id="account"
                           v-model="account">
                </label>

                <label>
                    <p>密码：</p>
                    <input type="password" class="login-item-pw" placeholder="请输入密码" name="password" id="password"
                           v-model="password">
                </label>

                <label>
                    <p>验证码：</p><br/>
                    <div class="item-span-code">
                        <input type="text" class="login-item-code" placeholder="请输入验证码" name="vaCode" id="vaCode" v-model="vaCode">
                        <img :src="url" style="display: inline" width="80" height="35" alt="code">
                    </div>
                </label>

                <div>
                    <button type="button" id="submit" v-on:click="submits">立即注册</button>
                </div>

                <span class="span-forget-pwd" @click="toLogin">登录</span>

            </div>
        </div>
    </div>
</template>

<script>
  import Const from "../components/Const";
    export default {
        name: "Login",
        data() {
          return {
              url:"",
              account:"",
              password:"",
              vaCode:""
          }
        },
        mounted:function () {
            getVerifyCode(this)
        },
        methods:{
            toLogin:function(){this.$router.push("/login")},
            submits : function () {
                let fromData = new FormData();
                fromData.set("account",this.account);
                fromData.set("pwd",this.password);
                fromData.set("verifyCode",this.vaCode);
                this.$axios({
                    url:Const.WebApi.WEB_TO_REGISTERED,
                    data:fromData,
                    method: "POST"
                }).then((res)=>{
                    let data = res.data;
                    if (data.code === 1)
                    {
                        location.reload()
                    }
                }).catch(reason => {
                    console.info(reason)
                });
            }
        }
    }


  function arrayBufferToBase64( buffer ) {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return 'data:image/jpeg;base64,'+ window.btoa( binary );
  }


  function getVerifyCode(_this) {
      _this.$axios({
          url:Const.WebApi.WEB_GET_VERIFY_CODE,
          data:{},
          responseType: 'arraybuffer',
          method: "POST",
      }).then((res)=>{
          _this.url = arrayBufferToBase64(res.data);
      }).catch(reason => {
          console.info(reason)
      });
  }


</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    html,body {
        height: 100%;
    }

    .content {
        height: 100%;
        width: 100%;
        display: flex;
        position: absolute;
    }


    .login-content {
        height: 100%;
        width: 100%;
        display: flex;
        margin: auto;
        position: relative;
    }

    .login-content:before{
        height: 100%;
        width: 100%;
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581928380058&di=d17d2d5b21060941d23190ec0a33374f&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F02%2F64%2F77%2F155785e53a54fc2.jpg") no-repeat;
        background-size: cover;
        filter: blur(5px);
        z-index: 2;

    }

    .login-item {
        margin: auto;
        height: 365px;
        width: 300px;
        padding: 8px 15px;
        position: relative;
        color: white;
        z-index: 2;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0px 0px 6px wheat;
    }

    .login-item:before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        height: 365px;
        width: 300px;
        background:rgba(0,0,0,0.3);
        filter:blur(2px);
        z-index: -1;
        background-size:cover;
    }

    .login-item p {
        margin: auto 0px;
        font-size: 12px;
        float: left;
    }

    .login-item label  {
        width: 100%;
        margin-top: 8px;
    }

    .login-item-pw {
        border-radius: 4px;
        width: 100%;
        height: 35px;
        font-size: 12px;
        border: #cccccc 1px solid;
        margin-top: 8px;
        padding: 0 4px;
    }

    .login-item-code  {
        border-radius: 4px;
        width: 100%;
        height: 35px;
        font-size: 12px;
        border: #cccccc 1px solid;
        margin: 0 8px 0 0;
        padding: 0 4px;
    }

    .item-span-code {
        display: flex;
        align-items: center;
    }

    .login-item button  {
        color: white;
        width: 100%;
        height: 40px;
        margin: 20px 0 0 0;
        background: dodgerblue;
        border-radius: 6px;
    }

    .login-item span  {
        font-size: 12px;
        color: darkgray;
    }

    hr {
        margin: 0;
        background-color: lightgray;
    }

    .span-forget-pwd {
        margin-top: 8px;
        display: inline-block;
    }

    .span-forget-pwd:hover{
        cursor: pointer;
    }

</style>
