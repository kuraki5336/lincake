
const state = () => ({
  items: [],
});

// getters
const getters = {
  
};

// actions
const actions = {
  getpluList(context){
    fetch(`https://5f8a534d18c33c0016b31610.mockapi.io/plulist`)
    .then(res => res.json())
    .then(data => {
      context.commit('setplulist', data)
    })    
  }
};

// mutations
const mutations = {
  setplulist(state, payload){
    state.items = payload
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
