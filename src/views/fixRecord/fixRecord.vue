<!--维修记录&维修记录备份-->
<template>
  <div class="fixRecord">
    <van-tabs v-model="active" title-active-color="#0099FF" color="#0099FF" swipe-threshold="5" sticky>
      <van-tab title="待接单">
        <ul>
          <li @click="$router.push({path:'orderFixDetail'})">
            <div class="firstMsg">
              <van-row>
                <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                <van-col span="10" class="price">价格 ￥ 12.0</van-col>
              </van-row>
            </div>
            <div class="secondMsg">幸福家园_C7栋29_A21</div>
            <div class="thirdMsg">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
            <div class="fourthMsg">
              <div v-for="item in src">
                <img :src="item" alt="">
              </div>
            </div>
            <div class="fifthMsg">
              <div class="bottomLeft">平台无偿单抢修 <br/> 20192020 02:02</div>
              <van-button  color="#F65D68" size="small">待接单</van-button>
            </div>
            <div class="sixMsg" >
              <div style="padding: 0 29.33% 0 29.33%">
                <van-button  color="#0099FF" size="large" @click.stop="handleCancel" >撤销</van-button>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="待付款">
        <ul>
          <li @click="$router.push({path:'payFixDetail'})">
            <div class="firstMsg">
              <van-row>
                <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                <van-col span="10" class="price">价格 ￥ 13.0</van-col>
              </van-row>
            </div>
            <div class="secondMsg">幸福家园_C7栋29_A21</div>
            <div class="thirdMsg">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
            <div class="fourthMsg">
              <div v-for="item in src">
                <img :src="item" alt="">
              </div>
            </div>
            <div class="fifthMsg">
              <div class="bottomLeft">平台无偿单抢修 <br/> 20192020 02:02</div>
              <van-button  color="#F65D68" size="small">待付款</van-button>
            </div>
            <div class="sixMsg">
              <div style="display: flex;">
                <van-button  color="#0099FF" size="large" @click.stop="$router.push({path:'payPage'})">支付</van-button>
                <div style="width: 20%;"></div>
                <van-button  color="#0099FF" size="large" @click.stop="handleCancel" >撤销</van-button>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="处理中">
        <ul>
          <li @click="$router.push({path:'havePaidFixDetail'})">
            <div class="firstMsg">
              <van-row>
                <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                <van-col span="10" class="price">价格 ￥ 13.0</van-col>
              </van-row>
            </div>
            <div class="secondMsg">幸福家园_C7栋29_A21</div>
            <div class="thirdMsg">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
            <div class="fourthMsg">
              <div v-for="item in src">
                <img :src="item" alt="">
              </div>
            </div>
            <div class="fifthMsg2">
              <div class="bottomLeft">更新：工作人员已在来得路上进行处理 <br/> 20192020 02:02</div>
              <van-button  color="#0099FF" size="small">处理中</van-button>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已撤销">
        <ul>
          <li>
            <div class="firstMsg">
              <van-row>
                <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                <van-col span="10" class="price">价格 ￥ 13.0</van-col>
              </van-row>
            </div>
            <div class="secondMsg">幸福家园_C7栋29_A21</div>
            <div class="thirdMsg">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
            <div class="fourthMsg">
              <div v-for="item in src">
                <img :src="item" alt="">
              </div>
            </div>
            <div class="fifthMsg3">
              <div class="bottomLeft">更新：工作人员已在来得路上进行处理<br/> 20192020 02:02</div>
              <van-button  color="#E6E6E6" size="small"><span style="color: #999999">已撤销</span></van-button>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已完成">
        <ul>
          <li @click="$router.push({path:'finishFixDetail'})">
            <div class="firstMsg">
              <van-row>
                <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                <van-col span="10" class="price">价格 ￥ 12.0</van-col>
              </van-row>
            </div>
            <div class="secondMsg">幸福家园_C7栋29_A21</div>
            <div class="thirdMsg">你好，你的东西确实好，确实很好用想给你一个五星好评但是买的太少了</div>
            <div class="fourthMsg">
              <div v-for="item in src">
                <img :src="item" alt="">
              </div>
            </div>
            <div class="fifthMsg3">
              <div class="bottomLeft">更新：工作人员已在来得路上进行处理<br/> 20192020 02:02</div>
              <van-button  color="#E6E6E6" size="small"><span style="color: #999999">已完成</span></van-button>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import { Toast, Dialog } from 'vant';

  export default {
    name: "fixRecord",
    data(){
      return{
        active:0,
        src:[
          'http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658',
          'http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658',
          'http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658'
        ],
        show: false,
        actions: [
          { name: '满意', color:"#0099FF"},
          { name: '不满意（打回重做）', color:"#0099FF" },
          { name: '非常不满意', color:"#FF2222" }
        ],
        text:"",
        inputShow: false
      }
    },
    methods:{
      handleCancel(){
        Dialog.confirm({
          message: '是否撤销该订单',
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        });
      },
      handleClick(){
        this.show = true
      },
      onSelect(item) {
        this.show = false;
        Toast.success('评价成功');
      },
      handleComment(){
        this.inputShow = true
        this.show = false;
      }
    },
  }
</script>

<style lang="less">
  .fixRecord{
    width: 100vw;
    height: 100vh;
    background-color: #F7F7F7;
  }
  ul li{
    margin-top: 8px;
    /*height: 342px;*/
    height: 100%;
    background-color: #ffffff;
    padding: 0 18px 0 18px;
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
      .price{
        font-size: 14px;
        color: #F65D68;
        height: 24px;
        line-height: 24px;
        font-weight: bold;
        /*width: 33.6%;*/
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
      background:rgba(246,93,104,0.05);
      height: 56px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 15px;
      .bottomLeft{
        color: #F65D68;
        font-size: 12px;
        text-align: left;
      }
    }
    .fifthMsg2{
      background:rgba(59,154,237,0.05);
      height: 56px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 15px;
      .bottomLeft{
        color: #0099FF;
        font-size: 12px;
        text-align: left;
      }
    }
    .fifthMsg3{
      background:rgba(0,0,0,0.03);
      height: 56px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 15px;
      .bottomLeft{
        color: #595959;
        font-size: 12px;
        text-align: left;
      }
    }
    .sixMsg{
      margin-bottom: 15px;
    }
  }
</style>
