/** @jsx h */
import { tw } from "@twind"
import { h } from "preact"
import Counter from "../islands/Counter.tsx"

export default function Home() {
  return (
    <div class={tw`max-w-screen-md p-4 mx-auto text-4xl`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </div>
  );
}
