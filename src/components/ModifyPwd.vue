<template>
    <div>
        <h3 align="left" style="margin-left: 40px">修改密码</h3>
        <br/>
        <div>
            <p>原密码:</p>
            <label>
                <input type="password" placeholder="请输入原密码" name="old_pwd" class="in_input">
            </label>

            <br/>
            <br/>
            <p>新密码:</p>
            <label>
                <input type="password" placeholder="请输入新密码" name="new_pwd" class="in_input">
            </label>

            <br/>
            <br/>
            <p>确认新密码:</p>
            <label>
                <input type="password" placeholder="请确认新密码" name="repeat_pwd" class="in_input">
            </label>
        </div>

        <label>
            <input type="button" value="确认修改">
        </label>
    </div>
</template>

<script>
    export default {
        name: "ModifyUserInfo"
    }
</script>

<style scoped>
    * {
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
        text-align: center;
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
        text-align: center;
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