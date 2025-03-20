<template>
<div class="content" :style='{"padding":"30px"}'>
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"margin":"0 10px","backgroundSize":"100% 100%","borderRadius":"4px","backgroundImage":"url(http://codegen.caihongy.cn/20220723/ff2ae1bd505548269a186d1cbb798bf4.png)","display":"flex"}' v-if="isAuth('dongwuxinxi','首页总数')">
				<div :style='{"background":"red"}'></div>
				<div :style='{"width":"160px","padding":"10px 0","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{dongwuxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>动物信息总数</div>
				</div>
			</div>
			<div :style='{"margin":"0 10px","backgroundSize":"100% 100%","borderRadius":"4px","backgroundImage":"url(http://codegen.caihongy.cn/20220723/ff2ae1bd505548269a186d1cbb798bf4.png)","display":"flex"}' v-if="isAuth('cheweixinxi','首页总数')">
				<div :style='{"background":"red"}'></div>
				<div :style='{"width":"160px","padding":"10px 0","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{cheweixinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>车位信息总数</div>
				</div>
			</div>
			<div :style='{"margin":"0 10px","backgroundSize":"100% 100%","borderRadius":"4px","backgroundImage":"url(http://codegen.caihongy.cn/20220723/ff2ae1bd505548269a186d1cbb798bf4.png)","display":"flex"}' v-if="isAuth('dingdanxinxi','首页总数')">
				<div :style='{"background":"red"}'></div>
				<div :style='{"width":"160px","padding":"10px 0","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{dingdanxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>订单信息总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('dongwuxinxi','首页统计')">
                <div id="dongwuxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('cheweixinxi','首页统计')">
                <div id="cheweixinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('dingdanxinxi','首页统计')">
                <div id="dingdanxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//3
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            dongwuxinxiCount: 0,
            cheweixinxiCount: 0,
            dingdanxinxiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getdongwuxinxiCount();
    this.dongwuxinxiChat1();
    this.getcheweixinxiCount();
    this.cheweixinxiChat1();
    this.getdingdanxinxiCount();
    this.dingdanxinxiChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getdongwuxinxiCount() {
        this.$http({
            url: `dongwuxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.dongwuxinxiCount = data.data
            }
        })
    },

    dongwuxinxiChat1() {
      this.$nextTick(()=>{

        var dongwuxinxiChart1 = echarts.init(document.getElementById("dongwuxinxiChart1"),'macarons');
        this.$http({
            url: "dongwuxinxi/group/dongwuzhonglei",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].dongwuzhonglei);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].dongwuzhonglei
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '动物种类统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                dongwuxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    dongwuxinxiChart1.resize();
                };
            }
        });
      })
    },






    getcheweixinxiCount() {
        this.$http({
            url: `cheweixinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.cheweixinxiCount = data.data
            }
        })
    },

    cheweixinxiChat1() {
      this.$nextTick(()=>{
        // biaoti biaoti
        //  cheweiyuliang

        var cheweixinxiChart1 = echarts.init(document.getElementById("cheweixinxiChart1"),'macarons');
        this.$http({
            url: `cheweixinxi/value/biaoti/cheweiyuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].biaoti);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].biaoti
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '车位统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                        areaStyle: {},
                        smooth: true
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                cheweixinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    cheweixinxiChart1.resize();
                };
            }
        });
      })
    },






    getdingdanxinxiCount() {
        this.$http({
            url: `dingdanxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.dingdanxinxiCount = data.data
            }
        })
    },

    dingdanxinxiChat1() {
      this.$nextTick(()=>{
        // shangpinmingcheng shangpinmingcheng
        //  zongjine

        var dingdanxinxiChart1 = echarts.init(document.getElementById("dingdanxinxiChart1"),'macarons');
        this.$http({
            url: `dingdanxinxi/value/shangpinmingcheng/zongjine`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].shangpinmingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].shangpinmingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '销售额统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                dingdanxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    dingdanxinxiChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
