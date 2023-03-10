import { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleInput = (event) => {
    setState(calculate(state, event.target.textContent));
  };

  return (
    <section className="main-container calc-main-container">
      <h2 className="title-calculator">Let&apos;s do some math!</h2>
      <div className="calculator-container">
        <input className="calc-total" type="text" value={state.next || state.total || '0'} />
        <div className="calc-buttons-container">
          <button type="button" className="calc-button" onClick={handleInput}>AC</button>
          <button type="button" className="calc-button" onClick={handleInput}>+/-</button>
          <button type="button" className="calc-button" onClick={handleInput}>%</button>
          <button type="button" className="calc-button" onClick={handleInput}>÷</button>
          <button type="button" className="calc-button" onClick={handleInput}>7</button>
          <button type="button" className="calc-button" onClick={handleInput}>8</button>
          <button type="button" className="calc-button" onClick={handleInput}>9</button>
          <button type="button" className="calc-button" onClick={handleInput}>x</button>
          <button type="button" className="calc-button" onClick={handleInput}>4</button>
          <button type="button" className="calc-button" onClick={handleInput}>5</button>
          <button type="button" className="calc-button" onClick={handleInput}>6</button>
          <button type="button" className="calc-button" onClick={handleInput}>-</button>
          <button type="button" className="calc-button" onClick={handleInput}>1</button>
          <button type="button" className="calc-button" onClick={handleInput}>2</button>
          <button type="button" className="calc-button" onClick={handleInput}>3</button>
          <button type="button" className="calc-button" onClick={handleInput}>+</button>
          <button type="button" className="calc-button" onClick={handleInput}>0</button>
          <button type="button" className="calc-button" onClick={handleInput}>.</button>
          <button type="button" className="calc-button" onClick={handleInput}>=</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
