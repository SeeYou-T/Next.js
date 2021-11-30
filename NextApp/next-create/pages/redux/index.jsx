import React, { useRef } from "react";
import store from "../../store";

export default function Redux() {
  console.log(store.getState());
  const list = store.getState().list;
  const ref = useRef();

  const action = {
    type: "fetchValue",
    payload: ref.current.value,
  };

  console.log(111111);

  return (
    <div>
      <input ref={ref} type="text" />
      <button
        onClick={() => {
          console.log(ref.current.value);
          ref.current.value = "";
          store.dispatch(action);
        }}
      >
        添加
      </button>
      {list.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}
