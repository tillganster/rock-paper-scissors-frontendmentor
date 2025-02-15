import { PickOptions } from "~/model/picks.model";
import { createSignal, mergeProps, onMount } from "solid-js";
import { size } from "lodash";

export interface PickProps {
  pick: PickOptions;
  disabled?: boolean;
  addittionalClass?: string;
  onClick?: Function;
  ref?: any;
  style?: Object;
  size: "m" | "xl" | "l";
}

const SIZE_MAPPER = {
  l: ["md:w-64", "md:h-64", "md:p-8", "sm:w-40", "sm:h-40"],
  m: ["w-40", "h-40"],
  xl: ["sm:w-44", "sm:h-44", "md:w-64", "md:h-64"],
};

export default function Pick(userProps: PickProps) {
  const [rotate, setRotate] = createSignal(180);
  const props = mergeProps({ size: "l" }, userProps);

  onMount(() => {
    setTimeout(() => setRotate(0), 10);
  });

  return (
    <div
      onClick={() => props.onClick && props.onClick()}
      ref={props.ref}
      style={{
        transform: `rotate(${rotate()}deg)`,
        transition: "transform  1.3s ease",
        background: `linear-gradient(var(--${props.pick}-gradient-from),var(--${props.pick}-gradient-to))`,
        "box-shadow": "inset 0px -12px 0px -3px #00000078",
        "pointer-events": props.disabled ? "none" : "all",
        ...props.style,
      }}
      class={`z-1 rounded-full  ${SIZE_MAPPER[props.size].join(" ")} w-30 h-30 p-5  cursor-pointer hover:scale-110 active:rotate-45 ${props.addittionalClass}`}
    >
      <div
        style={{
          "box-shadow": "rgb(186 190 211 / 53%) -1px 13px 0px -4px inset",
        }}
        class={
          "w-full h-full  bg-white rounded-full flex items-center justify-center"
        }
      >
        <img
          src={`images/icon-${props.pick}.svg`}
          class={"w-1/2"}
          alt={"rock"}
        />
      </div>
    </div>
  );
}
