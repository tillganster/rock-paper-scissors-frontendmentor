import { Portal } from "solid-js/web";
import { setStore, store } from "~/stores/game.store";

export default function RulesDialog() {
  //@ts-ignore
  return (
    <div
      class={`${!store.showRules && "translate-y-full scale-50 opacity-0"} bg-black/20 translate-0 opacity-100  transition-transform duration-700 h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center flex items-center w-full md:inset-0  max-h-full`}
    >
      <div
        class={
          "md:w-1/2 md:h-1/2 md:rounded-xl w-full my-0 mx-auto bg-white h-full flex flex-col py-10 justify-center items-center"
        }
      >
        <h1
          class={"uppercase text-(--dark-text) text-center text-6xl font-bold"}
        >
          Rules
        </h1>
        <div class={"flex justify-center items-center grow-1"}>
          <img src={"./images/image-rules.svg"} />
        </div>

        <button
          onClick={() => setStore("showRules", false)}
          class={" items-center cursor-pointer active:scale-150"}
        >
          <img src={"./images/icon-close.svg"} />
        </button>
      </div>
    </div>
  );
}
