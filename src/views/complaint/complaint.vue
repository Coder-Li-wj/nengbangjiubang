<!--投诉-->
<template>
  <div class="body">
    <div style="height: 8px"></div>
    <div class="top">
      <van-field
        readonly
        clickable
        label="投诉类型"
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
        label="详情分类"
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
        label="详情分类"
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
      <div class="centerContent">
        <div style="padding-top: 15px">
          <span style="font-size: 14px; color: #333333">添加录音</span>
        </div>
        <van-button type="info" icon="volume-o" style="width: 44%; margin-top: 10px; border-radius: 3px">长按开始录音</van-button>
        <div style="margin-top: 15px; margin-bottom: 15px">
          <span>添加照片</span>
        </div>
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>
    <div style="margin-top: 8px">
      <van-cell-group>
        <van-field type="textarea" v-model="value" placeholder="内容描述" />
      </van-cell-group>
    </div>
    <div class="bottom">
      <van-button type="info" style="width: 100%">投诉</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "complaint",
    data(){
      return{
        value1: '',
        value2: '',
        value3: '',
        showPicker1: false,
        showPicker2: false,
        showPicker3: false,
        columns: ['咨', '询', '类', '型'],
        fileList: [
          { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        ]
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
    .center{
      background-color: #ffffff;
      text-align: left;
      .centerContent{
        margin-left: 18px;
      }
    }
    .bottom{
      width: 100%;
      position: fixed;
      bottom: 0;
    }
  }
</style>
