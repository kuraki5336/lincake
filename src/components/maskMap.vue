<template>
  <div id="map" class="mask-map"></div>
</template>

<script>
import L from "leaflet";
export default {
  name: "maskMap",
  created() {},
  data: () => ({
    map: "",
  }),
  methods: {},
  computed:{
    currPosition(){
      return this.$store.getters.health.getLocation 
    }
  },
  mounted() {
    this.map = L.map("map", {
      center: [51.505, -0.09],
      zoom: 14, //缩放比列
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
      foo: "bar",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  },
  watch:{
    currPosition(dist){
      this.map
    }
  }
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
