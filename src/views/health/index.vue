<template>
  <div class="content">
    <AsideMenu></AsideMenu>
    <div class="mask-map"></div>
    <Lightbox></Lightbox>
  </div>
</template>

<script>
import AsideMenu from "@/components/asideMeun";
import Lightbox from "@/components/lightbox.vue";
export default {
  components: {
    AsideMenu,
    Lightbox,
  },
  created() {},
  data: () => ({
    count: 0,
  }),
  mounted() {},
  methods: {},
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
