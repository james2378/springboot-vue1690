<template>
<div class="home-preview" :style='{"width":"100%","margin":"0px","flexWrap":"wrap","justifyContent":"space-between","display":"flex"}'>


	<!-- 系统简介 -->
	<div :style='{"border":"1px solid #dfdfdf","padding":"20px","boxShadow":"1px 2px 3px #eee","margin":"40px 0 40px calc(50% - 600px)","overflow":"hidden","borderRadius":"16px","background":"#fff","width":"780px","position":"relative","height":"580px","order":"2"}'>
	  <div :style='{"padding":"0 0 30px","margin":"12px 0 20px 0","color":"#FFA100","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom","width":"100%","lineHeight":"1.5","fontSize":"24px","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0 0 24px 0","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"40%","padding":"0px","float":"right","display":"inline-block","height":"auto"}'>
	    <img :style='{"boxShadow":"1px 1px 1px #ddd","margin":"0px","objectFit":"cover","borderRadius":"8px","display":"block","width":"100%","height":"440px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"boxShadow":"1px 1px 1px #ddd","margin":"0px","objectFit":"cover","borderRadius":"8px","flex":1,"display":"none","width":"265px","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"boxShadow":"1px 1px 1px #ddd","margin":"0px","objectFit":"cover","borderRadius":"8px","flex":1,"display":"none","width":"265px","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"20px 40px 20px 20px","boxShadow":"-8px 8px 0px #f6f6f6,inset 0px 0px 56px 0px #fdfcec","margin":"0 0 0 10px","borderColor":"#ffec9d","color":"#666","float":"left","textIndent":"2em","overflow":"hidden","borderRadius":"8px","top":"150px","background":"none","borderWidth":"3px","width":"460px","lineHeight":"24px","fontSize":"14px","position":"absolute","borderStyle":"double dotted solid double","height":"372px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>

<div class="recommend" :style='{"border":"0px solid #dfdfdf","boxShadow":"0px 0px 0px #eee","margin":"0px 0 0px","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221116/128d20a6d6e849909208616b29db4994.jpg) fixed no-repeat center bottom","width":"100%","height":"auto","order":"1"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","padding":"0 0 30px","margin":"40px 0 24px 0","lineHeight":"1.5","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom"}'>
		<span :style='{"fontSize":"24px","color":"#FFA100","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>超市商品推荐</span>
	</div>
	
	
	<!-- 样式一 -->
	<div class="list list1 index-pv1" :style='{"padding":"20px 20px","margin":"0 auto","borderRadius":"12px","flexWrap":"wrap","background":"none","display":"flex","width":"1200px","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"margin":"0px 0 20px","borderRadius":"8px","background":"none","display":"inline-block","width":"32%","position":"relative","height":"auto"}' v-for="(item,index) in chaoshishangpinRecommend" :key="index" @click="toDetail('chaoshishangpinDetail', item)" class="list-item animation-box">
			<img :style='{"cursor":"pointer","boxShadow":"1px 1px 1px #ddd","padding":"8px","borderColor":"#ffa100","objectFit":"cover","borderRadius":"20%","borderWidth":"3px","background":"#f5f6cb","display":"block","width":"100%","borderStyle":"dotted dashed solid double","height":"274px"}' v-if="preHttp(item.shangpinzhaopian)" :src="item.shangpinzhaopian.split(',')[0]" alt="" />
			<img :style='{"cursor":"pointer","boxShadow":"1px 1px 1px #ddd","padding":"8px","borderColor":"#ffa100","objectFit":"cover","borderRadius":"20%","borderWidth":"3px","background":"#f5f6cb","display":"block","width":"100%","borderStyle":"dotted dashed solid double","height":"274px"}' v-else :src="baseUrl + (item.shangpinzhaopian?item.shangpinzhaopian.split(',')[0]:'')" alt="" />
			<div class="name line1" :style='{"cursor":"pointer","padding":"4px 10px","boxShadow":"0px 2px 0px #f1e288","margin":"4px auto 0 auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","fontStyle":"italic","transform":"rotate(0deg)","overflow":"hidden","borderRadius":"20% ","background":"#fff","width":"76%","lineHeight":"24px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.shangpinmingcheng}}</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	
	<div @click="moreBtn('chaoshishangpin')" :style='{"border":"1px solid #ffa100","cursor":"pointer","boxShadow":"0px 4px 1px #ddd5c6,inset 0px 0px 56px 0px #ffa100","margin":"30px auto 40px","borderRadius":"4px","textAlign":"center","background":"#fff","display":"block","width":"150px","lineHeight":"44px"}'>
		<span :style='{"color":"#fff","fontSize":"16px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#fff","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	
