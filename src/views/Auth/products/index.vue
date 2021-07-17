<template>
  <div>
    <div
      v-for="(products, index) in plu_items"
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
export default {
  setup() {},
  data: () => ({
    plu_items: [
      {
        title: "餅乾",
        astitle: "cook",
        items: [
          {
            itemno: "001",
            name: "伯爵紅茶",
          },
          {
            itemno: "002",
            name: "草莓心",
          },
          {
            itemno: "003",
            name: "肉桂杏仁",
          },
          {
            itemno: "004",
            name: "肉桂核桃",
          },
          {
            itemno: "005",
            name: "椰香牛奶",
          },
          {
            itemno: "006",
            name: "宇治抹茶",
          },
          {
            itemno: "007",
            name: "蔓越莓餅乾",
          },
          {
            itemno: "008",
            name: "芝麻餅乾",
          },
          {
            itemno: "008",
            name: "杏仁巧克力",
          },
        ],
      },
      {
        title: "雪Q餅",
        astitle: "snow",
        items: [
          {
            itemno: "001",
            name: "蔓越莓雪Q餅",
          },
          {
            itemno: "002",
            name: "抹茶蔓越莓雪Q餅",
          },
        ],
      },
      {
        title: "船餅",
        astitle: "ship",
        items: [
          {
            itemno: "001",
            name: "法式焦糖蜂蜜杏仁船餅",
          },
        ],
      },
    ],
  }),
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
