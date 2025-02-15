import { Portal } from "solid-js/web";
import { setStore, store } from "~/stores/game.store";

export default function RulesDialog() {
  //@ts-ignore
  return (
    <div
      class={`${!store.showRules && "hidden"} h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center flex items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div
        class={
          "w-full my-0 mx-auto bg-white h-full flex flex-col py-10 justify-center items-center"
        }
      >
        <h1
          class={"uppercase text-(--dark-text) text-center text-6xl font-bold"}
        >
          Rules
        </h1>
        <div class={"flex justify-center items-center grow-1"}>
          <img src={"/images/image-rules.svg"} />
        </div>

        <button
          onClick={() => setStore("showRules", false)}
          class={"items-center cursor-pointer active:scale-150"}
        >
          <img src={"/images/icon-close.svg"} />
        </button>
      </div>
    </div>
  );
}
