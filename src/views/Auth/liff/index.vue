<template>
  <div>
    測試看看
    <button @click="sendmessage()"></button>
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
  }),
  mounted() {
    liff
      .init({
        liffId: this.liffID,
      })
      .then(function() {
        if (!liff.isLoggedIn()) {
          liff.login({
            redirectUri: "https://d3d128e5ca67.ngrok.io/liff/",
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
