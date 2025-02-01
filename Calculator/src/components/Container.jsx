import { useState } from "react";
import { CalculatorUI } from "./Calculat";

export const CalculatorContainer = () => {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEvaluate = () => {
    try {
      const evaluatedResult = eval(input); // Don't use eval in production

      setInput(evaluatedResult.toString()); // Update input with the result
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <CalculatorUI
      input={input}
      handleClick={handleClick}
      handleEvaluate={handleEvaluate}
      handleClear={handleClear}
      handleDelete={handleDelete}
    />
  );
};
