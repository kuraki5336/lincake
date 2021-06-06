import { reactive } from "vue";

export default () => {
  const gCount = reactive({
    amount: 0,
    inc: () => gCount.amount++,
  });

  return gCount;
};
