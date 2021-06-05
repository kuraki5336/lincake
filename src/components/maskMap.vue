<template>
  <div id="map" class="mask-map"></div>
</template>

<script>
import L from "leaflet";
import { mapGetters } from "vuex";
export default {
  name: "maskMap",
  created() {},
  data() {
    return {
      map: {},
      markers: [],
    };
  },
  methods: {
    addMark(item) {
      const myIcon = {
        iconUrl: "../assets/icon/location.png",
        shadowUrl: "../assets/icon/location.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      };

      const marker = L.marker([item.long, item.lat], myIcon)
        .addTo(this.map)
        .bindPopup(`<h2 class="popup-name">${item.name}</h2>`);

      // 替 marker 加入 id 與經緯度資訊
      marker.markerId = item.id;
      marker.long = item.long;
      marker.lat = item.lat;

      // 將 marker push 到陣列裡
      this.markers.push(marker);
    },

    clearLocation() {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          console.log(layer);
          this.map.removeLayer(layer);
        }
      });
      // 清空標註
      this.markers.length = 0;
    },
    triggerPopup(markerId) {
      const marker = this.markers.find((item) => item.markerId === markerId);
      this.map.flyTo(new L.LatLng(marker.long, marker.lat), 15);
      marker.openPopup();
    },
  },
  computed: {
    ...mapGetters("health", ["getLocation", "filterStore"]),
  },
  mounted() {
    // 初始化中心位置
    this.map = L.map("map", {
      center: [25.03, 121.55],
      zoom: 14,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>',
      maxZoom: 18,
    }).addTo(this.map);
  },
  watch: {
    getLocation(location) {
      this.map.panTo(new L.latLng(location.latitude, location.longitude));
    },
    filterStore(store) {
      this.clearLocation();
      store.forEach((item) => {
        this.addMark(item);
      });
    },
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
