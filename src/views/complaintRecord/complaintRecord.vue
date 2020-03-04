<!--投诉记录-->
<template>
    <div class="complaintRecord">
      <van-tabs v-model="active" title-active-color="#0099FF" color="#0099FF" swipe-threshold="5" sticky>
        <van-tab title="待处理">
          <ul>
            <li @click="$router.push({path:'complaintDetail'})">
              <div class="firstMsg">
                <van-row>
                  <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                  <van-col span="10" class="complaintType">投诉类型：类型名称</van-col>
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
                <div class="bottomLeft">更新：业主提交投诉 <br/> 20192020 02:02</div>
                <van-button  color="#F65D68" size="small">待处理</van-button>
              </div>
            </li>
            <li>
              <div class="firstMsg">
                <van-row>
                  <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                  <van-col span="10" class="complaintType">投诉类型：类型名称</van-col>
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
                <div class="bottomLeft">更新：业主提交投诉 <br/> 20192020 02:02</div>
                <van-button  color="#F65D68" size="small">待处理</van-button>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="已变更">
          <ul>
            <li>
              <div class="firstMsg">
                <van-row>
                  <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
<!--                  <van-col span="10" class="complaintType">投诉类型：类型名称</van-col>-->
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
                <div class="bottomLeft">更新：物业主管已经跟进 <br/> 20192020 02:02</div>
                <van-button  color="#F65D68" size="small">已变更</van-button>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="处理中">
          <ul>
            <li>
              <div class="firstMsg">
                <van-row>
                  <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
                  <!--                  <van-col span="10" class="complaintType">投诉类型：类型名称</van-col>-->
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
        <van-tab title="已完成">
          <ul>
            <li>
              <div class="firstMsg">
                <van-row>
                  <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
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
                <van-button  color="#E6E6E6" size="small"><span style="color: #999999">处理中</span></van-button>
              </div>
              <div class="sixMsg">
                <van-button  color="#0099FF" size="large" @click="handleClick">评价</van-button>

                <van-action-sheet v-model="show" :actions="actions" @select="onSelect" >
                  <div style="height: 44px; color: #0099FF;line-height: 44px;" @click="handleComment">评价</div>
                </van-action-sheet>

                <van-dialog v-model="inputShow" title="请填写反馈内容" show-cancel-button>
                  <van-cell-group>
                    <van-field v-model="text" type="textarea"/>
                  </van-cell-group>
                </van-dialog>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="已评价">
          <ul>
            <li>
              <div class="firstMsg">
                <van-row>
                  <van-col span="14" class="orderNum"><div>订单号：BX123569909212</div></van-col>
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
                <van-button  color="#E6E6E6" size="small"><span style="color: #999999">已评价</span></van-button>
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
        name: "complaintRecord",
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
.complaintRecord{
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
      .complaintType{
        font-size: 14px;
        color: #999999;
        height: 24px;
        line-height: 24px;
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
