<template>
  <div class="liff_content">
    <h2>Liff應用</h2>

    <div class="row">
      <button class="el_button el_button--primary" @click="sendmessage()">
        回應訊息
      </button>
      <button class="el_button el_button--primary" @click="sendmessage2()">
        送訊息給朋友
      </button>
    </div>
    <div class="row">
      <van-row>
        <van-col span="6">版本</van-col>
        <van-col span="18">{{ lineVersion }}</van-col>
      </van-row>
      <van-row>
        <van-col span="6">AccessToken</van-col>
        <van-col span="18">{{ AccessToken }}</van-col>
      </van-row>
      <van-row>
        <van-col span="6">idToken1</van-col>
        <van-col span="18">{{ idToken1 }}</van-col>
      </van-row>
      <van-row>
        <van-col span="6">idToken2</van-col>
        <van-col span="18">{{ idToken2 }}</van-col>
      </van-row>
      <div class="template" v-if="idToken2">
        <van-row>
          <van-col span="6">UID</van-col>
          <van-col span="18">{{ idToken2.sub }}</van-col>
        </van-row>
        <van-row>
          <van-col span="6">name</van-col>
          <van-col span="18">{{ idToken2.name }}</van-col>
        </van-row>

        <van-row>
          <van-col span="6">IMG</van-col>
          <van-col span="18"><img :src="idToken2.picture" alt=""/></van-col>
        </van-row>
        <van-row>
          <van-col span="6">aud</van-col>
          <van-col span="18">{{ idToken2.aud }}</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import liff from "@line/liff";
export default {
  setup() {
    return {};
  },
  data: () => ({
    liffID: "1656297925-YW5WLyxj",
    lineVersion: "",
    AccessToken: "",
    idToken1: "",
    idToken2: "",
    FShow: false,
  }),
  async mounted() {
    const info = await liff
      .init({
        liffId: this.liffID,
      })
      .then(function() {
        if (!liff.isLoggedIn()) {
          liff.login({
            redirectUri: "https://kuraki5336.github.io/lincake",
          });
        }
        console.log(liff);
        return {
          lineVersion: liff.getLineVersion(),
          idToken1: liff.getIDToken(),
          idToken2: liff.getDecodedIDToken(),
          AccessToken: liff.getAccessToken(),
          FShow: liff.isLoggedIn(),
        };
      })
      .catch(function(error) {
        console.log(error);
      });
    this.lineVersion = info.lineVersion;
    this.idToken1 = info.idToken1;
    this.idToken2 = info.idToken2;
    this.AccessToken = info.AccessToken;
    this.FShow = true;
  },
  methods: {
    sendmessage() {
      liff
        .sendMessages([
          {
            type: "text",
            text: "Hello, World!",
          },
        ])
        .then(function(res) {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    sendmessage2() {
      if (liff.isApiAvailable("shareTargetPicker")) {
        liff
          .shareTargetPicker([
            {
              type: "text",
              text: "嗨，好友想我嗎",
            },
          ])
          .then(function(res) {
            console.log(res);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style lang="scss">
.liff_content {
  max-width: 600px;
  margin: 20px auto;
}

.van-col {
  overflow: scroll;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 1px;
  img {
    width: 100%;
    object-fit: contain;
  }
}

.van-col:nth-child(even) {
  background-color: #e7e7e7;
}

.van-col:nth-child(odd) {
  color: #fff;
  background-color: #8e8e8e;
}

.row {
  margin: 0 10px 10px 10px;
}

.el_button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin: 0 15px 0 0;
}

.el_button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
