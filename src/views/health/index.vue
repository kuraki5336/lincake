<template>
  <div class="content">
    <AsideMenu></AsideMenu>
    <MaskMap></MaskMap>
    <!-- <Lightbox></Lightbox> -->
  </div>
</template>

<script>
import { provide } from "vue";
import mapStore from "@/Composition/health";
import map from "@/Composition/map";
import AsideMenu from "@/components/asideMeun";
// import Lightbox from "@/components/lightbox.vue";
import MaskMap from "@/components/maskMap.vue";

export default {
  components: {
    AsideMenu,
    // Lightbox,
    MaskMap,
  },
  setup() {
    provide("mapStore", mapStore);
    provide("map", map);
    mapStore.getStore();
    mapStore.getArea();
  },
  created() {},
  data: () => ({}),
  mounted() {},
  methods: {
    // openPopup(id) {
    //   console.log(`id`, id);
    //   this.$refs.ly_map.triggerPopup(id);
    // },
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
</style>
