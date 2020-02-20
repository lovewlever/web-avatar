<template>
    <div>
        <div style="width: 100%;height: 50px;"></div>
        <div style="height: 100%;display: flex">
            <div class="left-menu">
                <div style="text-align: center">
                    <img src="../assets/Avatar.png" width="100px" height="100px" style="border-radius: 50px">

                    <h5 style="margin-top: 8px">lovewlever</h5>

                    <span style="margin-top: 8px">消息(<span style="color: red">1</span>)</span>
                </div>
                <hr>

                <h5><i class="fa fa-user-circle" aria-hidden="true">&nbsp;&nbsp;</i>&nbsp;&nbsp;我的账号</h5>
                <div>
                    <ul class="ull">
                        <li>
                            <a href="#" :class="['noo',{actives:act === 'mod_pwd'}]" @click="modAct('mod_pwd')">
                                <router-link to="/mod_pwd" tag="span">更改密码</router-link>
                            </a>
                        </li>
                        <li>
                            <a href="#" :class="['noo',{actives:act === 'usr_info'}]" @click="modAct('usr_info')">
                                <router-link to="/mod_user_info" tag="span">个人资料</router-link>
                            </a>
                        </li>
                        <li>
                            <a href="#" :class="['noo',{actives:act ===  'subs'}]" @click="modAct('subs')">
                                <router-link to="/mod_user_subscription" tag="span">订阅设置</router-link>
                            </a>
                        </li>

                    </ul>

                </div>

                <hr>

                <h5><i class="fa fa-user-circle" aria-hidden="true">&nbsp;&nbsp;</i>&nbsp;&nbsp;我的支持</h5>

                <div>
                    <ul class="ull">
                        <li>
                            <a href="#" :class="['noo',{actives:act === 'my_pro'}]" @click="modAct('my_pro')">我的产品</a>
                        </li>
                        <li>
                            <a href="#" :class="['noo',{actives:act === 'pro_reg'}]" @click="modAct('pro_reg')">产品注册</a>
                        </li>
                        <li>
                            <a href="#" :class="['noo',{actives:act === 'pri_ser'}]" @click="modAct('pri_ser')">增值服务</a>
                        </li>

                    </ul>

                </div>

            </div>

            <div class="menu-content">
                <router-view/>
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        name: "UserCenter",
        components: {},
        data(){
            return {
                act:"usr_info"
            }
        },
        created:function () {
          this.$router.push("/mod_user_info")
        },
        methods:{
            modAct:function (te) { this.act = te }
        },

    }
</script>

<style scoped>
    body,html {height: 100%}
    .ull {
        margin: 0px 8px 0px 0px;
    }

    .ull li {
        padding: 8px;
        list-style: none;
    }

    .left-menu {
        width: 280px;
        height:580px;
        background-color: rgb(246,246,246);
        border-radius: 6px;
        margin: 8px;
        border: deepskyblue 1px solid;
        padding-top: 16px;
    }

    .menu-content {
        width: 100%;
        height:100%;
        flex: 1;
        margin: 8px;
        border-top: deepskyblue 1px  solid;
        padding-top: 16px;
    }

    .noo {
        color: grey;
    }

    .actives{
        color: #005cbf;
    }




</style>