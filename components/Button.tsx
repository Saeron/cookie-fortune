import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="bg-pink-500 text(white) font-bold text-2xl 
      py-2 px-6 mt-10 rounded transition duration-200 ease-in-out hover:scale-150"
    >
      Crack
    </button>
  );
}
