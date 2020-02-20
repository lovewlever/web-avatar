<template>
    <div>
        <h3 align="left" style="margin-left: 40px">个人基本资料</h3>
        <br/>
        <div style="display: flex">
            <div style="flex: 1">
                <div class="lr-content">
                    <!---------------------------->
                    <p align="left">姓:</p>
                    <label style="width: 100%">
                        <input type="text" placeholder="请输入姓" name="name" class="in_input">
                    </label>
                    <br>
                    <br>
                    <!---------------------------->
                    <p align="left">昵称:</p>
                    <label style="width: 100%">
                        <input type="text" placeholder="请输入昵称" name="name" class="in_input">
                    </label>
                    <br>
                    <br>
                    <!---------------------------->
                    <p align="left">生日:</p>
                    <div style="display: flex">
                       <select name="YYYY" style="flex: 1">
                           <option name="yyyy" value="">年</option>
                           <template v-for="(item,index) in yearList">
                               <option :key="index" name="yyyy" :value="item">{{item}}</option>
                           </template>
                       </select>
                        <select name="MM" style="flex: 1;margin: 0px 6px">
                            <option selected name="mm" value="">月</option>
                            <template v-for="(item,index) in monthList">
                                <option :key="index" name="mm" :value="item">{{item}}</option>
                            </template>
                        </select>
                        <select name="DD" style="flex: 1">
                            <option selected name="dd" value="">日</option>
                            <template v-for="(item,index) in dayList">
                                <option :key="index" name="dd" :value="item">{{item}}</option>
                            </template>
                        </select>
                    </div>
                    <br>
                    <!---------------------------->
                    <p align="left">邮政编码:</p>
                    <label style="width: 100%">
                        <input type="number" placeholder="邮政编码" name="code" class="in_input">
                    </label>
                    <br>
                    <br>
                    <!---------------------------->
                    <p align="left">手机号:</p>
                    <label style="width: 100%">
                        <input type="number" placeholder="请输入昵称" name="name" class="in_input">
                    </label>

                    <br>
                    <br>
                    <!---------------------------->
                    <p align="left">职业领域:</p>
                    <div style="display: flex">
                        <select name="job" style="flex: 1">
                            <option selected name="" value="">请选择行业</option>
                        </select>
                    </div>

                </div>
            </div>

            <span style="width: 1px;background-color: lightgray"></span>

            <div style="flex: 1">
                <div class="lr-content">
                    <!---------------------------->
                    <p align="left">名:</p>
                    <label style="width: 100%">
                        <input type="text" placeholder="请输入名" name="name" class="in_input">
                    </label>
                    <br>
                    <br>
                    <!---------------------------->
                    <p align="left">性别:</p>
                    <div style="display: flex">
                        <label style="width: 100%;flex: 1;text-align: left">
                            <input type="radio"  value="1" name="gender" />&nbsp;&nbsp;男
                        </label>
                        <label style="width: 100%;flex: 3.2;text-align: left">
                            <input type="radio"  value="0" name="gender" />&nbsp;&nbsp;女
                        </label>
                    </div>
                    <br>
                    <!---------------------------->
                    <p align="left">城市:</p>
                    <div>
                        <label style="width: 100%">
                            <select name="province" style="flex: 1;width: 100%" >
                                <option selected name="" value="">省份</option>
                            </select>
                        </label>
                        <label style="width: 100%">
                            <select name="city" style="flex: 1;width: 100%">
                                <option selected name="" value="">城市</option>
                            </select>
                        </label>
                        <label style="width: 100%">
                            <input type="text" placeholder="地址" name="name" class="in_input">
                        </label>
                    </div>
                    <br>
                    <!---------------------------->
                    <p align="left">教育程度:</p>
                    <div style="display: flex">
                        <select name="student" style="flex: 1">
                            <option selected name="" value="">请选择教育程度</option>
                        </select>
                    </div>
                    <br>
                    <!---------------------------->
                    <p align="left" style="margin-top: 4px">电脑程度:</p>
                    <div style="display: flex">
                        <select name="student" style="flex: 1">
                            <option selected name="" value="">请选择电脑程度</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <label>
            <input type="button" value="确认提交">
        </label>
    </div>
</template>

<script>
    export default {
        name: "ModifyUserInfo",
        data() {
            return {
                yearList:[],
                monthList:[],
                dayList:[]
            }
        },
        mounted() {
            yearList(this);
        }
    }


    function yearList(_this) {
        for (let index = 1980;index < 2020;index ++)
        {
            _this.yearList.push(index)
        }
        for (let index = 1;index <= 12;index ++)
        {
            _this.monthList.push(index)
        }
        for (let index = 1;index <= 31;index ++)
        {
            _this.dayList.push(index)
        }
    }
</script>

<style scoped>

    .lr-content {
        width: 250px;
        margin: 0px auto;
    }

    .lr-content p {
        font-size: 13px;
        margin: 0px;
    }

    .in_input {
        width: 100%;
        border-top: 0px ;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 0.3px solid lightgray;
        outline: none;
        padding: 0px 4px;
        font-size: 14px;
        height: 26px;
    }

    .in_input:focus {
        width: 100%;
        border-top: 0px ;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 0.3px solid #005cbf;
        outline: none;
        padding: 0px 4px;
        font-size: 14px;
        height: 26px;
    }


    input[type = 'button'] {
        width: 180px;
        height: 40px;
        background: #005cbf;
        box-shadow: 0 0 4px #005cbf;
        border-radius: 4px;
        color: white;
        margin-top: 100px;
    }

</style>