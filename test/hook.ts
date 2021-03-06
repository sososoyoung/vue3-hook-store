import { ref } from "@vue/composition-api";
import { createModel, createProvideModel } from "../src";

const testHook = (starNumber = 0) => {
  const count = ref(starNumber);
  const add = () => {
    count.value++;
  };

  return { count, add };
};

export const testHookModel = createProvideModel(testHook);

// or
// export const testHookModel = createModel(testHook);
