"use client"
import Image from "next/image";
import { ButtonIndependentState } from "@/components/button-independent-state";
import { ButtonSharedState } from "@/components/button-shared-state";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1 className="text-3xl font-bold">React Counter Button</h1>
      <h2 className="text-xl">Buttons with independent state</h2>
      <ButtonIndependentState />
      <ButtonIndependentState />

      <h2 className="text-xl">Buttons with shared state</h2>
      <ButtonSharedState count={count} onClick={handleClick} />
      <ButtonSharedState count={count} onClick={handleClick} />
    </main>
  );
}
