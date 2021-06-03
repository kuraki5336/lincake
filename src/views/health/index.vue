<template>
  <div class="content">
    <asideMenu></asideMenu>
    <div class="mask-map"></div>
  </div>
</template>

<script>
import asideMenu from "../../components/asideMeun";
export default {
  components: {
    asideMenu,
  },
  created() {},
  data: () => ({
    count: 0,
  }),
  methods: {
    inc() {
      this.count++;
    },
  },
};
</script>

<style lang="scss">
.content {
  display: block;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  * {
    box-sizing: border-box;
  }
  > div {
    float: left;
  }
}

.mask-map {
  position: relative;
  width: 75%;
  height: 100%;
  background-color: #aaa;
  z-index: 10;
  &.full {
    width: 100%;
  }
}
</style>
