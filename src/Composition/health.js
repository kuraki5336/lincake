import { reactive, computed } from "vue";
import { getstorelist, getarealist } from "@/service/health";
const state = reactive({
    currCity: "臺北市",
    currArea: "北投區",
    // 店
    stores: [],
    // 行政區域列表
    location: [],
    keyword: "",
    // 選中的店號
    storeid: "",
    cityList: computed(() => state.location.map((item) => item.name) || []),
    distList: computed(
        () =>
            state.location.find((item) => item.name === state.currCity)?.districts ||
            []
    ),
    filterStore: computed(() => {
        return state.stores.filter(
            (item) =>
                item.county === state.currCity &&
                item.town === state.currArea &&
                item.name.includes(state.keyword)
        );
    }),
    // 目前所選行政區資訊
    getLocation: computed(() => {
        return state.distList.find((item) => item.name === state.currArea);
    }),
    showModal: false,
});

const getStore = async () => {
    const rep = await getstorelist();
    const data = rep.features.map((item) => {
        return {
            ...item.properties,
            lat: item.geometry.coordinates[0],
            long: item.geometry.coordinates[1],
        };
    });
    state.stores = data;
};

const getArea = async () => {
    const rep = await getarealist();
    state.location = rep;
};

export default {
    state,
    getStore,
    getArea,
};
