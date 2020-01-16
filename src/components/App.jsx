import React, { useState } from "react";

function App() {
  const [count, countChange] = useState(0);

  function increase() {
    countChange(count + 1);
  }

  function decrease() {
    countChange(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
