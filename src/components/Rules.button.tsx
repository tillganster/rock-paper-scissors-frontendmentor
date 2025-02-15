import { createSignal } from "solid-js";
import { setStore } from "~/stores/game.store";

export default function RulesButton() {
  return (
    <button
      onClick={() => setStore("showRules", true)}
      class=" active:scale-75 hover:brightness-95 hover:shadow-xl rounded-xl cursor-pointer border-2 border-white text-white px-8 md:absolute md:right-0  md:bottom-0 py-2 hover:shadow-2xl"
    >
      Rules
    </button>
  );
}
