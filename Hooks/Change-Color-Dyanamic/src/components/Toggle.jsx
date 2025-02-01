import { useState } from "react";

export const InputChange = () => {
  const [color, setColor] = useState("red");

  return (
    <div>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={{ backgroundColor: color }}
      >
        <option value="red" style={{ backgroundColor: "red" }}>
          RED
        </option>
        <option value="green" style={{ backgroundColor: "green" }}>
          GREEN
        </option>
        <option value="blue" style={{ backgroundColor: "blue" }}>
          BLUE
        </option>
      </select>
    </div>
  );
};
