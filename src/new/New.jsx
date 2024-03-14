import React, { useState } from "react";

const New = () => {
  const [Btn, setBtn] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
  });
  return (
    <div>
      <h1>Form</h1>
      {/* <button
        name="btn1"
        onClick={() => {
          setBtn((prev) => ({ ...prev, [e.target.name]: "true" }));
        }}
      >
        btn1
      </button>
      <button
        name="btn2"
        onClick={() => {
          setBtn((prev) => ({ ...prev, [e.target.name]: "true" }));
        }}
      >
        btn2
      </button>
      <button
        name="btn3"
        onClick={() => {
          setBtn((prev) => ({ ...prev, [e.target.name]: "true" }));
        }}
      >
        btn3
      </button> */}
    </div>
  );
};

export default New;
