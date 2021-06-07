import { ref, onMounted, watchEffect, inject } from "vue";
// import state from "@/Composition/health";
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
    .addTo(map.value)
    .bindPopup(`<h2 class="popup-name">${item.name}</h2>`);

  // 替 marker 加入 id 與經緯度資訊
  marker.markerId = item.id;
  marker.long = item.long;
  marker.lat = item.lat;

  // 將 marker push 到陣列裡
  markers.push(marker);
};

const clearLocation = () => {
  map.value.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.value.removeLayer(layer);
    }
  });
  // 清空標註
  markers.length = 0;
};

const triggerPopup = (markerId) => {
  const marker = markers.find((item) => item.markerId === markerId);
  map.value.flyTo(new L.LatLng(marker.long, marker.lat), 15);
  marker.openPopup();
};

const mapInit = (element) => {
  const mapStore = inject(`mapStore`);
  const { state } = mapStore;
  onMounted(() => {
    // 初始化中心位置
    map.value = L.map(element, {
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
    if (isEmpty(state.filterStore)) return;
    clearLocation();
    state.filterStore.forEach((item) => {
      addMark(item);
    });
  });

  // state.getLocation
  watchEffect(() => {
    console.log(2);
    if (isEmpty(state.getLocation)) return;
    return state.distList.find((item) => item.name === state.currArea);
  });
};

export default {
  mapInit,
  triggerPopup,
};
