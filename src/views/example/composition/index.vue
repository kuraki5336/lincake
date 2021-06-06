<template>
  <div>
    <h1>{{ FCount.amount }}</h1>
    <button @click="FCount.inc">click me</button>

    <!-- <h1>{{ calcCount }}</h1>
    <h1>{{ doublecount }}</h1> -->
    <h1>{{ data.calcCount }}</h1>
    <h1>{{ data.doublecount }}</h1>
    <button @click="data.calcCount(5)">click me</button>
  </div>
</template>

<script>
import gCount from "@/Composition/counter";
import { ref, computed, reactive } from "vue";
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

    const initcount = ref(0);
    const data = reactive({
      calcCount: computed({
        get: () => initcount.value,
        set: (val) => {
          initcount.value = val+3;
        },
      }),
      doublecount: computed(() => 3 * initcount.value),
    });
    return {
      data,
      FCount,
    };
  },
};
</script>
