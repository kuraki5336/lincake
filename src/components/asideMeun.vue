s<template>
  <div class="aside-menu">
    <div class="wraps">
      <label>
        縣市:
        <select v-model="currCity">
          <option v-for="citem in cityList" :key="citem">{{ citem }}</option>
        </select>
      </label>
      <label>
        行政區:
        <select v-model="currArea">
          <option v-for="ditem in distList" :key="ditem">{{
            ditem.name
          }}</option>
        </select>
      </label>
    </div>

    <div class="wraps">
      <label>
        <i class="fas fa-search-location"></i> 關鍵字搜尋：
        <input type="text" v-model="currKeyword" placeholder="請輸入關鍵字" />
      </label>
    </div>
    <!-- {{ stores }} -->
    <ul class="store-lists">
      <li v-for="store in filterStore" :key="store.id" class="store-info wraps">
        <h1 v-html="keywordHighlight(store.name)" />

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: {{ store.mask_adult }}個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: {{ store.mask_child }}個</span>
        </div>

        <div class="mask-info">最後更新時間:{{ store.updated }}</div>

        <button class="btn-store-detail">
          <i class="fas fa-info-circle"></i>
          看詳細資訊
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  created() {
    this.getStore();
    this.getArea();
  },
  data: () => ({
    count: 0,
  }),
  methods: {
    ...mapActions("health", ["getStore", "getArea"]),
    inc() {
      this.count++;
    },
    keywordHighlight(val) {
      console.log(val);
      return val.replace(
        new RegExp(this.currKeyword),
        `<span class="highlight"> ${this.currKeyword}</span>`
      );
    },
  },
  computed: {
    ...mapState("health", ["stores"]),
    ...mapGetters("health", ["cityList", "distList", "filterStore"]),
    currCity: {
      get() {
        return this.$store.state.health.currCity;
      },
      set(value) {
        this.$store.commit("health/setcurrCity", value);
      },
    },
    currArea: {
      get() {
        return this.$store.state.health.currArea;
      },
      set(value) {
        this.$store.commit("health/setcurrArea", value);
      },
    },
    currKeyword: {
      get() {
        return this.$store.state.health.keyword;
      },
      set(value) {
        this.$store.commit("health/setkeyword", value);
      },
    },
  },
  watch: {
    distList(item) {
      const [firstitem] = item;
      this.currArea = firstitem.name;
    },
  },
};
</script>

<style lang="scss">
.aside-menu {
  width: 25%;
  height: 100%;
  border-right: 1px solid #aaa;
  background-color: #f1f1f1;
  overflow-y: scroll;

  label {
    position: relative;
    margin-right: 2em;
    display: block;
    font-size: 1.2rem;
    line-height: 2;
  }
  select {
    position: absolute;
    margin-top: 0.3rem;
    left: 6rem;
    font-size: 1.2rem;
    width: auto;
    min-width: 110px;
  }
  input {
    padding: 2px 8px;
    font-size: 1.2rem;
    line-height: 2;
    width: 110%;
  }
}

.store-lists {
  width: 100%;
}

.store-info {
  position: relative;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1.8;
  background-color: #fff;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 0.3em;
  }
  .mask-info {
    position: relative;
    > span {
      // position: absolute;
      left: 1.8rem;
    }
  }
  &::v-deep .highlight {
    color: #f08d49;
  }
  &:hover {
    background-color: #eee;
  }
  .btn-store-detail {
    position: absolute;
    display: block;
    cursor: pointer;
    width: 80px;
    height: 80px;
    text-align: center;
    right: 1.2rem;
    top: 1.5rem;
    font-size: 0.8rem;
    > i {
      display: block;
      font-size: 2rem;
      margin-bottom: 5px;
    }
  }
}

.wraps {
  padding: 1em;
  border-bottom: 1px solid #666;
}

.highlight{
  font-weight: 800;
  color : #e95151;
margin: 0;
padding:0;
}
</style>
