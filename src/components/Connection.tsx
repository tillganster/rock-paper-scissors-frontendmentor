import {
  Accessor,
  createEffect,
  createSignal,
  JSX,
  onMount,
  Show,
  onCleanup,
} from "solid-js";
import { debounce, throttle } from "lodash";

interface ConnectionProps {
  from: Accessor<HTMLElement | undefined>;
  to: Accessor<HTMLElement | undefined>;
}

function getCenter(el: HTMLElement) {
  const { x, y, width, height } = el.getBoundingClientRect();

  const res = {
    x: x + width / 2,
    y: y + height / 2,
  };

  return res;
}

export function Connection({ from, to }: ConnectionProps) {
  const [coords, setCoords] = createSignal<Object>();
  const [width, setWidth] = createSignal(0);

  const handler = (event: Event) => {
    calculate();
  };
  onMount(() => {
    window.addEventListener("resize", handler);
  });

  onCleanup(() => {
    window.removeEventListener("resize", handler);
  });
  createEffect(() => {
    if (from() === undefined || to() === undefined) return;
    calculate();
  });

  const widthAnimation = debounce(async (width: number) => {
    let curWidth = 0;
    while (curWidth < width) {
      curWidth += 5;
      await new Promise((res) => setTimeout(res, 5));

      setWidth(curWidth);
    }
  }, 100);

  const calculate = () => {
    const centerFrom = getCenter(from()!);
    const centerTo = getCenter(to()!);

    const deltaX = centerTo.x - centerFrom.x;
    const deltaY = centerTo.y - centerFrom.y;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    setCoords({
      transform: `rotate(${angle}deg)`,
      top: `${centerFrom.y}px`,
      left: `${centerFrom.x}px`,
    });
    setWidth(0);
    widthAnimation(
      Math.sqrt(
        (centerTo.x - centerFrom.x) ** 2 + (centerTo.y - centerFrom.y) ** 2,
      ),
    );
  };

  return (
    <Show when={coords() !== undefined}>
      <div
        style={{
          position: "absolute",
          "transform-origin": "0% 0%",

          background: "#15233C",
          height: "20px",
          width: `${width()}px`,

          ...coords(),
        }}
      ></div>
    </Show>
  );
}
