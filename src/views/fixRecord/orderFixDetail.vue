<!--维修详情：待接单页面-->
<template>
  <div class="orderFixDetail">
    <div class="top">
      <div class="firstMsg">
        <van-row>
          <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
          <van-col span="10" class="complaintType">投诉类型：类型名称</van-col>
        </van-row>
      </div>
      <div class="secondMsg">
        <van-row>
          <van-col span="14">
            <div style="margin-bottom: 5px">幸福家园_C7栋29_A21</div>
            <div >姓名 杨** 138********</div>
          </van-col>
          <van-col span="10" style="text-align: center">
            <van-button type="danger" size="small">平台无偿单抢修</van-button>
          </van-col>
        </van-row>
      </div>
      <div class="thirdMsg">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
      <div class="fourthMsg">
        <div v-for="item in src">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="fifthMsg">
        <div class="myRecording">
          <van-button type="info">录音内容</van-button>
        </div>
      </div>
      <div class="sixthMsg">
        <div class="handleMsg">
          <van-row>
            <van-col span="18">
              <div class="update">更新：工作人员已在来得路上进行处理<br/> 20192020 02:02</div>
              <div class="assistPerson">协助人：张三丰</div>
              <div class="handlePerson">处理人：张无忌</div>
              <div class="handleTime">要求处理时间：20200202 20:20</div>
            </van-col>
            <van-col span="6" class="name" style="text-align: right">
              <van-button type="danger" size="small" class="handleBtn">待处理</van-button>
              <div class="price">价格 ￥ 12.0</div>
            </van-col>
          </van-row>
        </div>
      </div>
      <div class="seventhMsg">
        <div style="padding: 0 29.33% 0 29.33%">
          <van-button  color="#0099FF" size="large" @click="handleCancel" >撤销</van-button>
        </div>
      </div>
    </div>
    <div class="bottom">
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
        name: "orderFixDetail",
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
  .orderFixDetail{
    width: 100vw;
    height: 100vh;
    background-color: #F7F7F7;
  }
  .top{
    background-color: #ffffff;
    padding: 0 18px 15px 18px;
    margin-bottom: 8px;
    .firstMsg{
      padding-top: 15px;
      .orderNum{
        div{
          border: 0.5px solid #cccccc;
          border-radius: 3px;
          font-size: 12px;
          color: #262626;
          height: 24px;
          width: 76%;
          line-height: 24px;
        }
      }
      .complaintType{
        font-size: 14px;
        color: #999999;
        height: 24px;
        line-height: 24px;
      }
    }
    .secondMsg{
      color: #262626;
      font-size: 14px;
      font-weight: bold;
      text-align: left;
      margin-top: 31px;
    }
    .thirdMsg{
      color: #595959;
      font-size: 14px;
      text-align: left;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .fourthMsg{
      display: flex;
      justify-content: space-between;
      img{
        width: 95%;
        height: 106px;
      }
    }
    .fifthMsg{
      margin: 15px 0 30px 0;
      text-align: left;
    }
    .sixthMsg{
      .handleMsg{
        height: 118px;
        text-align: left;
        background-color: rgba(246,93,104,0.05);
        margin-top: 15px;
        .update{
          color: #F65D68;
          font-size: 12px;
          margin: 15px 0 0 14px;
        }
        .assistPerson{
          color: #F65D68;
          font-size: 12px;
          margin: 10px 0 0 14px;
        }
        .handlePerson{
          color: #F65D68;
          font-size: 12px;
          margin: 10px 0 0 14px;
        }
        .handleTime{
          color: #F65D68;
          font-size: 12px;
          margin: 10px 0 0 14px;
        }
        .handleBtn{
          margin-top: 15px;
        }
        .price{
          margin-top: 10px;
          color: #F65D68;
          font-size: 14px;
        }
      }
    }
    .seventhMsg{
      margin-top: 15px;
    }
  }
  .bottom{
    background-color: #ffffff;
    padding-top: 13px;
    margin-top: 8px;
  }
</style>
