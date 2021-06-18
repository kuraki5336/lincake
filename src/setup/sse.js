import VueSSE from 'vue-sse';

// OR specify custom defaults (described below)
const SSE = new VueSSE({
  format: 'json',
  polyfill: true,
  url: '/my-events-server',
  withCredentials: true,
})

export default SSE;