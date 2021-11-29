import React from "react";
import useWinSize from "./useWinSize";

export default function Index() {
  const size = useWinSize();
  return (
    <>
      <div>{size.width}</div>
      <div>{size.height}</div>
    </>
  );
}
