<template>
  <div>練習頁</div>
  <router-view />
</template>

<script>
export default {
  created() {
  },
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
