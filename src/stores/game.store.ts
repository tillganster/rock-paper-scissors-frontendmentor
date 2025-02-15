import { createStore } from "solid-js/store";
import { PickOptions } from "~/model/picks.model";

interface Store {
  score: number;
  userPick?: PickOptions;
  showRules: boolean;
}

export const [store, setStore] = createStore<Store>({
  score: 0,
  userPick: undefined,
  showRules: false,
});
