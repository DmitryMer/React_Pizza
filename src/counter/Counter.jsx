const Counter = ({ increase, decrease, count, id }) => {
  return (
    <div className="counter">
      <div className="counter-input">
        Количество:
        <input value={count} disabled />
      </div>
      <div className="counter-buttons">
        <button className="counter-buttons__up" onClick={() => increase(id)}>
          +
        </button>
        <button className="counter-buttons__down" onClick={() => decrease(id)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
