<template>
    <div class="content">
        <web class="web" :src="src" @pagestart="start" @pagefinish="finish" @error="error"></web>
        <div @click="pre"><text>上一页</text></div>
        <div @click="reload"><text>刷新</text></div>
        <div @click="next"><text>下一页</text></div>
    </div>
</template>

<script>
    const webview = weex.requireModule('webview');
    export default{
        data:{
            src:"https://m.imooc.com"
        },
        methods:{
            start: function(e){
                console.log("start");
            },
            finish: function(e){
                console.log("finish");
            },
            error: function(e){
                console.log("err");
            },
            pre: function(e){
                webview.goBack(this.$refs.myweb);
            },
            reload: function(e){
                webview.reload(this.$refs.myweb);
            },
            next: function(e){
                webview.goForward(this.$refs.myweb);
            }
        }
    }
</script>

<style>
    .content{
        width: 300px;
        height: 300px;
        position: relative;
        flex-direction: column;

    }
    .web{
        width: 300px;
        height: 300px;
        position: relative;
    }
</style>
