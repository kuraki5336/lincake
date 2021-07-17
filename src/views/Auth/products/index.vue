<template>
  <div>
    {{ state.plu_items }}
    <div
      v-for="(products, index) in state.plu_items"
      :key="index"
      class="tab_content products"
    >
      <h2>{{ products.title }}</h2>
      <ul>
        <li
          v-for="(plu, index) in products.items"
          :key="index"
          @click="dopluclick(products.astitle, plu.itemno)"
        >
          <a>
            <img :src="products.astitle + '/' + plu.itemno + '.jpg'" />
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
      this.$router.push({
        path: "/product",
        query: { astitle: title, itemno: no },
      });
    },
  },
};
</script>

<style lang="scss"></style>
