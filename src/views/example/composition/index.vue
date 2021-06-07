<template>
  <div>
    <h1>{{ FCount.amount }}</h1>
    <button @click="FCount.inc">click me</button>

    <!-- <h1>{{ calcCount }}</h1>
    <h1>{{ doublecount }}</h1> -->
    <h1>{{ data.calcCount }}</h1>
    <h1>{{ data.doublecount }}</h1>
    <button @click="data.calcCount = data.calcCount">click me</button>
    <hr />
    <h1>{{ readonlyCount.count }}</h1>
    <h1>{{ copy.count }}</h1>
    <button @click="plus">click me</button>
    <button @click="stop">stop watch effect plus</button>
    <hr />
    {{ fatherArr }}
  </div>
</template>

<script>
import gCount from "@/Composition/counter";
import {
  ref,
  computed,
  reactive,
  readonly,
  watch,
  watchEffect,
  inject,
} from "vue";
export default {
  setup() {
    const FCount = gCount();
    // const calcCount = ref(2);
    // const doublecount = computed(() => FCount.amount * calcCount.value);
    // return {
    //   calcCount,
    //   doublecount,
    //   FCount,
    // };

    const fatherArr = inject(`FArr`);

    const initcount = ref(5);
    const data = reactive({
      calcCount: computed({
        get: () => initcount.value,
        set: (val) => {
          initcount.value = val * 2;
        },
      }),
      doublecount: computed(() => FCount.amount * initcount.value),
    });

    // 監測單一物件
    watch(data, (val, oldval) => {
      console.log(`new val ${val.calcCount} old val ${oldval.calcCount}`);
    });

    // 監測reactive 這個寫法比較優質
    watch(
      () => data.calcCount,
      (val, oldval) => {
        console.log(`reactive new val ${val} old val ${oldval}`);
      }
    );

    const readonlyCount = reactive({ count: 0 });
    const copy = readonly(readonlyCount);
    const plus = () => readonlyCount.count++;

    const stop = watchEffect(() => {
      console.log("errect readonlyCount", readonlyCount.count);
    });

    watchEffect(() => {
      console.log("errect data", data.calcCount);
    });

    return {
      data,
      FCount,
      readonlyCount,
      copy,
      plus,
      stop,
      fatherArr,
    };
  },
};
</script>
