import React, { useMemo, useReducer } from "react";
import ComponentB from "./ComponentB";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        countA: state.countA + 1,
        countB: state.countB + 1,
        countC: state.countC + 1,
        countD: state.countD + 1,
      };
    default:
      return state;
  }
};

const ComponentA = () => {
  const [state, dispatch] = useReducer(reducer, {
    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0,
  });

  useMemo(
    () =>
      setInterval(() => {
        dispatch({ type: "increment" });
      }, 1),
    []
  );

  return (
    <div>
      <ComponentB
        countA={state.countA}
        countB={state.countB}
        countC={state.countC}
        countD={state.countD}
      />
    </div>
  );
};

export default ComponentA;
