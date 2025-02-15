import { createSignal } from "solid-js";
import { store } from "~/stores/game.store";

export default function Scoreboard() {
  return (
    <div class=" text-white border-2 border-(--header-outline) flex justify-between row-span-1 md:col-start-2 md:col-end-4  md:mx-40  rounded-2xl p-4 text-3xl md:text-4xl font-bold">
      <div class="flex flex-col  ">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div class="text-(--score-text) bg-white  flex flex-col md:px-8 px-4 items-center justify-center rounded-xl">
        <span class={"text-2xl font-normal uppercase tracking-widest"}>
          {" "}
          Score
        </span>
        <span class={"md:text-7xl  text-5xl font-semibold text-(--dark-text)"}>
          {store.score}
        </span>
        {/*${this.score}*/}
      </div>
    </div>
  );
}
