<!--报事页面：投诉记录和维修记录-->
<template>
  <div class="home">
    <div class="top">
<!--      <img class="topBackground" src="@/assets/bg_bsym.png" alt="">-->
      <div class="supervise">
        <span>监督热线</span>
      </div>
      <div class="navbar">
        <div>
          <img src="@/assets/ic_zx.png" alt="" @click="$router.push({path:'consult'})">
          <p>咨询</p>
        </div>
        <div>
          <img src="@/assets/ic_wcbx.png" alt="" @click="$router.push({path:'freeRepair'})">
          <p>无偿报修</p>
        </div>
        <div>
          <img src="@/assets/ic_ycbx.png" alt="" @click="$router.push({path:'payRepair'})">
          <p>有偿报修</p>
        </div>
        <div>
          <img src="@/assets/ic_tsjy.png" alt="" @click="$router.push({path:'complaint'})">
          <p>投诉建议</p>
        </div>
      </div>
    </div>
    <div>
      <van-tabs v-model="parentActive" border="false" class="topTab">
        <van-tab title="投诉记录">
          <van-tabs v-model="childrenActive"
                    swipe-threshold="5"
                    color="#0099FF"
                    title-active-color="#0099FF"
                    title-inactive-color="#999999"
                    class="childTab">
              <van-tab title="待处理">
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">已完成</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
              </van-tab>
              <van-tab title="已变更">
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">已完成</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
              </van-tab>
              <van-tab title="处理中">
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">已完成</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
              </van-tab>
              <van-tab title="已完成">
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
              </van-tab>
              <van-tab title="已评价">
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
                <div class="itemBox">
                  <div class="itemBoxContent">
                    <div class="orderNum"><span>订单号：BX123569909212</span></div>
                    <div class="address">幸福家园_C7栋29_A21</div>
                    <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                    <div class="pictureItem">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                      <img src="@/assets/photo.png" alt="">
                    </div>
                    <div class="bottomInfo">
                      <p>
                        更新：工作人员已经在来的路上进行处理20192020 02:02
                      </p>
                      <div class="btn">处理中</div>
                    </div>
                  </div>
                  <div class="interval"></div>
                </div>
              </van-tab>
          </van-tabs>
        </van-tab>
        <van-tab title="维修记录">
          <van-tabs v-model="childrenActive"
                    swipe-threshold="5"
                    color="#0099FF"
                    title-active-color="#0099FF"
                    title-inactive-color="#999999"
                    class="childTab">
            <van-tab title="待处理">
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum">
                    <span>订单号：BX123569909212</span>
                    <span class="price">价格￥12.0</span>
                  </div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo2">
                    <p>
                      平台有偿单
                      <br>
                      20192020 02:02
                    </p>
                    <div class="btn">待付款</div>
                  </div>
                  <div class="bottomBtn">
                    <div class="payBtn">支付</div>
                    <div class="cancleBtn">撤销</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      平台有偿单20192020 02:02
                    </p>
                    <div class="btn">已完成</div>
                  </div>

                </div>
                <div class="interval"></div>
              </div>
            </van-tab>
            <van-tab title="已变更">
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">处理中</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">已完成</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
            </van-tab>
            <van-tab title="处理中">
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">处理中</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">已完成</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
            </van-tab>
            <van-tab title="已完成">
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">处理中</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">处理中</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
            </van-tab>
            <van-tab title="已评价">
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">处理中</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
              <div class="itemBox">
                <div class="itemBoxContent">
                  <div class="orderNum"><span>订单号：BX123569909212</span></div>
                  <div class="address">幸福家园_C7栋29_A21</div>
                  <div class="content">你好，你的东西确实好用你的东西确实好用。你好，你的东西确实好用你的东西确实好用。</div>
                  <div class="pictureItem">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                    <img src="@/assets/photo.png" alt="">
                  </div>
                  <div class="bottomInfo">
                    <p>
                      更新：工作人员已经在来的路上进行处理20192020 02:02
                    </p>
                    <div class="btn">处理中</div>
                  </div>
                </div>
                <div class="interval"></div>
              </div>
            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
    </div>

      <van-tabbar v-model="active">
        <van-tabbar-item  name="home">
          <span style="color:#999999">报事</span>
          <img
            slot="icon"
            src="@/assets/home-active.png"
          ></van-tabbar-item>
        <van-tabbar-item  name="myself">
          <span style="color:#999999">我的管家</span>
          <img
            slot="icon"
            src="@/assets/my-inactive.png"
          ></van-tabbar-item>
      </van-tabbar>

  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        parentActive: "1",
        childrenActive: "1",
        value:'',
        active:'home',
        price: 199,
      }
    },
    methods:{
      onCancel(){
        this.$toast('取消');
      },
      onSearch(){},
      toDetails(){
        this.$router.push({path:'/shopDetails'})
      }
    }
  }
