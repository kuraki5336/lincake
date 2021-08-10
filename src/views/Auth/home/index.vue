<template>
  <div>
    <!-- <router-view /> -->
    <div class="van-doc-header">
      <div class="van-doc-header__logo">蛋糕店</div>
      <ul class="van-doc-header__nav">
        <li
          @click="doChangePage(index)"
          v-for="(item, index) in headerlist"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  setup() {},
  data: () => ({
    headerlist: ["商品介紹", "採購說明", "聯繫方式", "liff"],
  }),
  methods: {
    doChangePage(index) {
      switch (index) {
        case 1:
          this.$router.push("/purchase");
          break;
        case 2:
          this.$router.push("/contact");
          break;
        case 3:
          this.$router.push("/liff");
          break;
        default:
          this.$router.push("/products");
          break;
      }
    },
  },
};
</script>

<style lang="scss">
.van-doc-header {
  width: 100%;
  background-color: #ffffff;
  -webkit-user-select: none;
  user-select: none;

  &__logo {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 24px;
    color: #0f0054;
    text-align: center;
  }

  &__nav {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 46px;

    li {
      text-align: center;
      color: #0f0054;
      height: 47px;
      margin: 0 20px;
    }
    li:hover {
      color: #0f005494;
    }
  }
}

.van-doc-content {
  background-color: #f7f8fa;
}

.products-header-nav {
  display: flex;
  justify-content: center;
  margin: 0;
  background-color: #0f0054;
  height: 95px;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    background-color: #0f0054;
    height: 95px;
  }
  li {
    // width: 200px;

    margin: auto 20px;
    list-style-type: none;
    // margin-bottom: 0.8em;
    line-height: 1.65em;
    text-align: center;

    a {
      color: rgb(255, 255, 255);
    }
    a:hover {
      color: rgb(167, 138, 138);
    }
  }
}

.tab_content.products {
  background-color: #fff;
  border-bottom: dotted 2px #d8d8d8;
  padding: 80px 0 50px;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    max-width: 1100px;
  }

  li {
    margin-bottom: 30px;
    padding: 0 3px;
    width: 247px;
  }

  a {
    display: block;
  }

  p {
    color: #0d0057;
    font-weight: bold;
    margin-top: 15px;
    text-align: center;
  }

  h2 {
    text-align: center;
    border: none;
    color: #0d0057;
    font-size: 22px;
    font-weight: bold;
    margin: 0 0 20px;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
