import React, { useState, useMemo, useCallback, useEffect } from "react";

function Example7() {
  const [xiaohong, setXiaohong] = useState("小红待客状态");
  const [zhiling, setZhiling] = useState("志玲待客状态");
  return (
    <>
      <button
        onClick={() => {
          setXiaohong(new Date().getTime());
        }}
      >
        小红
      </button>
      <button
        onClick={() => {
          setZhiling(new Date().getTime() + ",志玲向我们走来了");
        }}
      >
        志玲
      </button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  );
}

function ChildComponent({ name, children }) {
  function changeXiaohong() {
    return () => {
      console.log("她来了，她来了。小红向我们走来了");
      return name + ",小红向我们走来了";
    };
  }

  const [CallBack, setCallBack] = useState(0);

  //   console.log(name);
  //   const actionXiaohong = useMemo(() => changeXiaohong(name), [name]);
  const actionXiaohong = useCallback(changeXiaohong(), [name]);
  //   const aaa = useCallback(() => {
  //     setCallBack(CallBack + 2);
  //   }, [name]);

  //   console.log(CallBack);
  return (
    <>
      <div>{actionXiaohong()}</div>
      <div>{children}</div>
      {/* <button onClick={aaa}>CallBack</button> */}
    </>
  );
}

export default Example7;
