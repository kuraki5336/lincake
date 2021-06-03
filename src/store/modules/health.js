import { getstorelist, getarealist } from "@/service/health";

const state = () => ({
  currCity: "台北",
  currArea: "北投區",
  // 店
  stores: [],
  // 行政區域列表
  location: [],
});

// getters
const getters = {
    cityList(state){
        return state.location.map((item)=> item.name) || []
    },
    distList(state){
        return state.location.find((item)=>item.name = state.currCity)?.districts || []
    }
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
      console.log(data);
    context.commit("setstores", data);
  },
  async getArea(context) {
    const rep = await getarealist();
    context.commit("setlocation", rep);
  },
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
