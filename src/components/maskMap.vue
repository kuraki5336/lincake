<template>
  <div id="map" class="mask-map"></div>
</template>

<script>
import { ref, watchEffect, onMounted } from "vue";
import state from "@/Composition/health";
import L from "leaflet";
import { isEmpty } from "@/utils/libFunction";

const map = ref(null);
const markers = [];
const myIcon = {
  iconUrl: "../assets/icon/location.png",
  shadowUrl: "../assets/icon/location.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
};

const addMark = (item) => {
  const marker = L.marker([item.long, item.lat], myIcon)
    .addTo(this.map)
    .bindPopup(`<h2 class="popup-name">${item.name}</h2>`);

  // 替 marker 加入 id 與經緯度資訊
  marker.markerId = item.id;
  marker.long = item.long;
  marker.lat = item.lat;

  // 將 marker push 到陣列裡
  this.markers.push(marker);
};

const clearLocation = () => {
  this.map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      console.log(layer);
      this.map.removeLayer(layer);
    }
  });
  // 清空標註
  this.markers.length = 0;
};

const triggerPopup = (markerId) => {
  const marker = markers.find((item) => item.markerId === markerId);
  map.flyTo(new L.LatLng(marker.long, marker.lat), 15);
  marker.openPopup();
};

export default {
  name: "maskMap",
  setup() {
    onMounted(() => {
      // 初始化中心位置
      map.value = L.map("map", {
        center: [25.03, 121.55],
        zoom: 14,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>',
        maxZoom: 18,
      }).addTo(map.value);
    });

    // state.filterStore
    watchEffect(() => {
      console.log(`state.filterStore`);
      if (isEmpty(state.filterStore)) return;
      this.clearLocation();
      state.filterStore.forEach((item) => {
        this.addMark(item);
      });
    });

    // state.getLocation
    watchEffect(() => {
      console.log(`getLocation`, state);
      if (isEmpty(state.getLocation)) return;
      map.panTo(
        new L.latLng(state.getLocation.latitude, state.getLocation.longitude)
      );
    });

    return {
      addMark,
      clearLocation,
      triggerPopup,
    };
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    // ...mapGetters("health", ["getLocation", "filterStore"]),
  },
  mounted() {},
  watch: {},
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
