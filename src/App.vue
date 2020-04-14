<template>
  <div id="app">
    <div id="nav">
<!--      <Header></Header>-->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components:{Header},
  data(){
    return{

    }
  }
}
</script>
<style lang="scss">
 body,h1,h2,h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
  body{
    font-size: 14px;

  }
  ul,ol {list-style:none;}
  a{text-decoration:none;}
  a:hover { text-decoration:underline; }
  fieldset, img { border:0; }
  #trans-tooltip,#tip-arrow-bottom,#tip-arrow-top{
    height: 0;
    padding: 0;
    margin: 0;
    div{
      height: 0;
      padding: 0;
      margin: 0;
    }
  }
  body::-webkit-scrollbar {
    /*滚动条整体样式*/
    width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  body::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background   :#b7b7b7;
  }
  body::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background   : #ededed;
  }
  .el-dialog__wrapper::-webkit-scrollbar {
    /*滚动条整体样式*/
    width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }
  .el-dialog__wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background   : #ededed;
  }
  .el-dialog__wrapper::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background   : #ededed;
  }
</style>
