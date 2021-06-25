<template>
  <div class="content">
    <el-container class="cContainer">
      <el-header>
        <h1>阿玄好好學習區</h1>
      </el-header>
      <el-container class="el-context">
        <el-aside>
          <div class="el-row">
            <label class="el-label">類型選擇</label>

            <el-radio-group v-model="FCalctype">
              <el-radio-button label="加法"></el-radio-button>
              <el-radio-button label="減法"></el-radio-button>
            </el-radio-group>
          </div>
          <div class="el-row">
            <label class="el-label">上邊界範圍</label>
            <el-input
              type="number"
              v-model="upnum"
              placeholder="請輸入數值"
              clearable
            ></el-input>
          </div>

          <div class="el-row">
            <label class="el-label">下邊界範圍</label>
            <el-input
              type="number"
              v-model="downnum"
              placeholder="請輸入數值"
              clearable
            ></el-input>
          </div>
          <div class="el-row">
            <el-button @click="doaction" size="medium">考試開始</el-button>
            <el-button @click="doclear" size="medium">重新</el-button>
          </div>
        </el-aside>
        <el-main>
          <div @click="doCalcAns" v-if="state === 'quest'">
            <div class="el-row cquy">
              <span>{{ nowUpnum }}</span>
            </div>
            <div class="el-row cquy">
              <span>{{ nowDownnum }}</span>
            </div>
          </div>
          <div @click="doque" v-else>
            <div class="el-row cans">
              <span>{{ nowAns }}</span>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
  created() {},
  data: () => ({
    // 0加法 1減法
    FCalctype: `加法`,
    upnum: 0,
    downnum: 0,
    nowUpnum: "準備中",
    nowDownnum: "準備中",
    nowAns: "準備中",
    state: "quest",
  }),
  mounted() {},
  methods: {
    randomNum(min, upmax, downmax) {
      this.nowUpnum = Math.floor(Math.random() * (upmax - min + 1)) + min;
      this.nowDownnum = Math.floor(Math.random() * (downmax - min + 1)) + min;
    },
    doCalcAns() {
      console.log(typeof this.upnum);
      if (typeof this.nowUpnum === "string") return;
      if (typeof this.nowDownnum === "string") return;

      if (this.state === "quest") {
        this.state = `ans`;
        this.FCalctype === "加法"
          ? (this.nowAns = this.nowDownnum + this.nowUpnum)
          : (this.nowAns = this.nowDownnum - this.nowUpnum);
      } else {
        if (typeof this.nowUpnum === "string") return;
        if (typeof this.nowDownnum === "string") return;
        this.randomNum(1, this.upnum, this.downnum);
        // this.doaction();
      }
    },
    doclear() {
      this.nowUpnum = "準備中";
      this.nowDownnum = "準備中";
      this.nowAns = "準備中";
      this.state = "quest";
      this.FCalctype = "加法";
      this.upnum = 0;
      this.downnum = 0;
    },
    doaction() {
      // if (typeof this.nowUpnum === "string") return;
      // if (typeof this.nowDownnum === "string") return;
      this.randomNum(1, this.upnum, this.downnum);
    },
    doque() {
      this.state = `quest`;
      this.randomNum(1, this.upnum, this.downnum);
    },
  },
};
</script>

<style lang="scss">
.el-header {
  background-color: rgba(60, 60, 60, 0.931);
  color: rgb(204, 204, 204);
  height: 75px;
  // width: 100vh;
  left: 0;
  top: 0;
  // position: fixed;

  h1 {
    line-height: 1.5;
    margin: 0;
    float: left;
    font-size: 32px;
    font-weight: 400;
  }
}

.el-main {
  background-color: rgba(30, 30, 30, 0.931);
}
.cContainer {
  height: 100%;
}

.el-context {
  border-bottom-style: 1px solid #999;
  .el-label {
    color: rgb(204, 204, 204);
    margin: 55px 0 20px;
  }
}

.el-aside {
  background-color: rgba(51, 51, 51, 0.99);
}

.el-row {
  margin: 20px 10px;
}

.cquy {
  width: 300px;
  height: 300px;
  line-height: 300px;
  margin: 20px auto;
  background-color: rgb(149, 63, 63);

  span {
    width: 100%;
    color: #fff;
    font-size: 60px;
    text-align: center;
  }
}

.cans {
  width: 600px;
  height: 600px;
  line-height: 600px;
  margin: 20px auto;
  background-color: rgb(21, 168, 77);

  span {
    width: 100%;
    color: #fff;
    font-size: 80px;
    text-align: center;
  }
}
</style>
