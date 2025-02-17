import React from "react";
import Home from "./_screen/Home";
import JustDropped from "./_screen/JustDropped";

export default function page() {
  return (
    <div>
      {/* Home  */}

      <Home />
      {/* Just Dropped  */}
      <div className=" mt-10">
        <JustDropped />
      </div>
    </div>
  );
}
