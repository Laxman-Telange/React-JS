import PropTypes from "prop-types"; // Import PropTypes
import "./Calculator.css";

export const CalculatorUI = ({
  input,

  handleClick,
  handleEvaluate,
  handleClear,
  handleDelete,
}) => {
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button className="equals" onClick={handleEvaluate}>
          =
        </button>
      </div>
    </div>
  );
};

// Prop validation
CalculatorUI.propTypes = {
  input: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleEvaluate: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
