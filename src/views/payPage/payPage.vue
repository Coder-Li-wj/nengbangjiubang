<!--支付页面-->
<template>
    <div class="payPage">
      <div style="height: 8px"></div>
      <div class="needPay">
        <van-row>
          <van-col span="6" style="font-size: 14px; color: #333333;">需支付</van-col>
          <van-col span="18" style="font-size: 14px; color: #F65D68;text-align: left">￥ 99.99</van-col>
        </van-row>
      </div>
      <div>
        <van-radio-group v-model="radio" >
          <van-cell-group>
            <van-cell title="微信" clickable @click="radio = '1'" style="text-align: left;">
              <van-radio slot="right-icon" name="1" />
            </van-cell>
            <van-cell title="支付宝" clickable @click="radio = '2'" style="text-align: left;">
              <van-radio slot="right-icon" name="2" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
      <div class="confirm">
        <van-button type="info" size="large">确定</van-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "payPage",
      data(){
          return{
            radio:'1'
          }
      }
    }
</script>

<style lang="less">
.payPage{
  height: 100vh;
  width: 100vw;
  background-color: #F7F7F7;
  .needPay{
    height: 51px;
    line-height: 51px;
    background-color: #ffffff;
    margin-bottom: 8px;
  }
  .confirm{
    width: 100vw;
    position: fixed;
    bottom: 0px;
  }
}
</style>
