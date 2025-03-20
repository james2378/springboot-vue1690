<template>
<div :style='{"border":"1px solid #ddd","padding":"20px","margin":"20px auto 0","borderRadius":"16px","background":"#fff","width":"1200px","position":"relative"}'>
    <el-form
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="缴费编号" prop="jiaofeibianhao">
              <el-input v-model="ruleForm.jiaofeibianhao" placeholder="缴费编号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="缴费标题" prop="jiaofeibiaoti">
            <el-input v-model="ruleForm.jiaofeibiaoti" 
                placeholder="缴费标题" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="登记时间" prop="dengjishijian" >
              <el-date-picker
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.dengjishijian" 
                  type="date"
                  placeholder="登记时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}'  label="缴费类型" prop="jiaofeileixing">
            <el-select v-model="ruleForm.jiaofeileixing" placeholder="请选择缴费类型"  >
              <el-option
                  v-for="(item,index) in jiaofeileixingOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="缴费金额" prop="jiaofeijine">
            <el-input v-model="ruleForm.jiaofeijine" 
                placeholder="缴费金额" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="用户账号" prop="yonghuzhanghao">
            <el-select  @change="yonghuzhanghaoChange" v-model="ruleForm.yonghuzhanghao" placeholder="请选择用户账号">
              <el-option
                  v-for="(item,index) in yonghuzhanghaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="用户姓名" prop="yonghuxingming">
            <el-input v-model="ruleForm.yonghuxingming" 
                placeholder="用户姓名" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="房屋号" prop="fangwuhao">
            <el-input v-model="ruleForm.fangwuhao" 
                placeholder="房屋号" clearable ></el-input>
          </el-form-item>
          <el-form-item :style='{"border":"1px solid #dfdfdf","padding":"10px","boxShadow":"1px 2px 3px #eee","margin":"0 0 8px 0","borderRadius":"8px","background":"linear-gradient(180deg, rgba(254,244,218,1) 0%, rgba(254,244,218,1) 51%, rgba(255,234,178,1) 51%, rgba(255,234,178,1) 100%)"}' label="缴费清单" prop="jiaofeiqingdan">
            <editor 
                :style='{"minHeight":"300px","padding":"0","margin":"0","borderColor":"#ccc","backgroundColor":"#f9f9f9","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.jiaofeiqingdan" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"20px 0 20px 0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","boxShadow":"1px 2px 3px #aaa","margin":"0 20px 0 0","color":"#666","outline":"none","borderRadius":"20px","background":"radial-gradient(circle, rgba(255,236,157,1) 0%, rgba(255,200,0,1) 100%)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #bbb","cursor":"pointer","padding":"0","boxShadow":"1px 2px 6px #ccc","margin":"0","color":"#999","outline":"none","borderRadius":"20px","background":"#fff","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            jiaofeibianhao : false,
            jiaofeibiaoti : false,
            dengjishijian : false,
            jiaofeileixing : false,
            jiaofeijine : false,
            jiaofeiqingdan : false,
            yonghuzhanghao : false,
            yonghuxingming : false,
            fangwuhao : false,
            ispay : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          jiaofeibianhao: this.getUUID(),
          jiaofeibiaoti: '',
          dengjishijian: '',
          jiaofeileixing: '',
          jiaofeijine: '',
          jiaofeiqingdan: '',
          yonghuzhanghao: '',
          yonghuxingming: '',
          fangwuhao: '',
          ispay: '',
        },
        jiaofeileixingOptions: [],
        yonghuzhanghaoOptions: [],
        rules: {
          jiaofeibianhao: [
          ],
          jiaofeibiaoti: [
          ],
          dengjishijian: [
          ],
          jiaofeileixing: [
          ],
          jiaofeijine: [
            { validator: this.$validate.isNumber, trigger: 'blur' },
          ],
          jiaofeiqingdan: [
          ],
          yonghuzhanghao: [
          ],
          yonghuxingming: [
          ],
          fangwuhao: [
          ],
          ispay: [
          ],
        },
      };
    },
    computed: {



    },
    created() {
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.dengjishijian = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='jiaofeibianhao'){
              this.ruleForm.jiaofeibianhao = obj[o];
              this.ro.jiaofeibianhao = true;
              continue;
            }
            if(o=='jiaofeibiaoti'){
              this.ruleForm.jiaofeibiaoti = obj[o];
              this.ro.jiaofeibiaoti = true;
              continue;
            }
            if(o=='dengjishijian'){
              this.ruleForm.dengjishijian = obj[o];
              this.ro.dengjishijian = true;
              continue;
            }
            if(o=='jiaofeileixing'){
              this.ruleForm.jiaofeileixing = obj[o];
              this.ro.jiaofeileixing = true;
              continue;
            }
            if(o=='jiaofeijine'){
              this.ruleForm.jiaofeijine = obj[o];
              this.ro.jiaofeijine = true;
              continue;
            }
            if(o=='jiaofeiqingdan'){
              this.ruleForm.jiaofeiqingdan = obj[o];
              this.ro.jiaofeiqingdan = true;
              continue;
            }
            if(o=='yonghuzhanghao'){
              this.ruleForm.yonghuzhanghao = obj[o];
              this.ro.yonghuzhanghao = true;
              continue;
            }
            if(o=='yonghuxingming'){
              this.ruleForm.yonghuxingming = obj[o];
              this.ro.yonghuxingming = true;
              continue;
            }
            if(o=='fangwuhao'){
              this.ruleForm.fangwuhao = obj[o];
              this.ro.fangwuhao = true;
              continue;
            }
          }
        }
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });
        this.jiaofeileixingOptions = "电费,水费,天然气,供暖费,其他".split(',')
        this.$http.get('option/yonghu/yonghuzhanghao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.yonghuzhanghaoOptions = res.data.data;
          }
        });
      },
      // 下二随
      yonghuzhanghaoChange () {
        this.$http.get('follow/yonghu/yonghuzhanghao?columnValue=' + this.ruleForm.yonghuzhanghao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.yonghuxingming){
              this.ruleForm.yonghuxingming = res.data.data.yonghuxingming
            }
            if(res.data.data.fangwuhao){
              this.ruleForm.fangwuhao = res.data.data.fangwuhao
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info(id) {
        this.$http.get('jiaofeixinxi/detail/${id}', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('jiaofeixinxi/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post('jiaofeixinxi/add', this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post('jiaofeixinxi/add', this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #999;
	  background: #fff;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px solid #ccc;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #999;
	  background: #f9f9f9;
	  width: 200px;
	  font-size: 32px;
	  line-height: 120px;
	  text-align: center;
	  height: auto;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #999;
	  background: #f9f9f9;
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	}
</style>