<div class="news" :style='{"border":"0px solid #dfdfdf","padding":"0px","boxShadow":"0px 2px 3px #eee","margin":"20px auto 0px auto","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221116/0c7a84c17e434d23ab0e8817e3db9c50.jpg) fixed no-repeat center top","width":"100%","height":"auto","order":"6"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","padding":"0 0 30px","margin":"40px 0 30px 0","lineHeight":"1.5","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom"}'>
		<span :style='{"fontSize":"24px","color":"#ffa100","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>社区公告</span>
	</div>
	
	
	
	
	
	<!-- 样式四 -->
	<div v-if="newsList.length" class="list list4 index-pv1" :style='{"border":"1px solid #ccc","padding":"20px 10px 30px","margin":"0 auto","borderRadius":"8px","flexWrap":"wrap","background":"rgba(255,255,255,.8)","display":"flex","width":"1200px","justifyContent":"center","height":"auto"}'>
	    <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="new-list-item animation-box" :style='{"cursor":"pointer","width":"390px","padding":"10px","textAlign":"center","background":"none","height":"300px"}'>
			<div :style='{"padding":"0 10px","margin":"0px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"8px 8px 0 0 ","textAlign":"left","background":"radial-gradient(circle, rgba(255,236,157,1) 0%, rgba(255,200,0,1) 100%)","fontSize":"16px","lineHeight":"40px","textOverflow":"ellipsis"}' class="new-list-item-title line1">{{newsList[0].title}}</div>
			<div :style='{"padding":"10px","margin":"0 0 10px","borderColor":"#ffec9d","color":"#666","textAlign":"left","textIndent":"2em","overflow":"hidden","background":"none","borderWidth":"1px","fontSize":"14px","lineHeight":"24px","borderStyle":"solid","height":"212px"}' class="descript  line3">{{newsList[0].introduction}}</div>
			<div :style='{"padding":"8px 12px","margin":"0px auto","color":"#ffa100","borderRadius":"0 0 8px 8px","textAlign":"center","background":"none","display":"inline","width":"auto","fontSize":"14px"}' class="time">{{newsList[0].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[0])" v-if="newsList.length>0" class="new-list-item animation-box" :style='{"border":"1px solid #ffec9d","cursor":"pointer","width":"390px","borderRadius":"8px 8px 0 0","background":"#fff","height":"300px"}'>
			<img :style='{"width":"100%","padding":"10px","objectFit":"cover","borderRadius":"8px","height":"100%"}' :src="baseUrl + newsList[0].picture" alt="">
	    </div>
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new-list-item animation-box" :style='{"cursor":"pointer","width":"390px","padding":"10px","background":"none","height":"300px"}'>
			<div :style='{"padding":"0 10px","margin":"0 0 0px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"8px 8px 0 0 ","textAlign":"left","background":"radial-gradient(circle, rgba(255,236,157,1) 0%, rgba(255,200,0,1) 100%)","fontSize":"16px","lineHeight":"40px","textOverflow":"ellipsis","height":"40px"}' class="new-list-item-title line1">{{newsList[1].title}}</div>
			<div :style='{"padding":"10px","margin":"0 0 10px","borderColor":"#ffec9d","overflow":"hidden","color":"#666","borderWidth":"1px","fontSize":"14px","lineHeight":"24px","borderStyle":"solid","textIndent":"2em","height":"212px"}' class="descript  line3">{{newsList[1].introduction}}</div>
			<div :style='{"color":"#ffa100","textAlign":"center","fontSize":"14px"}' class="time">{{newsList[1].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[1])" v-if="newsList.length>1" class="new-list-item animation-box" :style='{"cursor":"pointer","border":"1px solid #ffec9d","width":"390px","borderRadius":"8px 0 8px 8px","background":"#fff","height":"300px"}'>
			<img :style='{"width":"100%","padding":"10px","objectFit":"cover","borderRadius":"8px","height":"100%"}' :src="baseUrl + newsList[1].picture" alt="">
	    </div>
	    <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new-list-item animation-box" :style='{"cursor":"pointer","width":"390px","padding":"10px","background":"none","height":"300px"}'>
			<div :style='{"padding":"0 10px","margin":"0 0 0px","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"8px 8px 0 0 ","textAlign":"left","background":"radial-gradient(circle, rgba(255,236,157,1) 0%, rgba(255,200,0,1) 100%)","fontSize":"16px","lineHeight":"40px","textOverflow":"ellipsis","height":"40px"}' class="new-list-item-title  line1">{{newsList[2].title}}</div>
			<div :style='{"padding":"10px","margin":"0 0 10px","borderColor":"#ffec9d","overflow":"hidden","color":"#666","borderWidth":"1px","fontSize":"14px","lineHeight":"24px","borderStyle":"solid","height":"212px"}' class="descript  line3">{{newsList[2].introduction}}</div>
			<div :style='{"color":"#ffa100","textAlign":"center","fontSize":"14px"}' class="time">{{newsList[2].addtime}}</div>
	    </div>
	    <div @click="toDetail('newsDetail', newsList[2])" v-if="newsList.length>2" class="new-list-item animation-box" :style='{"cursor":"pointer","border":"1px solid #ffec9d","width":"390px","borderRadius":"0 8px 8px 8px","background":"#fff","height":"300px"}'>
			<img :style='{"width":"100%","padding":"10px","objectFit":"cover","borderRadius":"8px","height":"100%"}' :src="baseUrl + newsList[2].picture" alt="">
	    </div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"1px solid #ffa100","cursor":"pointer","boxShadow":"0px 4px 1px #ddd5c6,inset 0px 0px 56px 0px #ffa100","margin":"42px auto","borderRadius":"4px","textAlign":"center","background":"none","display":"block","width":"150px","lineHeight":"44px"}'>
		<span :style='{"color":"#fff","fontSize":"16px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#fff","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>


<div class="lists" :style='{"border":"0px solid #dfdfdf","padding":"0 12px 20px 12px","boxShadow":"0px 0px 0px #eee","margin":"0px","overflow":"hidden","borderRadius":"0px","background":"#f9f9f9","width":"100%","height":"auto","order":"8"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","padding":"0 0 30px","margin":"30px 0 20px 0","lineHeight":"1.5","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom"}'>
	  <span :style='{"fontSize":"24px","color":"#ffa100","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>动物信息展示</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div class="swiper-container" id="listsdongwuxinxi" :style='{"padding":"20px 10px","borderColor":"#ffa100","borderRadius":"12px","background":"#fff","borderWidth":"4px","width":"1200px","borderStyle":"solid double solid double","height":"auto"}'>
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","fontSize":"0","position":"relative","borderRadius":"4px","background":"#fff"}' v-for="(item,index) in dongwuxinxiList" :key="index" @click="toDetail('dongwuxinxiDetail', item)">
					<img :name="item.id" :style='{"border":"0","boxShadow":"1px 1px 1px #ddd","padding":"8px","margin":"0 20px 4px 0","borderColor":"#ffa100","borderRadius":"20%","borderWidth":"3px","width":"90%","borderStyle":"dotted dashed solid double","height":"200px"}' v-if="preHttp(item.dongwuzhaopian)" :src="item.dongwuzhaopian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","boxShadow":"1px 1px 1px #ddd","padding":"8px","margin":"0 20px 4px 0","borderColor":"#ffa100","borderRadius":"20%","borderWidth":"3px","width":"90%","borderStyle":"dotted dashed solid double","height":"200px"}' v-else :src="baseUrl + (item.dongwuzhaopian?item.dongwuzhaopian.split(',')[0]:'')" alt="" />
					<div class="name line1" :style='{"padding":"0 10px","boxShadow":"0px 1px 0px #f1e288","margin":"4px auto 0 auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderRadius":"20%","background":"#f6f6f6","width":"75%","fontSize":"14px","lineHeight":"32px","textOverflow":"ellipsis"}'>{{item.dongwumingcheng}}</div>
            </div>
        </div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('dongwuxinxi')" :style='{"border":"1px solid #ffa100","cursor":"pointer","boxShadow":"0px 4px 1px #ddd5c6,inset 0px 0px 56px 0px #ffa100","margin":"36px auto 20px","borderRadius":"4px","textAlign":"center","background":"#fff","display":"block","width":"150px","lineHeight":"44px"}'>
		<span :style='{"color":"#fff","fontSize":"16px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#fff","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>