</script>

<style lang="less" scoped>
  .home{
    margin-bottom: 50px;
  }
  .top{
    position: relative;
    background-image: url("../../assets/bg_bsym.png");
    background-size: cover;
    background-position: center center;
    /*width: 375px;*/
    width: 100vw;
    height: 101px;
    .supervise{
      position: absolute;
      right: 18px;
      top: 11px;
      background-color: #68BAFF;
      width: 67px;
      height: 27px;
      line-height: 27px;
      border-radius: 13.5px;
      font-size: 12px;
      color: #ffffff;
    }
    .navbar{
      display: flex;
      justify-content: space-around;
      position: absolute;
      top: 51px;
      left: 18px;
      width: 90vw;
      height: 104px;
      background-color: #ffffff;
      border-radius: 4px;
      box-shadow:4px 4px 6px rgba(32, 134, 217, 0.11);
      img{
        margin-top: 13px;
        width: 56px;
        height: 56px;
      }
      p{
        margin: 0;
        font-size: 12px;
      }
    }
  }
  .topTab{
    margin-top: 67px;
  }
  .itemBox{
    .itemBoxContent{
      width: 100%;
      .orderNum{
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        /*margin:15px auto 0px -130px;*/
        span {
          margin-left: 18px;
          border: 0.5px solid #cccccc;
          border-radius: 3px;
          font-size: 12px;
          padding: 4px 4px 3px 5px;
        }
        .price{
          float: right;
          color: #F65D68;
          border: none;
          font-size: 14px;
          padding: 0;
          margin-right: 18px;
          margin-left: -100px;
        }
      }
      .address{
        margin: 31px auto 0 18px;
        float: left;
        font-size: 14px;
        font-weight: bold;
        color: #262626;
      }
      .content{
        margin: 10px 21px 10px 18px;
        float: left;
        font-size: 14px;
        color: #595959;
        text-align: left;
      }
      .pictureItem{
        display: flex;
        justify-content: space-between;
        padding: 0 18px 0 18px;
        margin: 100px auto 0 0px;
        /*border: 1px solid red;*/
        img{
          /*width: 106px;
          height: 106px;*/
          max-width: 30%;
          display: block;
          height: auto;
          margin: auto;
        }
      }
      .bottomInfo {
        display: flex;
        width: 90.4%;
        height: 56px;
        background-color: rgba(59, 154, 237, 0.05);
        margin: 15px 18px 15px 18px;
        p{
          color: #0099FF;
          font-size: 12px;
          text-align: left;
          margin: 11px 0 11px 14px;
        }
        .btn{
          width: 54px;
          height: 27px;
          line-height: 27px;
          font-size: 12px;
          color: #ffffff;
          background-color: #0099FF;
          border-radius: 2px;
          margin: 14px 10px 15px auto;
        }
      }
      .bottomInfo2 {
        display: flex;
        width: 90.4%;
        height: 56px;
        background-color: rgba(246, 93, 104, 0.06);
        margin: 15px 18px 15px 18px;
        p{
          color: #F65D68;
          font-size: 12px;
          text-align: left;
          margin: 11px 0 11px 14px;
        }
        .btn{
          width: 54px;
          height: 27px;
          line-height: 27px;
          font-size: 12px;
          color: #ffffff;
          background-color: #F65D68;
          border-radius: 2px;
          margin: 14px 10px 15px auto;
        }
      }
      .bottomBtn{
        display: flex;
        .payBtn{
          width: 155px;
          height: 44px;
          background-color: #0099FF;
          border-radius: 4px;
          margin: 0px 29px 15px 18px;
          line-height: 44px;
          color: #ffffff;
        }
        .cancleBtn{
          width: 155px;
          height: 44px;
          background-color: #0099FF;
          border-radius: 4px;
          margin: 0px 18px 15px 0px;
          line-height: 44px;
          color: #ffffff;
        }
      }
    }
    .interval{
      height: 8px;
      width: 100%;
      background-color: #F7F7F7;
    }
  }

</style>
