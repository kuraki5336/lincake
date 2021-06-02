
const state = () => ({
  items: [],
  nowitem:{}
});

// getters
const getters = {
  getNowitem(state) {
    console.log(state);
    return state.nowitem 
  },
};

// actions
const actions = {
  getpluList(context){
    fetch(`https://5f8a534d18c33c0016b31610.mockapi.io/plulist`)
    .then(res => res.json())
    .then(data => {
      context.commit('setplulist', data)
    })    
  },
  getplu(context, payload){
    fetch(`https://5f8a534d18c33c0016b31610.mockapi.io/plulist/${payload}`)
    .then(res => res.json())
    .then(data => {
      context.commit('addplu', data)
    })    
  }
};

// mutations
const mutations = {
  /** 內部使用 */
  setplulist(state, payload){
    state.items = payload
  },
  addplu(state, payload){
    state.nowitem.price = payload
  },
  /** 外部使用 */
  editprice(state, payload) {
    state.price = payload
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
