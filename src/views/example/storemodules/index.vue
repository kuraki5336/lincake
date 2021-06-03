<template>
  <div>
    <div>Store Modules</div>
    <div>{{ plulist }}</div>
    <button @click="getpluList()">取得商品清單</button>
    <button @click="getplu(1)">取得商品1</button>
    <button @click="editprice(100)">更改商品售價</button>
    {{ getNowitem }}
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  created() {},
  data: () => ({
    count: 0,
  }),
  methods: {
    ...mapActions("plu", ["getpluList", "getplu"]),
    ...mapMutations("plu", ["editprice"]),
    inc() {
      this.count++;
    },
  },
  computed: {
    ...mapState({
      plulist: (state) => state.plu.items,
      nowitem: (state) => state.plu.nowitem,
    }),
    ...mapGetters("plu", ["getNowitem"]),
  },
};
</script>

<style></style>
