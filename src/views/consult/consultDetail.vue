<!--咨询详情-->
<template>
    <div class="body">
      <div style="height: 8px"></div>
      <div class="box">
        <div class="boxInfo">
          <div class="boxTop">
            <div class="desc">问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述</div>
            <div class="date">08-01 08:08</div>
            <div class="address">幸福家园_C7栋29_A21</div>
            <div class="info">姓名  杨**  138********</div>
          </div>
          <div class="boxBottom">
            <div class="boxBottomLeft">
              <img src="@/assets/ic_zx.png" alt="">
              <span>用户昵称</span>
              <p>回答简介回答简介回答简介</p>
            </div>
            <div class="boxBottomRight">
              <span>采纳</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomContent">
            <input type="text">
            <div class="ask">
              <span>追问</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "consultDetail"
    }
</script>

<style lang="less" scoped>
  .body{
    background-color: #F7F7F7;
    height: 100vh;
    .box{
      width: 100%;
      background-color: #ffffff;
      .boxInfo{
        padding: 13px 18px 15px 18px;
        .boxTop{
          text-align: left;
          .desc{
            color: #333333;
            font-size: 16px;
            margin-bottom: 5px;
          }
          .date{
            color: #999999;
            font-size: 12px;
            margin-bottom: 5px;
          }
          .address{
            color: #333333;
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 5px;
          }
          .info{
            color: #333333;
            font-size: 14px;
            margin-bottom: 15px;
          }
        }
        .boxBottom{
          display: flex;
          justify-content: space-between;
          background-color: #F7F7F7;
          /*padding-bottom: 15px;*/
          .boxBottomLeft{
            text-align: left;
            margin: 18px auto 15px 11px;
            img{
              width: 22px;
              height: 22px;
            }
            span{
              font-size: 12px;
              color: #333333;
            }
            p{
              margin-top: 7px;
              margin-bottom: 0;
              font-size: 12px;
              color: #333333;
            }
          }
          .boxBottomRight{
            width: 54px;
            height: 27px;
            background-color: #0099FF;
            border-radius: 2px;
            margin: 24px 10px auto auto;
            span{
              color: #ffffff;
              font-size: 12px;
              line-height: 27px;
            }
          }
        }
      }
      .bottom{

        position: fixed;
        bottom: 0;
        height: 50px;
        width: 100%;
        background-color: #ffffff;
        .bottomContent{
          display: flex;
          justify-content: space-around;
          height: 50px;
          width: 100%;
          margin-top: 7px;
          input{
            border: none;
            /*appearance: none;*/
            /*line-height: 50px;*/
            height: 36px;
            width: 71.2%;
            border-radius: 4px;
            background-color: #E6E6E6;
          }
          .ask{
            background-color: #0099FF;
            width: 16.53%;
            height: 36px;
            line-height: 36px;
            border-radius: 4px;
            span{
              font-size: 12px;
              color: #ffffff;
              /*line-height: ;*/
            }
          }
        }

      }
    }
  }

</style>
