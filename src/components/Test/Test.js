import { useState } from "react";

function Test() {
  const [text, setText] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => {
          setText(text ? false : "I'm about to disappear!");
        }}
      >
        button
      </button>
      {text}
    </div>
  );
}
export default Test;
