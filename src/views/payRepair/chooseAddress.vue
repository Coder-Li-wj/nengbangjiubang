<!--选择地址-->
<template>
  <div class="body">
    <div style="height: 8px"></div>
    <div class="area">
      <van-radio-group v-model="radio" style="margin: auto 18px auto 18px">
        <div style="display: flex; justify-content: space-between; height: 50px;">
          <span style="line-height: 50px; font-size: 14px; color: #333333">荷城小区C8栋2001</span>
          <van-radio name="1"></van-radio>
        </div>
        <!--        <hr style="width: 90.4%; color: #cccccc; box-shadow:0px 1px 0px 0px rgba(245,245,245,0.12); margin: 0">-->
        <div style="display: flex; justify-content: space-between; height: 51px;">
          <span style="line-height: 51px; font-size: 14px; color: #333333">荷城小区C8栋2001</span>
          <van-radio name="2"></van-radio>
        </div>
      </van-radio-group>
    </div>
    <div class="bottom">
      <van-button type="info" style="width: 100%">确定</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "freeRepair",
    data(){
      return{
        radio:'1'
      }
    },
    methods: {
      onConfirmFirst(value1) {
        this.value1 = value1;
        this.showPicker1 = false;
      },
      onConfirmSecond(value2) {
        this.value2 = value2;
        this.showPicker2 = false;
      },
      onConfirmThird(value3) {
        this.value3 = value3;
        this.showPicker3 = false;
      }
    }
  }
</script>

<style lang="less" scoped>
  .body{
    background-color: #F7F7F7;
    height: 100vh;
    .area{
      height: 102px;
      background-color: #ffffff;
    }
    .bottom{
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
</style>
