import RulesButton from "~/components/Rules.button";
import { store } from "~/stores/game.store";
import Game from "~/components/Game";
import Duell from "~/components/Duell";
import RulesDialog from "~/components/RulesDialog";

export default function Home() {
  return (
    <>
      {store.userPick === undefined && <Game></Game>}
      {store.userPick !== undefined && <Duell pick={store.userPick}></Duell>}
      <RulesDialog />
    </>
  );
}
