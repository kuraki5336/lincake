import { reactive, computed } from "vue";
const state = reactive({
  plu_items: [
    {
      title: "餅乾",
      astitle: "cook",
      items: [
        {
          itemno: "001",
          name: "伯爵紅茶",
          description :"這款做法做出來的餅乾是酥脆口感呦~✨<br> 做法是從影片上截圖下來的，如果喜歡可以到最後一張的資訊上觀看影片，會更清楚呦❤️"
        },
        {
          itemno: "002",
          name: "草莓心",
          description:"山形食パンに比べて中身のきめが細かく、もっちりとした食感で、トーストしても食べ応えがあります。          サンドウィッチにすれば、具材との食感のバランスは最高です。"
        },
        {
          itemno: "003",
          name: "肉桂杏仁",
          description:"山形食パンに比べて"
        },
        {
          itemno: "004",
          name: "肉桂核桃",
          description:"肉娃的氣息"
        },
        {
          itemno: "005",
          name: "椰香牛奶",
          description:"椰香牛奶人奶跟牛奶的差別"
        },
        {
          itemno: "006",
          name: "宇治抹茶",
          description:"宇治抹茶a51651d6w別"
        },
        {
          itemno: "007",
          name: "蔓越莓餅乾",
          description:"蔓越莓餅乾a51651d6w別"
        },
        {
          itemno: "008",
          name: "芝麻餅乾",
          description:"芝麻餅乾a51651d6w別"
        },
        {
          itemno: "008",
          name: "杏仁巧克力",
          description:"杏仁巧克力a51651d6w別"
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
          description:"雪Q餅雪Q餅雪Q餅雪Q餅雪Q餅"
        },
        {
          itemno: "002",
          name: "抹茶蔓越莓雪Q餅",
          description:"???????????????"
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
          description:"法式焦糖蜂蜜杏仁船餅"
        },
      ],
    },
  ],
  nowas: "",
  nowitem: "",
  display_plu: computed(() => {
    if (state.nowas) {
      return state.plu_items.filter((item) => item.astitle === state.nowas);
    }

    return state.plu_items.map((x) => x);
  }),
  getNowitem: computed(() => {
    if (state.nowas) {
      return state.display_plu[0].items.filter((item) => item.itemno === state.nowitem)[0];
    }
    return []
  }),
});

export default {
  state,
};
