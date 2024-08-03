import React from "react";
import NativeAPICard from "./NativeAPICard";

export default function NativeAPIPage() {
  return (
    <div className="my-4 flex flex-col gap-4 md:flex-row">
      <NativeAPICard />
      <NativeAPICard />
      <NativeAPICard />
    </div>
  );
}
