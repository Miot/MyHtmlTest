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
            // get
            this.$axios.get('getlunbo')
            .then(res => {
                // console.log(res)
                this.data = res.data.message;
            })
            .catch(err => {
                console.log(err)
            });

            //post
            this.$axios.post('getlunbo',
                'content=123124'
                )
            // {
            //     content:'123'
            // },{
            //     //设置请求头
            //     headers:{
            //         'content-type':'application/x-www-form-urlencoded';
            //     }
            // })
            .then(res => {
                // console.log(res)
                this.data = res.data.message;
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
</script>
<style scoped>
</style>