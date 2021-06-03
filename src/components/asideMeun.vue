<template>
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
        <input type="text" placeholder="請輸入關鍵字" />
      </label>
    </div>

    <ul class="store-lists">
      <li class="store-info wraps">
        <h1>ＸＸ藥局</h1>

        <div class="mask-info">
          <i class="fas fa-head-side-mask"></i>
          <span>大人口罩: 100 個</span>
        </div>

        <div class="mask-info">
          <i class="fas fa-baby"></i>
          <span>兒童口罩: 100 個</span>
        </div>

        <div class="mask-info">
          最後更新時間:
        </div>

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
  },
  computed: {
    ...mapState({}),
    ...mapGetters("health", ["cityList", "distList"]),
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
  },
  watch: {
    // distList(item){
    //   console.log(item);
    // }
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

.wraps {
  padding: 1em;
  border-bottom: 1px solid #666;
}
</style>
