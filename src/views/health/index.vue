<template>
  <div class="content">
    <div class="aside-menu">
      <div class="wraps">
        <label>
          縣市:
          <select>
            <option>台北市</option>
          </select>
        </label>
        <label>
          行政區:
          <select>
            <option>北投區</option>
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
    <div class="mask-map"></div>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
.content {
  display: block;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  * {
    box-sizing: border-box;
  }
  > div {
    float: left;
  }
}

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

.mask-map {
  position: relative;
  width: 75%;
  height: 100%;
  background-color: #aaa;
  z-index: 10;
  &.full {
    width: 100%;
  }
}

.wraps {
  padding: 1em;
  border-bottom: 1px solid #666;
}
</style>
