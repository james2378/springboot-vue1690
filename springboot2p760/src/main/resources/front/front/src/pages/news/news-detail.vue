<template>
  <div :style='{"border":"1px solid #ddd","padding":"20px","margin":"20px auto 0","borderRadius":"16px","background":"#fff","width":"1200px","position":"relative"}'>
    <div class="section-title" :style='{"margin":"20px auto 20px","borderColor":"#ffa100 #ffde00 #ffde00 #ffde00","color":"#ffa100","borderRadius":"8px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/6a7b01e5d2e9408f8502853588a2fb65.png) no-repeat center top","borderWidth":"4px","width":"100%","fontSize":"30px","lineHeight":"100px","borderStyle":"solid dashed solid double","fontWeight":"600"}'>社区公告</div>
    <div class="section-content">
      <div class="content-title">{{detail.title}}</div>
      <div class="content-sub-title">发布时间：{{detail.addtime}}</div>
      <el-divider></el-divider>
      <div class="content-detail" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        detail: {},
      }
    },
    created() {
      this.detail = Object.assign({}, JSON.parse(this.$route.query.detailObj));
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .section {
    width: 900px;
    margin: 0 auto;
  }

  .section-content {
      margin-top: 30px;
  }
  .content-title {
      text-align: center;
      font-size: 22px;
      font-weight: bold;
  }
  .content-sub-title {
      text-align: center;
      margin-top: 20px;
      color: #888888;
      font-size: 14px;
  }
</style>