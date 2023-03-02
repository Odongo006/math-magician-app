import Total from './total';

function calculator() {
  return (
    <div className="calculator-container">
      <Total />
      <div className="calc-buttons-container">
        <span className="calc-button">AC</span>
        <span className="calc-button">+/-</span>
        <span className="calc-button">%</span>
        <span className="calc-button">÷</span>
        <span className="calc-button">7</span>
        <span className="calc-button">8</span>
        <span className="calc-button">9</span>
        <span className="calc-button">x</span>
        <span className="calc-button">4</span>
        <span className="calc-button">5</span>
        <span className="calc-button">6</span>
        <span className="calc-button">-</span>
        <span className="calc-button">1</span>
        <span className="calc-button">2</span>
        <span className="calc-button">3</span>
        <span className="calc-button">+</span>
        <span className="calc-button">0</span>
        <span className="calc-button">.</span>
        <span className="calc-button">=</span>
      </div>
    </div>
  );
}
export default calculator;
