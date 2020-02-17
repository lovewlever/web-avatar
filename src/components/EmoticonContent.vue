<template>
    <div>
        <div class="div-content" id="item-img">
            <transition-group name="list" tag="span">
                <template v-for="(item,index) in ds">
                    <div :key="index" class="div-item">
                        <img :src="item.filePath" alt="alt">
                        <div>
                            <span v-bind:class="div_item_font_text_size">{{item.label}}</span>
                            <span v-bind:class="div_item_font_text_size">&nbsp;|&nbsp;</span>
                            <a v-bind:class="div_item_font_text_size" href="#">下载</a>
                            <span v-bind:class="div_item_font_text_size">|</span>
                            <a v-bind:class="div_item_font_text_size" href="#">复制</a>
                        </div>
                    </div>
                </template>
            </transition-group>

        </div>

        <div id="drop-down-load">
            <img src="../assets/loading.gif">
        </div>

    </div>
</template>

<script>

    import Const from "./Const";

    let emoticonCurrentPage = 1;
    let emoticonTotalPage = 1;
    let isLoading = false;//是否正在加载
    let exp_this;

    export default {
        name: "EmoticonContent",
        data() {
            return {
                ds:[],
                div_item_font_text_size:'div-item-font-text-size',
                div_content:'div-content'
            };
        },
        created:function () {
            exp_this = this;
            onscrollS();
        },
        methods:{

        },
        mounted:function () {
            loadEmoticon()
        }

    }

    /**
     * 滑动监听
     */
    function onscrollS() {
        window.onscroll = function () {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let totalHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollTop + windowHeight === totalHeight)
            {
                if (emoticonCurrentPage < emoticonTotalPage)
                {
                    if (!isLoading)
                    {
                        isLoading = true;
                        emoticonCurrentPage =  emoticonCurrentPage + 1;
                        console.info(emoticonCurrentPage);
                        loadEmoticon()
                    }
                } else
                {
                    exp_this.$("#drop-down-load").fadeOut();
                }
            }
        }
    }

    /**
     * 加载表情包
     */
    function loadEmoticon() {
        exp_this.$axios.get(Const.WebApi.WEB_FIND_EMOTICON,{params:{currentPage:emoticonCurrentPage,currentCount:40}})
            .then(function (response) {
                let json = response.data;
                console.info(response);
                for (let obj of json.data)
                exp_this.ds.push(obj);

                emoticonCurrentPage = json.curPage;
                emoticonTotalPage = json.tolPage;
                isLoading = false;
                if (json.data.length === 0) exp_this.$("#drop-down-load").fadeOut();
            })
            .catch(function (error) { // 请求失败处理
                console.log(error);
            });
    }
</script>

<style scoped>
    .div-content{
        text-align: center;
        margin-top: 65px;
    }

    .div-item-font-text-size{
        font-size: 12px;
    }


    .div-item {
        background-color: white;
        width: auto;
        height: auto;
        display: inline-block;
        box-shadow: 0px 0px 3px #b3d7ff;
        margin: 8px;
        padding: 4px;
        border-radius: 4px;
        transition: box-shadow 500ms,transform 500ms;
        transform: translateY(2px);
    }

    .div-item:hover{
        background-color: white;
        width: auto;
        height: auto;
        display: inline-block;
        box-shadow: 0px 0px 10px #b3d7ff;
        margin: 8px;
        border-radius: 4px;
        padding: 4px;
        transition: box-shadow 500ms,transform 500ms;
        transform: translateY(-2px);
    }

    .div-item img {
        width: 130px;
        height: auto;
        margin: 4px 0px;
        background-size: cover;
    }

    /*正在加载*/
    .loading{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        text-align: center;
    }

    .loading img{
        margin: auto auto;
    }


    /** 插入过程 **/
    .list-enter-active{
        transition: all 1s;
    }
    /** 移除过程 **/
    .list-leave-active {
        transition: all 1s;
    }
    /*** 开始插入、移除结束的位置变化 ***/
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }


    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }



    #drop-down-load {
        width: 100%;
        height: auto;
        display: flex;
    }

    #drop-down-load img{
        width: 158px;
        height: 120px;
        margin: 0px auto;
    }


</style>
