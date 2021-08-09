<template>
  <div class="contact">
    <h2>
      聯絡我們
    </h2>

    <div class="inner-contact">
      <van-row>
        <van-col span="24"
          ><van-field v-model="name" placeholder="請輸入姓名" label="姓名"
        /></van-col>
      </van-row>

      <van-row>
        <van-col span="24"
          ><van-field v-model="phone" placeholder="請輸入電話" label="電話"
        /></van-col>
      </van-row>

      <van-row>
        <van-col span="24"
          ><van-field v-model="text" placeholder="請輸入說明" label="說明"
        /></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      text: "",
    };
  },
};
</script>

<style lang="scss">
.van-row {
  padding: 20px 10px;

  &__span {
    line-height: 2.4;
  }
}

.inner-contact {
  background-color: #ebebeb;
  padding: 50px 150px;
}
</style>
