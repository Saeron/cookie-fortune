import { asset } from "$fresh/src/runtime/utils.ts";
import CrackCookie from "../islands/crackCookie.tsx";

export default function Home() {
  return (
    <>
      <head>
        <title>Fortune Cookie</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <main class="flex flex-col items-center bg-pink-100 h-screen w-screen">
        <h1 class="mt-20 text-center text-6xl font-bold p-4 text(pink-400) font-serif">
          Fortune Cookie
        </h1>
        <img
          class="mt-10"
          width={200}
          src={asset(
            "fortune-cookie.svg",
          )}
        />
        <CrackCookie />
      </main>
    </>
  );
}
