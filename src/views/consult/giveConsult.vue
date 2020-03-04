<!--发起咨询-->
<template>
    <div class="body">
      <div style="height: 8px"></div>
      <div class="top">
        <van-field
          readonly
          clickable
          label="咨询类型"
          :value="value1"
          placeholder="请选择"
          @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker1 = false"
            @confirm="onConfirmFirst"
          />
        </van-popup>

        <van-field
          readonly
          clickable
          label="咨询二级"
          :value="value2"
          placeholder="请选择"
          @click="showPicker2 = true"
        />
        <van-popup v-model="showPicker2" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker2 = false"
            @confirm="onConfirmSecond"
          />
        </van-popup>

        <van-field
          readonly
          clickable
          label="咨询三级"
          :value="value3"
          placeholder="请选择"
          @click="showPicker3 = true"
        />
        <van-popup v-model="showPicker3" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="showPicker3 = false"
            @confirm="onConfirmThird"
          />
        </van-popup>
      </div>
      <div class="center">
        <van-cell-group>
          <van-field type="textarea" v-model="value" placeholder="问题描述(请输入100个字以内)" />
        </van-cell-group>
      </div>
      <div class="bottom">
        <van-button type="info" style="width: 100%">发起咨询</van-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "giveConsult",
      data(){
          return{
            value1: '',
            value2: '',
            value3: '',
            showPicker1: false,
            showPicker2: false,
            showPicker3: false,
            columns: ['咨', '询', '类', '型']
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
    .top{
      margin-bottom: 8px;
    }
    .bottom{
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
</style>
