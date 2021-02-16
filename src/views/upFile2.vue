<template>
    <el-upload
            class="upload-demo"
            action="http://localhost:8181/up"
            name="file"
            :on-success="mySuccess">
        <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
</template>
<script>
    export default {
        data() {
            return {};
        },
        methods: {
            mySuccess(response, file, fileList){
                console.log(response,file,fileList)
            }
        }
    }
</script>