<div class="lists" :style='{"border":"0px solid #dfdfdf","padding":"0 12px 20px 12px","boxShadow":"0px 0px 0px #eee","margin":"0px","overflow":"hidden","borderRadius":"0px","background":"#f9f9f9","width":"100%","height":"auto","order":"8"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","padding":"0 0 30px","margin":"30px 0 20px 0","lineHeight":"1.5","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom"}'>
	  <span :style='{"fontSize":"24px","color":"#ffa100","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>房屋信息展示</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div class="swiper-container" id="listsfangwuxinxi" :style='{"padding":"20px 10px","borderColor":"#ffa100","borderRadius":"12px","background":"#fff","borderWidth":"4px","width":"1200px","borderStyle":"solid double solid double","height":"auto"}'>
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","fontSize":"0","position":"relative","borderRadius":"4px","background":"#fff"}' v-for="(item,index) in fangwuxinxiList" :key="index" @click="toDetail('fangwuxinxiDetail', item)">
					<img :name="item.id" :style='{"border":"0","boxShadow":"1px 1px 1px #ddd","padding":"8px","margin":"0 20px 4px 0","borderColor":"#ffa100","borderRadius":"20%","borderWidth":"3px","width":"90%","borderStyle":"dotted dashed solid double","height":"200px"}' v-if="preHttp(item.fangwutupian)" :src="item.fangwutupian.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","boxShadow":"1px 1px 1px #ddd","padding":"8px","margin":"0 20px 4px 0","borderColor":"#ffa100","borderRadius":"20%","borderWidth":"3px","width":"90%","borderStyle":"dotted dashed solid double","height":"200px"}' v-else :src="baseUrl + (item.fangwutupian?item.fangwutupian.split(',')[0]:'')" alt="" />
					<div class="name line1" :style='{"padding":"0 10px","boxShadow":"0px 1px 0px #f1e288","margin":"4px auto 0 auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderRadius":"20%","background":"#f6f6f6","width":"75%","fontSize":"14px","lineHeight":"32px","textOverflow":"ellipsis"}'>{{item.fangwumingcheng}}</div>
            </div>
        </div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('fangwuxinxi')" :style='{"border":"1px solid #ffa100","cursor":"pointer","boxShadow":"0px 4px 1px #ddd5c6,inset 0px 0px 56px 0px #ffa100","margin":"36px auto 20px","borderRadius":"4px","textAlign":"center","background":"#fff","display":"block","width":"150px","lineHeight":"44px"}'>
		<span :style='{"color":"#fff","fontSize":"16px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#fff","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>
