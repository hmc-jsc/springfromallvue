<template>
    <el-upload style="position: relative;top: -40px;left: 240px;"
               :show-file-list="false"
               :on-success="onSuccess"
               :on-error="onError"
               :before-upload="beforeUpload"
               :on-remove="handleRemove"
               action="http://localhost:8181/up"
               accept=".json, .txt, .csv, .xls, .xlsx"
    >
        <el-button plain type="primary">导入</el-button>
    </el-upload>
</template>

<script>
    export default {
        name: "upFile",
        methods:{
            handleRemove(file, fileList) {
            },
            /**
             * 上传之前回调函数
             */
            beforeUpload(file) {
                console.log(file.name);
                this.uploaDialog = true;
            },
            /**
             * 上传失败回调函数
             */
            onError(err, file, fileList) {
                this.enabledUploadBtn = false;
                this.$message({
                    message: "上传失败",
                    type: "error"
                });
            },
            /**
             * 上传成功回调函数
             */
            onSuccess(response, file, fileList) {
                this.enabledUploadBtn = false;
                // console.log(response)
                this.$message({
                    message: response.msg,
                    type: "info"
                });
                file = [];
                fileList = [];
            }
        }
    }

</script>

<style scoped>

</style>