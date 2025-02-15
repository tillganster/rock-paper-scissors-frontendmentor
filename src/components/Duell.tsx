import Pick from "~/components/Pick";
import { PickOptions, PRECEDENCE } from "~/model/picks.model";

import { createEffect, createSignal, onMount } from "solid-js";
import { setStore } from "~/stores/game.store";

function Header({ title }: { title: string }) {
  return <h1 class={"md:text-3xl text-l text-white uppercase"}>{title}</h1>;
}

interface DuellProps {
  pick: PickOptions;
}

function getRandomEnumValue<T extends Object>(enumObj: T): T[keyof T] {
  const enumValues = Object.keys(enumObj) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  return enumValues[randomIndex];
}

enum GameState {
  WIN = "WIN",
  LOSE = "LOSE",
  DRAW = "DRAW",
}

const RESULT_MAPPER = {
  WIN: "You win!",
  LOSE: "You lose!",
  DRAW: "DRAW!",
};
export default function Duell({ pick }: DuellProps) {
  const [machinePick, setMachinePick] = createSignal<PickOptions | undefined>(
    undefined,
  );
  const [gameState, setGameState] = createSignal<GameState | undefined>(
    undefined,
  );

  onMount(() => {
    setTimeout(() => {
      const _pick = getRandomEnumValue(PickOptions);

      setMachinePick(_pick);
      if (pick === machinePick()) {
        setGameState(GameState.DRAW);
        return;
      }
      if (PRECEDENCE[pick] === machinePick()) {
        setGameState(GameState.LOSE);
        return;
      }
      setStore("score", (score) => score + 1);
      setGameState(GameState.WIN);
    }, 1000);
  });

  return (
    <div
      class={
        "grow-1 grid md:grid-cols-5  grid-cols-2 grid-rows-2 md:grid-rows-1 my-0 mx-auto md:gap-40 gap-5"
      }
    >
      <div
        class={
          " md:col-start-2 col-start-1 row-start-1 flex justify-center items-center"
        }
      >
        <div class={"flex flex-col items-center md:gap-20 gap-10  "}>
          <Header title={"You choose"} />
          <Pick
            size={"xl"}
            addittionalClass={
              gameState() === GameState.WIN
                ? "md:animate-(--my-ripple) animate-(--my-small-ripple)"
                : ""
            }
            disabled
            pick={pick}
          />
        </div>
      </div>
      {gameState() !== undefined && (
        <div
          class={
            "flex flex-col items-center justify-center gap-5 md:col-start-3 md:col-span-1 col-span-2 col-start-1 row-start-2 md:row-start-1"
          }
        >
          <h1 class={"text-5xl text-white uppercase text-center font-semibold"}>
            {RESULT_MAPPER[gameState()!]}
          </h1>
          <button
            onClick={() => setStore("userPick", () => undefined)}
            class={
              "py-2 px-10 bg-white text-red-700 rounded-md uppercase cursor-pointer hover:brightness-75 active:scale-75"
            }
          >
            Play again
          </button>
        </div>
      )}
      <div
        class={
          "  flex justify-center items-center md:col-start-4 col-start-2 row-start-1"
        }
      >
        <div class={" flex flex-col items-center md:gap-20 gap-10"}>
          <Header title={"The House picked"} />
          {machinePick() === undefined && (
            <div
              style={{ animation: "spin-3d 1000ms linear infinite" }}
              class={
                "rounded-full  md:w-50 md:h-50 sm:w-40 sm:h-40 h-32 w-32 bg-(--dark-text) "
              }
            />
          )}
          {machinePick() !== undefined && (
            <Pick
              size={"xl"}
              addittionalClass={
                gameState() === GameState.LOSE
                  ? "md:animate-(--my-ripple) animate-(--my-small-ripple)"
                  : ""
              }
              style={{}}
              disabled={true}
              pick={machinePick()!}
            />
          )}
        </div>
      </div>
    </div>
  );
}
