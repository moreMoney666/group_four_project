<template>
    <div class="time-line">
    <header class="stroey-title">
      <div class="icon">
        <a
          href="//www.bilibili.com/anime/?spm_id_from=333.851.b_62696c695f7265706f72745f616e696d65.1"
          target="_blank"
          class="name"
          >番剧</a>
        <div class="tab-switch">
          <div :class="{'tab-switch-item':true,'on':number===-1}" @click="getupdateData(0)">最新</div>
          <div :class="{'tab-switch-item':true,'on':number===index}" v-for="(item, index) in weekList" :key="index" @click="getupdateData(index+1)">
            {{item.title}}
          </div>
          <!-- <div :class="['tab-switch-item',number===index?'on':'' ]"  v-for="(item, index) in weekList" :key="index" @click="getupdateData(index+1)">
            {{item.title}}
          </div> -->
        </div>
      </div>
      <a href="##" target="_blank" class="tl-link">新番时间表></a>
    </header>
    <div class="list-box">
      <div
        class="line-card"
        v-for="(item, index) in Bangumilist"
        :key="item.episode_id"
      >
        <a href="javascript:;" target="_blank" :title="item.title" class="pic">
          <img v-lazy="item.square_cover" alt="" />
        </a>
        <div class="txt">
          <span class="txt1">{{ item.title }}</span>
          <p class="update">{{item.pub_index}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from '@/ajax/ajax'
export default {
  name: 'BangumiLeft',
  data() {
      return {
          Bangumilist:[],
          weekListData:[],
          number:-1,
          weekList:[{title:'周一',id:'1'},{title:'周二',id:'2'},{title:'周三',id:'3'},{title:'周四',id:'4'},{title:'周五',id:'5'},{title:'周六',id:'6'},{title:'周日',id:'7'}]
      }
  },
  mounted(){
      this.getBangumi();
  },
  methods:{
      async getBangumi(){
          const result = await ajax.get("/anime/timeline")
        //   console.log(result.latest)
          this.Bangumilist = result.latest;
          console.log(this.Bangumilist)
          this.weekListData = result.timeline
      },
      getupdateData(index){
        //   console.log(111)
        this.number=index-1
        // console.log(this.number)
        if (index===0) {
            console.log(111)
            this.getBangumi()
        }else{
            console.log(111)
            let updataList = this.weekListData.filter(item=>item.day_of_week===index)
            this.Bangumilist=updataList[0].episodes
        }     
    }
  }
}
</script>

<style lang="less" scoped>
.Bangumi .space-between .time-line {
  width: 820px;
  height: 428px;
}
.icon .svg-icon {
  width: 36px;
  height: 36px;
}
.Bangumi .stroey-title {
  display: flex;
  justify-content: space-between;
}
.Bangumi .stroey-title .icon {
  display: flex;
}
.Bangumi .stroey-title .tl-link {
  width: 112px;
  height: 30px;
  line-height: 28px;
  border: 1px solid #00a1d6;
  border-radius: 2px;
  text-align: center;
  padding: 0 0 0 14px;
  font-size: 16px;
  align-items: center;
  color: #00a1d6;
  text-decoration: none;
}
.Bangumi .stroey-title .tl-link:hover {
  color: white !important;
  background: #00a1d6;
  transition: all 0.2s;
}
.Bangumi .stroey-title .icon .tab-switch {
  margin-left: 4px;
  display: flex;
  width: 416px;
}
.Bangumi .stroey-title .icon .tab-switch .on {
  border-bottom: 1px, solid, #00a1d6;
  color: #00a1d6;
  border-bottom: 1px solid #00a1d6;
}
.Bangumi .stroey-title .icon .tab-switch .tab-switch-item {
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  margin-right: 24px;
  cursor: pointer;
  color: #505050;
}
.Bangumi .stroey-title .icon .tab-switch .on {
  color: #00a1d6;
}
.Bangumi .stroey-title .name {
  font-size: 20px;
  margin: 0 20px 0 2px;
  line-height: 36px;
  color: #505050;
  text-decoration: none;
}
.Bangumi .stroey-title .icon .tab-switch {
  display: flex;
}
/*图片 */
.Bangumi .time-line .list-box {
  width: 820px;
  height: 376px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  justify-content: flex-start;
  margin-top: 10px;
}
.Bangumi .time-line .list-box .line-card {
  margin: 5px 30px 24px 0 !important;
  width: 227px;
  height: 70px;
  display: flex;
}
.Bangumi .time-line .list-box .line-card .pic {
  height: 70px;
  width: 70px;
}
.Bangumi .time-line .list-box .line-card .pic img {
  height: 70px;
  width: 70px;
  border-radius: 2px;
  display: block;
}
.Bangumi .time-line .list-box .line-card .txt {
  width: 145px;
  font-weight: 500;
  margin-left: 10px;
}
.Bangumi .time-line .list-box .line-card .txt .txt1 {
  font-size: 14px;
  height: 37px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 2px 0 12px;
  cursor: pointer;
}
.Bangumi .time-line .list-box .line-card .txt .txt1:hover {
  color: #00a1d6;
  transform: all 0.2s;
}
.Bangumi .time-line .list-box .line-card .txt .update {
  font-size: 10px;
  color: #00a1d6;
}
</style>
