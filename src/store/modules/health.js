
const state = () => ({
    currCity: '台北',
    currArea: '北投區',
    // 店
    stores: [],
    // 行政區域列表
    location: []
});

// getters
const getters = {

};

// actions
const actions = {
    // 門店店點
    // https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json
    // 行政區域更新
    // https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json



};

// mutations
const mutations = {
    setcurrCity(state, payload) {
        state.currCity = payload
    },
    setcurrArea(state, payload) {
        state.currArea = payload
    },
    setstores(state, payload) {
        state.stores = payload
    },
    setlocation(state, payload) {
        state.location = payload
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
