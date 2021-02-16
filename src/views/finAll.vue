<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    prop="bookname"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="context"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="person"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    bookname: '2016-05-02',
                    context: '王小虎',
                    person: '上海市普陀区金沙江路 1518 弄',
                    time:"66"
                }]
            }
        },
        created() {
            const _this = this
            axios.get("http://localhost:8181/index/findAll").then(resp=>{
                _this.tableData = resp.data
            })
        }
    }
</script>