<div class="lists" :style='{"border":"0px solid #dfdfdf","padding":"0 12px 20px 12px","boxShadow":"0px 0px 0px #eee","margin":"0px","overflow":"hidden","borderRadius":"0px","background":"#f9f9f9","width":"100%","height":"auto","order":"8"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","padding":"0 0 30px","margin":"30px 0 20px 0","lineHeight":"1.5","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom"}'>
	  <span :style='{"fontSize":"24px","color":"#ffa100","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>物业人员展示</span>
	</div>
	
	
	
	
	<!-- 样式三 -->
	<div class="list list3 index-pv1">
		<div class="swiper-container" id="listswuyerenyuan" :style='{"padding":"20px 10px","borderColor":"#ffa100","borderRadius":"12px","background":"#fff","borderWidth":"4px","width":"1200px","borderStyle":"solid double solid double","height":"auto"}'>
			<div class="swiper-wrapper">
				<div class="swiper-slide animation-box" :style='{"border":"0","cursor":"pointer","fontSize":"0","position":"relative","borderRadius":"4px","background":"#fff"}' v-for="(item,index) in wuyerenyuanList" :key="index" @click="toDetail('wuyerenyuanDetail', item)">
					<img :name="item.id" :style='{"border":"0","boxShadow":"1px 1px 1px #ddd","padding":"8px","margin":"0 20px 4px 0","borderColor":"#ffa100","borderRadius":"20%","borderWidth":"3px","width":"90%","borderStyle":"dotted dashed solid double","height":"200px"}' v-if="preHttp(item.touxiang)" :src="item.touxiang.split(',')[0]" alt="" />
					<img :name="item.id" :style='{"border":"0","boxShadow":"1px 1px 1px #ddd","padding":"8px","margin":"0 20px 4px 0","borderColor":"#ffa100","borderRadius":"20%","borderWidth":"3px","width":"90%","borderStyle":"dotted dashed solid double","height":"200px"}' v-else :src="baseUrl + (item.touxiang?item.touxiang.split(',')[0]:'')" alt="" />
					<div class="name line1" :style='{"padding":"0 10px","boxShadow":"0px 1px 0px #f1e288","margin":"4px auto 0 auto","whiteSpace":"nowrap","color":"#333","textAlign":"center","overflow":"hidden","borderRadius":"20%","background":"#f6f6f6","width":"75%","fontSize":"14px","lineHeight":"32px","textOverflow":"ellipsis"}'>{{item.xingming}}</div>
            </div>
        </div>
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>
	
	
	
	
	
	
	
	<div @click="moreBtn('wuyerenyuan')" :style='{"border":"1px solid #ffa100","cursor":"pointer","boxShadow":"0px 4px 1px #ddd5c6,inset 0px 0px 56px 0px #ffa100","margin":"36px auto 20px","borderRadius":"4px","textAlign":"center","background":"#fff","display":"block","width":"150px","lineHeight":"44px"}'>
		<span :style='{"color":"#fff","fontSize":"16px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#fff","fontSize":"16px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


	<!-- 关于我们 -->
	<div :style='{"border":"0px solid #dfdfdf","padding":"20px","boxShadow":"0px 0px 0px #eee","margin":"30px calc(50% - 600px) 0px 0","overflow":"hidden","borderRadius":"16px","background":"#fff","width":"400px","height":"600px","order":"2"}'>
	  <div :style='{"padding":"0 0 30px","margin":"12px 0 20px 0","color":"#FFA100","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221116/5fc6dea31a6b44c48f3b249bafc81705.png) no-repeat center bottom","width":"100%","lineHeight":"1.5","fontSize":"24px","textShadow":"2px 4px 2px #eee","fontWeight":"bold"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"margin":"0 0 24px 0","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"16px"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0px","float":"left","display":"inline-block","height":"auto"}'>
	    <img :style='{"boxShadow":"1px 1px 1px #ddd","margin":"0px","objectFit":"cover","borderRadius":"8px","display":"block","width":"100%","float":"left","height":"170px"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0 0px","objectFit":"cover","borderRadius":"8px","display":"none","width":"48%","float":"right","height":"170px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"12px","boxShadow":"-8px 8px 0px #f6f6f6","margin":"20px 0 0 0","borderColor":"#ffec9d","color":"rgb(102, 102, 102)","display":"inline-block","float":"right","textIndent":"2em","overflow":"hidden","borderRadius":"8px","background":"#fdfcec","borderWidth":"3px","width":"100%","lineHeight":"24px","fontSize":"14px","borderStyle":"double dotted solid double","height":"280px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        chaoshishangpinRecommend: [],

        dongwuxinxiList: [],
        fangwuxinxiList: [],
        wuyerenyuanList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 6,
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "chaoshishangpin/autoSort";
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.chaoshishangpinRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			this.$http.get('dongwuxinxi/list', {params: {
				page: 1,
				limit: 12,
			}}).then(res => {
				if (res.data.code == 0) {
					this.dongwuxinxiList = res.data.data.list;
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"4","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper ('#listsdongwuxinxi', options)
					})
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('fangwuxinxi/list', {params: {
				sort : 'faburiqi',
				order: 'desc',
				page: 1,
				limit: 12,
			}}).then(res => {
				if (res.data.code == 0) {
					this.fangwuxinxiList = res.data.data.list;
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"4","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper ('#listsfangwuxinxi', options)
					})
					
					// 商品列表样式五
					
				}
			});
			this.$http.get('wuyerenyuan/list', {params: {
				page: 1,
				limit: 12,
			}}).then(res => {
				if (res.data.code == 0) {
					this.wuyerenyuanList = res.data.data.list;
					let options = {"observer":true,"navigation":{"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},"observeParents":true,"loop":true,"slidesPerView":"4","speed":500,"spaceBetween":20,"autoplay":{"delay":3000,"disableOnInteraction":false}}
					options.pagination = {el:'null'}
					if(options.slidesPerView) {
						options.slidesPerView = Number(options.slidesPerView);
					}
					if(options.spaceBetween) {
						options.spaceBetween = Number(options.spaceBetween);
					}
					this.$nextTick(() => {
						new Swiper ('#listswuyerenyuan', options)
					})
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				filter: brightness(1.1);
				transform: rotate(1deg)  scale(0.99);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: all 0.3s ease-in-out 0s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				filter: brightness(1.1);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: all 0.3s ease-in-out 0s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: #ffa100;
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: #ffa100;
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				opacity: 0.75;
				transition: all 0.3s ease-in-out 0s;
			}
		}
	}
</style>
