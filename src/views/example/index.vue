<template>
  <div>
    <div>練習頁</div>
    <router-view />
  </div>
</template>

<script>
import { provide, ref } from "vue";
export default {
  setup() {
    const mprovide = ref([0, 1, 2, 3, 4, 5]);
    provide(`FArr`, mprovide);
  },
  created() {},
  data: () => ({
    count: 0,
  }),
  methods: {
    inc() {
      this.count++;
    },
  },
};
</script>

<style></style>
