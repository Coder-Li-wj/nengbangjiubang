<!--支付结果-->
<template>
  <div class="payConsult">
    <div class="payPicture">
      <img src="http://hbimg.b0.upaiyun.com/67a034b60ffd69cc242fa8a6d9692517e91a2e262b583-laA2Hc_fw658" alt="">
    </div>
    <div class="payMsg">
      <div style="font-size: 14px; color: #333333">订单付款成功</div>
    </div>
    <div class="confirm">
      <van-button type="info" size="large">确定</van-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "payConsult"
    }
</script>

<style lang="less">
.payConsult{
  height: 100vh;
  width: 100vw;
  background-color: #F7F7F7;
  .payPicture{
    padding-top: 34px;
    padding-bottom: 4px;
    img{
      width: 24.53%;
      height: 13.79%;
    }
  }
  .confirm{
    width: 100vw;
    position: fixed;
    bottom: 0px;
  }
}
</style>
