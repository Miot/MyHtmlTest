<template>
    <div>
        {{data}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                data:[]
            }
        },created(){
            // console.log(this.$http);
            // this.$http.get('http://182.254.146.100:8899/api/getlunbo').then(res=>{
            //     this.data = res.body.message;
            // },err=>{
            //     console.log(err);
            // })
            this.$http.post('http://182.254.146.100:8899/api/postcomment/330',{
                content:'234'
            },{
                // post 预检请求
                emulateJSON:true
            })
            .then(res=>{
                console.log(res);
            },err=>{
                console.log(err);
            })
        }
    }
</script>
<style scoped>
</style>