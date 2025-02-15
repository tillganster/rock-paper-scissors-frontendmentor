import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import Scoreboard from "~/components/Scoreboard";
import RulesButton from "~/components/Rules.button";
import { Link, MetaProvider } from "@solidjs/meta";

export default function App() {
  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <>
          <MetaProvider>
            <Link
              rel="mask-icon"
              color={"white"}
              href={`${import.meta.env.SERVER_BASE_URL}logo.svg`}
            />
          </MetaProvider>
          <main
            style={{ height: "100dvh" }}
            class=" h-screen w-screen flex flex-col justify-around p-10"
          >
            <Scoreboard />
            <Suspense>{props.children}</Suspense>
            <RulesButton />
          </main>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
