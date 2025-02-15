import { Connection } from "~/components/Connection";
import Pick from "~/components/Pick";
import { PickOptions } from "~/model/picks.model";
import { createSignal } from "solid-js";
import { setStore } from "~/stores/game.store";

interface GameProps {}

export default function Game() {
  let [pick3, setPick3] = createSignal<HTMLElement>();
  let [pick1, setPick1] = createSignal<HTMLElement>();
  let [pick2, setPick2] = createSignal<HTMLElement>();

  function onPick(pick: PickOptions) {
    setStore("userPick", () => pick);
  }

  return (
    <div class="grow-1  grid grid-rows-2 grid-cols-3 md:gap-4  md:mx-40  items-center">
      <Connection from={pick2} to={pick3} />
      <Connection from={pick1} to={pick3} />
      <Connection from={pick2} to={pick1} />

      <div class="row-start-1 row-span-1 col-start-1 col-span-1 ">
        <Pick
          onClick={() => onPick(PickOptions.rock)}
          ref={setPick1}
          addittionalClass={"justify-self-end"}
          pick={PickOptions.rock}
        />
      </div>
      <div class="row-start-1 col-start-3 col-span-1 ">
        <Pick
          onClick={() => onPick(PickOptions.paper)}
          ref={setPick2}
          addittionalClass={"justify-self-start"}
          pick={PickOptions.paper}
        />
      </div>
      <div class="row-start-2 col-start-2 col-span-1 ">
        <Pick
          onClick={() => onPick(PickOptions.scissors)}
          ref={setPick3}
          addittionalClass={"justify-self-center"}
          pick={PickOptions.scissors}
        />
      </div>
    </div>
  );
}
