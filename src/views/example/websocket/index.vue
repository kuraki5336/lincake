<template>
  <div class="example">
    <div class="theme">
      <h1>websocket 測試</h1>
      <p>簡易測試websocket 1.用戶端通知指定用戶端 2.服務端通知用戶端</p>
    </div>
    <h2>最新消息</h2>
    <span>{{ state.nowMessage }}</span>
    <hr />
    <h2>註冊ID</h2>
    <span>{{ state.genID }}</span>
    <hr />

    <h2>訊息佇列</h2>
    <span v-for="msg in state.messageList" :key="msg">{{ msg }}</span>
    <hr />
    <h2>錯誤佇列</h2>
    <span v-for="err in state.errList" :key="err">{{ err }}</span>
    <hr />

    <div class="row">
      <label class="el_form_label">請選擇對象</label>
      <select class="el_input_inner" v-model="seluserid">
        <option value="all" key="all">
          全體
        </option>
        <option
          class="el_input_dropdown_item"
          v-for="(user, index) in state.userlist"
          :value="user"
          :key="index"
        >
          {{ user }}
        </option>
      </select>
    </div>
    <div class="row">
      <label class="el_form_label">請輸入文字</label>
      <input class="el_input_inner" type="text" v-model="mtempstr" />
    </div>
    <hr />

    <button class="el_button el_button--primary" @click="sendmsg(mtempstr)">
      送出
    </button>
  </div>
</template>

<script>
import websocket from "@/Composition/websocket";
export default {
  name: "websocket",
  setup() {
    const { state, socketinit, sksend } = websocket;
    socketinit();
    return {
      state,
      sksend,
    };
  },
  created() {},
  data: () => ({
    seluserid: "",
    mtempstr: "",
  }),
  methods: {
    sendmsg(mstr) {
      const payload = {
        msg: mstr,
        target: this.seluserid,
      };
      this.sksend(payload);
      this.mtempstr = "";
    },
  },
};
</script>

<style lang="scss">
.example {
  margin: auto;
  max-width: 980px;
}

.theme {
  background-color: #fff;
  h1 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
}

h2 {
  margin: 55px 0 20px;
  font-weight: 700;
  font-size: 20px;
  color: #333333;
}

span {
  font-weight: 700;
  font-size: 16px;
  color: #666666;
  display: block;
}

.row {
  display: block;
}

.el_input_inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.el_input_dropdown_item {
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
}

.el_form_label {
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}

.el_button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.el_button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
