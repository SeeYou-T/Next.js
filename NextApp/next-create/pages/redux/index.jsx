import React, { useRef, useState } from "react";
import store from "../../store";
import {
  fetchValueAction,
  fetchDelValueAction,
} from "../../store/actionCreators";

export default function Redux() {
  const [state, setState] = useState(store.getState());
  const ref = useRef();

  const handleAddText = () => {
    store.dispatch(fetchValueAction(ref.current.value));
    ref.current.value = "";
  };

  const handleDelText = (index) => {
    store.dispatch(fetchDelValueAction(index));
  };

  const storeChange = () => {
    setState(store.getState());
  };
  store.subscribe(storeChange);

  return (
    <div>
      <input ref={ref} type="text" />
      <button onClick={handleAddText}>添加</button>
      {state.list.map((item, index) => (
        <div key={item}>
          {item}
          <button
            onClick={() => {
              handleDelText(index);
            }}
          >
            删除
          </button>
        </div>
      ))}
    </div>
  );
}
