<template>
  <div>
    <van-swipe :autoplay="3000" style="height: 300px; width: 100%" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <button @click="sendmessage()"></button>
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
    typelist: ["餅乾", "雪Q餅", "船餅"],
  }),
  mounted() {},
  methods: {
    gopoint(index) {
      // console.log(`.point_${index}`);
      // document
      //   .querySelector(`#point_${index}`)
      //   .scrollIntoView({ block: "start", behavior: "smooth" });
      let element = document.getElementById(`point_${index}`);
      let height = document.getElementById(`point_${index}`).offsetTop; //计算需要向上移动的距离
      element.scroll({
        top: height,
        behavior: "smooth", // 平滑移动
      });
    },
    doChangePage(index) {
      switch (index) {
        case 1:
          this.$router.push("/purchase");
          break;
        case 2:
          this.$router.push("/contact");
          break;
        default:
          this.$router.push("/");
          break;
      }
    },
  },
};
</script>
