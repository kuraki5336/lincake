import { reactive } from "vue";
const state = reactive({
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
});

export default {
    state,
};
