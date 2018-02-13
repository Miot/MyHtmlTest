<template>
    <div>
        <div>头部</div>
        <hr/>
        <!-- 不同的坑名 -->
        <router-view class='b' name='header'></router-view>
        <router-view class='b'></router-view>
        <router-view class='b' name='footer'></router-view>
        <hr/>
        <div>底部</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
</style>