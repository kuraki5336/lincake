import { getstorelist, getarealist } from "@/service/health";

const state = () => ({
  currCity: "臺北市",
  currArea: "北投區",
  // 店
  stores: [],
  // 行政區域列表
  location: [],
  keyword: "",
  // 選中的店號
  storeid: "",
});

// getters
const getters = {
  cityList(state) {
    return state.location.map((item) => item.name) || [];
  },
  distList(state) {
    return (
      state.location.find((item) => item.name === state.currCity)?.districts ||
      []
    );
  },
  filterStore(state) {
    return state.stores.filter(
      (item) =>
        item.county === state.currCity &&
        item.town === state.currArea &&
        item.name.includes(state.keyword)
    );
  },

};

// actions
const actions = {
  async getStore(context) {
    const rep = await getstorelist();
    const data = rep.features.map((item) => {
      return {
        ...item.properties,
        lat: item.geometry.coordinates[0],
        long: item.geometry.coordinates[1],
      };
    });
    context.commit("setstores", data);
  },
  async getArea(context) {
    const rep = await getarealist();
    context.commit("setlocation", rep);
  },

  getLocation(state, getters){
    return getters.distList.find((item)=> item.name === state.currArea)
  }
};

// mutations
const mutations = {
  setcurrCity(state, payload) {
    state.currCity = payload;
  },
  setcurrArea(state, payload) {
    state.currArea = payload;
  },
  setstores(state, payload) {
    state.stores = payload;
  },
  setlocation(state, payload) {
    state.location = payload;
  },
  setkeyword(state, payload) {
    state.keyword = payload;
  },
  setstoreid(state, payload) {
    state.storeid = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
