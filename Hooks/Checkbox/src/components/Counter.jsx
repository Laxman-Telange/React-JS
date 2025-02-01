import PropTypes from "prop-types";
export const CounterDisplay = ({ count, onIncrement, onDecrement }) => {
  const styleone = { backgroundColor: "#F7CFD8" };
  const styletwo = { backgroundColor: "#9ACBD0" };
  return (
    <div className="btn">
      <p>Count:{count}</p>
      <button onClick={onIncrement} style={styleone}>
        Increment
      </button>
      <button onClick={onDecrement} style={styletwo}>
        Decrement
      </button>
    </div>
  );
};
CounterDisplay.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
