<template>
    <nav>
        <div>

            <a href="javascript:void(0)" :class="{activity : isSel === 'home'}" @click="activi('home')">
                <router-link to="/emoticon" tag="span">
                    主页
                </router-link>
            </a>

            <a href="javascript:void(0)" :class="{activity : isSel === 'recommend'}" @click="activi('recommend')">
                <router-link to="/recommend" tag="span">
                    推荐
                </router-link>
            </a>

            <a href="javascript:void(0)" :class="{activity : isSel === 'hot'}" @click="activi('hot')">
                <router-link to="/recommend" tag="span">
                    <span>热门</span>
                </router-link>
            </a>

            <a href="javascript:void(0)" :class="{activity : isSel === 'upload'}" @click="activi('upload')">
                <router-link to="/upload_emoticon" tag="span">
                    我要上传
                </router-link>
            </a>

            <label>
                <input type="search" placeholder="请输入搜索内容">
            </label>
            <div class="nav-login">
                <router-link to="/login">
                    <span class="glyphicon glyphicon-user">&nbsp;登录</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
        name: "Navigation",
        data() {
            return {
                isSel: 'home'
            };
        },
        methods: {
            activi: function (str) {
                this.isSel = str
            }
        }
    }
</script>

<style scoped>
    /*导航栏*/
    nav {
        height: 55px;
        width: 100%;
        background-color: #e6e6e6;
        display: flex;
        box-shadow: 0px 0px 20px darkgray;
        position: fixed;
        top: 0px;
        z-index: 1;
    }

    nav div
    {
        margin: auto 8px;
        height: 100%;
        display: flex;
        width: 100%;
    }

    nav div a{
        text-decoration: none;
        color: #808080;
        margin: auto 0px;
        padding: 0px 20px;
    }

    nav div a:hover{
        text-decoration: none;
        color: dodgerblue;
        margin: auto 0px;
        padding: 0px 20px;
    }


    nav div label{
        margin: auto 0px;
        padding: 0px 20px;
    }

    nav div label input{
        margin: auto 0px;
        border: white 1px solid;
        border-radius: 4px;
        background-color: white;
        height: 30px;
        width: 150px;
        font-size: 12px;
        transition: width 500ms,box-shadow 500ms;
        box-shadow: 0px 0px 1px gray inset;
    }

    nav div label input:focus{
        margin: auto 0px;
        border: white 1px solid;
        border-radius: 4px;
        background-color: white;
        height: 30px;
        width: 200px;
        font-size: 12px;
        outline: none;
        transition: width 500ms,box-shadow 500ms;
        box-shadow: 0px 0px 4px gray inset;
    }

    .activity {
        color: dodgerblue;
    }

    .nav-login
    {
        margin: 0 8px 0 auto;
        width: auto;
    }

    .nav-login img
    {
        width: 15px;
        height: 15px;
        margin: auto 0px;
    }

    .nav-login a
    {
        margin: auto 0px;
        padding: 0px 16px;
    }

    .nav-login a:hover
    {
        margin: auto 0px;
        padding: 0px 16px;
    }

</style>
