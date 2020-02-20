<template>
    <div class="nav">
        <ul>
            <li>
                <a href="javascript:void(0)" :class="['no-sel',{activity : isSel === 'home'}]" @click="activi('home')">
                    <router-link to="/emoticon" tag="span">
                        主页
                    </router-link>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" :class="['no-sel',{activity : isSel === 'recommend'}]" @click="activi('recommend')">
                    <router-link to="/recommend" tag="span">
                        推荐
                    </router-link>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" :class="['no-sel',{activity : isSel === 'hot'}]" @click="activi('hot')">
                    <router-link to="/emo_hot" tag="span">
                        热门
                    </router-link>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" :class="['no-sel',{activity : isSel === 'upload'}]" @click="activi('upload')">
                    <router-link to="/upload_emoticon" tag="span">
                        我要上传
                    </router-link>
                </a>
            </li>
            <li>
                <label style="margin: 0 8px">
                    <input type="search" placeholder="请输入搜索内容">
                </label>
            </li>
        </ul>

        <div class="nav-login" v-show="isLogin === 'login'">
            <router-link to="/login">
                <span>&nbsp;登录</span>
            </router-link>
        </div>

        <!-- Example single danger button -->
        <div class="btn-group nav-login" v-show="isLogin === 'logged'">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                {{userName}}
            </button>
            <div class="dropdown-menu" style="min-width: 8rem">
                <a class="dropdown-item menu-a" href="#">
                    <router-link to="/user_center" tag="span">个人信息</router-link>
                </a>
                <a class="dropdown-item menu-a" href="#">主页</a>
                <a class="dropdown-item" href="#">修改信息</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click="ext_sys()">推出</a>
            </div>
        </div>

    </div>

</template>

<script>
    import Const from "./Const";

    export default {
        name: "Navigation",
        data() {
            return {
                isSel: 'home',
                isLogin:'login',
                userName:'以登录'
            };
        },
        created:function(){
            let token = window.localStorage.getItem(Const.WebApi.STORAGE_TOKEN_KEY);
            let user_name = window.localStorage.getItem(Const.WebApi.STORAGE_USER_NAME);
            console.info(token + "' " + user_name);
            if (token !== null && user_name !== null) {
                this.userName = user_name;
                this.isLogin = 'logged'
            } else {
                this.isLogin = 'login'
            }
        },
        methods: {
            activi: function (str) {
                this.isSel = str
            },
            ext_sys:function () {
                window.localStorage.clear();
                location.reload()
            }
        }
    }
</script>

<style scoped>

    ul {
        height: auto;
        display: flex;
        margin: auto 8px auto 8px;
    }

    ul li {
        display: inline;
        margin: auto;
    }

    .menu-a {
        margin-bottom: 6px;
    }

    /*导航栏*/
    .nav {
        height: 55px;
        width: 100%;
        background-color: #e6e6e6;
        display: flex;
        box-shadow: 0px 0px 20px darkgray;
        position: fixed;
        top: 0px;
        z-index: 1;
    }

    .no-sel {
        color: #808080;
    }

    .activity {
        color: dodgerblue;
    }

    .nav a {
        text-decoration: none;
        margin: auto 0px;
        padding: 0px 20px;
    }

    .nav a:hover {
        text-decoration: none;
        color: dodgerblue;
        margin: auto 0px;
        padding: 0px 20px;
    }

    .nav input {
        margin: auto 0px;
        border: white 1px solid;
        border-radius: 4px;
        background-color: white;
        height: 30px;
        width: 150px;
        font-size: 12px;
        transition: width 500ms, box-shadow 500ms;
        box-shadow: 0px 0px 1px gray inset;
    }

    .nav input:focus {
        margin: auto 0px;
        border: white 1px solid;
        border-radius: 4px;
        background-color: white;
        height: 30px;
        width: 200px;
        font-size: 12px;
        outline: none;
        transition: width 500ms, box-shadow 500ms;
        box-shadow: 0px 0px 4px gray inset;
    }


    .nav-login  {
        margin: auto 8px auto auto;
        width: auto;
        height: auto;
    }


</style>
