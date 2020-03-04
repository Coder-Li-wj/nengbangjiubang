<!--咨询-->
<template>
  <div class="consult">
    <div class="search">
      <van-search placeholder="搜索" v-model="value" shape="round"/>
    </div>
<!--    <div class="interval"></div>-->
    <div class="list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
        <div class="listContent" v-for="item in list">
          <div @click="toDetails">
            <div class="listTop">{{ item.desc }}</div>
            <div class="listBottom">
              <span>{{ item.brief }}</span>
              <span>{{ item.date }}</span>
            </div>
          </div>
        </div>
      </van-pull-refresh>

    </div>
  </div>
</template>

<script>
  // import  {post}  from '@/utils/request/index'

  export default {
    name: "dynamic",
    data() {
      return {
        value:'',
        count: 0,
        isLoading: false,
        list:[
          {desc:'问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述', brief:'回答简介内容超过20个字符合', date:'08-01'},
          {desc:'问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述', brief:'回答简介内容超过20个字符合', date:'08-01'},
          {desc:'问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述', brief:'回答简介内容超过20个字符合', date:'08-01'},
          {desc:'问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述', brief:'回答简介内容超过20个字符合', date:'08-01'},
          {desc:'问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述', brief:'回答简介内容超过20个字符合', date:'08-01'},
          {desc:'问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述', brief:'回答简介内容超过20个字符合', date:'08-01'}
        ]
      }
    },
    created() {
      // this.searchByParentId();
    },
    methods:{
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      toDetails(){
        this.$router.push({path:'/consultDetail'})
      },
    }
  }
</script>

<style lang="less" scoped>
  .consult{
    height: 100vh;
    background-color: #F7F7F7;
    .search{
      width: 100%;
      height: 54px;
      margin-bottom: 8px;
    }
    /*.interval{*/
    /*  height: 8px;*/
    /*  background-color: #F7F7F7;*/
    /*}*/
    .list{
      /*height: 100vh;*/
      height: calc(100% - 62px);
      .listContent{
        margin-bottom: 8px;
        background-color: #ffffff;
        /*width: 100%;*/
        padding: 15px 18px 15px 18px;
        .listTop{
          text-align: left;
          font-size: 14px;
          color: #333333;
        }
        .listBottom{
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          color: #999999;
          font-size: 12px;
        }
      }
    }
  }



  .dynamic {
    background-color: #eeeeee;
    /*height: 100vh;*/
    .body {
      margin:10px 10px 0;
      display: flex;
      flex-wrap: wrap;
      ul{
        width: 100%;
        height: 100vh;
        li {
          position: relative;
          height: 100.5px;
          margin-bottom: 10px;
          background-color: #fff;
          .card {
            display: flex;
            img {
              border-radius: 5px;
              height: 100px;
              width: 100px;
              float: left;
            }
            p {
              margin: 9px auto 0 13px;
              /*margin-left: 13px;
              margin-bottom: 0px;*/
              font-size: 15px;
            }
            h4 {
              font-family: PingFang-SC-Bold;
              /*margin: 5px 13px 9px 0;*/
              margin-left: 13px;
              margin-top: 10px;
              text-align: left;
              color: #ccc;
              font-size: 13px;
            }
            h6 {
              position: absolute;
              /*margin: 0 15.5px 11.5px 0;*/
              margin: 0;
              right: 15.5px;
              top: 76.5px;
              text-align: right;
              color: #ccc;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
</style>
