<!--投诉详情-->
<template>
    <div class="complaintDetail">
      <div class="firstContent">
        <van-row class="topMsg">
          <van-col span="6">订单号</van-col>
          <van-col span="18">BX201908081222</van-col>
        </van-row>
        <van-row class="bottomMsg">
          <van-col span="6">投诉类型</van-col>
          <van-col span="18">类型名称</van-col>
        </van-row>
      </div>
      <div class="secondContent">
        <div class="msg">幸福家园_C7栋29_A21</div>
      </div>
      <div class="thirdContent">
        <div class="info">
          <van-row>
            <van-col span="6" class="name">姓名</van-col>
            <van-col span="18">
              <div class="myInfo">杨某某 13888888888</div>
              <div class="myContent">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
              <div class="myRecording">
                <van-button type="info">录音内容</van-button>
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="picture">
          <div v-for="item in src">
            <img :src="item" alt="">
          </div>
        </div>
        <div class="handleMsg">
          <van-row>
            <van-col span="18">
              <div class="update">更新：工作人员已在来得路上进行处理<br/> 20192020 02:02</div>
              <div class="assistPerson">协助人：张三丰</div>
              <div class="handlePerson">处理人：张无忌</div>
            </van-col>
            <van-col span="6" class="name">
              <van-button type="info" size="small" class="handleBtn">处理中</van-button>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="fourthContent">
        <div class="list">
          <ul>
            <li>
              <van-row>
                <van-col span="4">
                  <div style="font-size: 14px">12-20</div>
                  <div style="font-size: 12px">11:50</div>
                </van-col>
                <van-col span="2" style="text-align: center">
                  <van-icon name="passed"/>
                  <div style="width: 1px; height: 25px; background: #999999;"></div>
                </van-col>
                <van-col span="18" style="text-align: left">
                  <div style="font-size: 14px">发起 业主彭于晏发起</div>
                  <span style="font-size: 12px; color: #0099FF">胡歌</span>
                  <span style="font-size: 12px; color: #999999">已处理</span>
                </van-col>
              </van-row>
            </li>
          </ul>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "complaintDetail",
      data(){
          return{
            src:[
              'http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658',
              'http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658',
              'http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658'
            ],
          }
      }
    }
</script>

<style lang="less">
  .complaintDetail{
    width: 100vw;
    height: 100vh;
    background-color: #F7F7F7;
  }
  .firstContent{
    height: 85px;
    background-color: #ffffff;
    padding: 0 18px 0 18px;
    margin-bottom: 8px;
    line-height: 42.5px;
    .topMsg{
      text-align: left;
      color: #999999;
      font-size: 14px;
    }
    .bottomMsg{
      text-align: left;
      color: #999999;
      font-size: 14px;
    }
  }
  .secondContent{
    height: 50px;
    background-color: #ffffff;
    line-height: 50px;
    margin-bottom: 8px;
    .msg{
      color: #0099FF;
      font-size: 14px;
    }
  }
  .thirdContent{
    background-color: #ffffff;
    padding: 0 18px 15px 18px;
    margin-bottom: 8px;
    .info{
      padding-top: 15px;
      .name{
        color: #999999;
        font-size: 14px;
        text-align: left;
      }
      .myInfo{
        color: #262626;
        font-size: 14px;
        text-align: left;
        margin-bottom: 15px;
      }
      .myContent{
        color: #262626;
        font-size: 14px;
        text-align: left;
        margin-bottom: 14px;
      }
      .myRecording{
        text-align: left;
        margin-bottom: 32px;
      }
    }
    .picture{
      display: flex;
      justify-content: space-between;
      img{
        width: 95%;
        height: 106px;
      }
    }
    .handleMsg{
      height: 118px;
      text-align: left;
      background-color: rgba(59,154,237,0.05);
      margin-top: 15px;
      .update{
        color: #0099FF;
        font-size: 12px;
        margin: 15px 0 0 14px;
      }
      .assistPerson{
        color: #0099FF;
        font-size: 12px;
        margin: 10px 0 0 14px;
      }
      .handlePerson{
        color: #0099FF;
        font-size: 12px;
        margin: 10px 0 0 14px;
      }
      .handleBtn{
        margin-top: 15px;
      }
    }
  }
  .fourthContent{
    background-color: #ffffff;
    padding-top: 13px;
    margin-top: 8px;
    .list{

    }
  }
</style>
