import { createStore } from "solid-js/store";
import { PickOptions } from "~/model/picks.model";
import { makePersisted } from "@solid-primitives/storage";

interface Store {
  score: number;
  userPick?: PickOptions;
  showRules: boolean;
}

const SCORE_KEY = "game.score";
const savedScore = localStorage.getItem(SCORE_KEY);
export const [store, _setStore] = createStore<Store>({
  score: Number(savedScore) ?? 0,
  userPick: undefined,
  showRules: false,
});
export const setStore = (key: keyof Store, val: any) => {
  _setStore(key, val);
  if (key === "score") localStorage.setItem(SCORE_KEY, `${store.score}`);
};
