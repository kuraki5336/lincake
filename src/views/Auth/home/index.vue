<template>
  <div>
    <!-- <router-view /> -->
    <div class="van-doc-header">
      <div class="van-doc-header__logo">蛋糕店</div>
      <ul class="van-doc-header__nav">
        <li>商品介紹</li>
        <li>採購說明</li>
        <li>聯繫方式</li>
      </ul>
    </div>
    <!-- <div class="van-doc-swipe"> -->
    <van-swipe :autoplay="3000" style="height: 300px; width: 100%" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- </div> -->

    <!-- 商品區 -->
    <div class="products-header-nav">
      <ul>
        <li v-for="(item, index) in typelist" :key="index">
          <a @click="gopoint(index)" href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
    <router-view />
    <Products></Products>
  </div>
</template>

<script>
import Products from "@/components/products";
import { provide } from "vue";
import store from "@/Composition/products";
export default {
  setup() {
    provide("state", store.state);
    const images = ["products/bgc/001.jpg", "products/bgc/002.jpg"];
    return { images };
  },
  components: { Products },
  data: () => ({
    typelist: ["全部", "餅乾", "雪Q餅", "船餅"],
  }),
  methods: {
    gopoint(index) {
      this.$el
        .querySelector(".dingyue_box")
        .scrollIntoView({ block: "start", behavior: "smooth" });
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
