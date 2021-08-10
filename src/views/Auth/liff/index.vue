<template>
  <div>
    測試看看
    <button @click="sendmessage()">送訊息</button>
    <div class="detail_right__nutrition">
      <van-row>
        <van-col span="6">版本</van-col>
        <van-col span="6">{{ lineVersion }}</van-col>
        <van-col span="6">AccessToken</van-col>
        <van-col span="6">{{ AccessToken }}</van-col>
      </van-row>
      <van-row>
        <van-col span="6">idToken1</van-col>
        <van-col span="6">{{ idToken1 }}</van-col>
        <van-col span="6">name</van-col>
        <van-col span="6">{{ idToken2.name }}</van-col>
      </van-row>
      <van-row>
        <van-col span="6">idToken1</van-col>
        <van-col span="6">{{ idToken1 }}</van-col>
        <van-col span="6">name</van-col>
        <van-col span="6">{{ idToken2.name }}</van-col>
      </van-row>
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
  }),
  async mounted() {
    const info = await liff
      .init({
        liffId: this.liffID,
      })
      .then(function() {
        if (!liff.isLoggedIn()) {
          liff.login({
            redirectUri: "https://d3d128e5ca67.ngrok.io/liff/",
          });
        }
        console.log(liff);
        return {
          lineVersion: liff.getLineVersion(),
          idToken1: liff.getIDToken(),
          idToken2: liff.getDecodedIDToken(),
          AccessToken: liff.getAccessToken(),
        };
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("info");
    console.log(info);
    this.lineVersion = info.lineVersion;
    this.idToken1 = info.idToken1;
    this.idToken2 = info.idToken2;
    this.AccessToken = info.AccessToken;
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
  },
};
</script>

<style>
.van-col {
  line-height: 2rem;
  text-align: center;
  margin-bottom: 1px;
}

.van-col:nth-child(even) {
  background-color: #e7e7e7;
}

.van-col:nth-child(odd) {
  color: #fff;
  background-color: #8e8e8e;
}
</style>
