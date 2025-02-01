import { useState } from "react";

export const InputChange = () => {
  const [checked, setChecked] = useState("");

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};
