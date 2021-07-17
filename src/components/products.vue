<template>
  <div>
    <div
      v-for="(products, index) in state.display_plu"
      :key="index"
      class="tab_content products"
    >
      <h2 :ref="'point_'+index">{{ products.title }}</h2>
      <ul>
        <li
          v-for="(plu, index) in products.items"
          :key="index"
          @click="dopluclick(products.astitle, plu.itemno)"
        >
          <a>
            <img
              :src="'products/' + products.astitle + '/' + plu.itemno + '.jpg'"
            />
          </a>
          <p>{{ plu.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const state = inject(`state`);
    return { state };
  },
  data: () => ({}),
  methods: {
    dopluclick(title, no) {
      this.state.nowas = title;
      this.state.nowitem = no;
      this.$router.push({
        path: "product",
        // query: { astitle: title, itemno: no },
      });
    },
  },
};
</script>

<style lang="scss"></style>
