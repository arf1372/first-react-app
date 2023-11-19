import { useState } from "react";
import MyButton from "./MyButton";
import ClickabeImage from "./ClickableImage";

function ClickWrapper() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h1>Welcome to my App!</h1>
      <p>Click the image to increase the count!</p>
      <ClickabeImage setState={setCount} state={count} />
      <MyButton
        counts={count}
        onClick={() => {
          setCount(0);
        }}
      />
    </div>
  );
}

export default ClickWrapper;
