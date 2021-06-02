<template>
  <div>Login</div>
  {{ name }}
  {{ token }}
  <p>原價 {{ saleprice }} 特價{{ sale80 }}</p>
  <button @click="editprice(60)">修改售價</button>
  <button @click="editsaleprice(360)">修改原價</button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.getUserlist();
    this.getUserid({ id: 1 });
  },
  data: () => ({
    count: 0,
  }),
  methods: {
    ...mapMutations(["editsaleprice", "editprice"]),
    ...mapActions(["getUserlist", "getUserid"]),
    inc() {
      this.count++;
    },
  },
  computed: {
    ...mapState(["name", "token", "saleprice"]),
    ...mapGetters(["sale80", "sale50"]),
  },
};
</script>

<style></style>
