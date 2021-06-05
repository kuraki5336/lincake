<template>
  <div class="content">
    <AsideMenu ref="ly_mapmenu" @triggerMark="openPopup"></AsideMenu>
    <MaskMap ref="ly_map"></MaskMap>
    <Lightbox></Lightbox>
  </div>
</template>

<script>
import AsideMenu from "@/components/asideMeun";
import Lightbox from "@/components/lightbox.vue";
import MaskMap from "@/components/maskMap.vue";

export default {
  components: {
    AsideMenu,
    Lightbox,
    MaskMap,
  },
  created() {},
  data: () => ({
    count: 0,
  }),
  mounted() {},
  methods: {
    openPopup(id){
      console.log(`id`, id);
      this.$refs.ly_map.triggerPopup(id)
    }
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
