import React from "react";
import FilterButtons from "./FilterButtons";
import VideosList from "./VideosList";

function Main() {
  return (
    <div
      className={`flex flex-col w-[100vw] md:w-[90vw] relative top-14 sm:left-[8vw]`}
    >
      <FilterButtons />
      <VideosList />
    </div>
  );
}

export default Main;
