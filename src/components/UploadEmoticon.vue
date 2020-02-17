<template>
    <div style="height:100%;width: 100%;display: flex">
        <div class="up-box">
            <p>UPLOAD</p>

            <div>
                <p align="left" style="margin-bottom: 0">选择表情：</p>
                <div style="position: relative">
                    <label style="position: absolute;left: 50px">
                        <input style="opacity: 0;width: 100px" type="file" name="file" placeholder="select file"  value="" v-on:change="fileChange" multiple="multiple">
                    </label>
                    <span style="border: #9fcdff solid 1px;padding: 2px;border-radius: 4px;font-size: 13px">{{fileNames}}</span>
                </div>
            </div>

            <div>
                <p align="left" style="margin-bottom: 0">标签：</p>
                <label style="width: 100%;">
                    <input type="text" placeholder="请输入表情标签" v-model="label_name" style="width: 100%">
                </label>
            </div>

            <div>
                <p align="left" style="margin-bottom: 0">描述：</p>
                <label style="width: 100%;">
                    <input type="text" placeholder="请输入表情描述" v-model="des" style="width: 100%" size="13px">
                </label>
            </div>

            <br/>

            <div>
                <input type="button" value="提交" id="submit" name="submit" v-on:click="submit" style="width: 150px;background: #005cbf;border-radius: 4px;color: white;height: 35px">
            </div>

          <span style="color: red;font-size: 13px;margin-top: 16px">{{upload_err}}</span>

        </div>
    </div>
</template>

<script>

  import Const from "./Const";
  import Axios from 'axios'
    export default {
        name: "UploadEmoticon",
        inject:["reload"],
        data() {
            return {
                fileNames:'点击此处选择文件',
                label_name:'',
                des:'',
                upload_err:'',
                formData:new FormData()
            }
        },
        methods:{
            fileChange:function (ev) {
                this.formData = new FormData()
                let files = ev.path[0].files;
                for (let file of files)
                {
                    this.fileNames = file.name;
                    this.formData.append('file',file)
                }
            },
            submit:function () {
                this.formData.append("label",this.label_name);
                this.formData.append("describe",this.des);
                Axios({
                    url:Const.WebApi.Web_UPLOAD_EMOTICON,
                    data:this.formData,
                    processData:false,
                    method: "POST",
                    contentType:false
                }).then((res)=>{
                    if (res.data.code === 1)
                    {
                        //上传成功
                        location.reload()
                    } else
                    {
                        console.info(res.data.msg);
                        this.fileNames = "点击此处选择文件";
                        this.label_name = "";
                        this.des = "";
                        this.formData = new FormData();
                        this.upload_err = res.data.msg
                    }
                }).catch(reason => {
                    console.info(reason)
                })
            }
        }
    }
</script>

<style scoped>

    .sel-emo-text {
        position: absolute;
        left: calc(50% - 50px);
        width: 100px;
        text-align: center;
    }

    .up-box{
        width: 300px;
        height: auto;
        box-shadow: 0px 0px 8px gray;
        margin: 120px auto 0px auto;
        border-radius: 6px;
        padding: 16px;
    }

    input {
        height: 32px;
        width: 100%;
        font-size: 13px;
        border-radius: 4px;
        border-style: solid;
        border-color: #9fcdff;
        border-width: 1px;
        padding-left: 4px;
        padding-right: 4px;
    }

</style>
