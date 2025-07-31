import { useState } from "react";
import InputText from "./InputText";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <InputText />
    </div>
  );
};

export default Counter;