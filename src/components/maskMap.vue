<template>
  <div id="map" class="mask-map"></div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "maskMap",
  setup() {
    const map = inject(`map`);
    map.mapInit("map");
  },
};
</script>

<style lang="scss">
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
