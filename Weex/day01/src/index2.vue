<template>
  <div class="wrapper">
    <div class="box1">
      <text>123</text>
    </div>
    <div class="box2">
      <div class="box3"></div>
      <div class="box4"></div>
    </div>
    <a href="../dist/index.js"><text>JUMP</text></a>
  </div>

</template>

<script>
  export default {
    data () {
     
    }
  }
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .box1{
    height: 200px;
    width: 200px;
    background-color:red;
    background-image: radial-gradient(to top,black,white);
    border-width: 10px ;
    border-style:solid;
    border-color: #000;
    position: relative;
    z-index:20;
  }
  .box2{
    height: 200px;
    width: 200px;
    position: relative;
    z-index:10;
    bottom:0;
    flex-direction: row;
  }
  .box3{
    width: 100px;
    height: 200px;
    background-color: blue;
  }
  .box4{
    width: 100px;
    height: 200px;
    background-color: pink;
  }
</style>
