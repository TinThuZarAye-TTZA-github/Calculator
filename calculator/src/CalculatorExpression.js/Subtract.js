import { useState } from 'react';
import '../styles/calculator-expression.css';
import '../styles/calculator.css';
function Subtract() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [answer, setAnswer] = useState();

  function handleClick(e) {
    // answer = number1 + number2;

    setAnswer(Number(number1) - Number(number2));
    e.preventDefault();
    alert('Added');

    setNumber1(0);
    setNumber2(0);
  }

  return (
    <div className='form'>
      <h1 style={{ color: 'red' }}>
        Subtracting Page <br />
        <div>
          <label style={{ color: 'red' }}>First Number : </label>
          <input
            className='input'
            type='text'
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label>Second Number</label>
          <input
            className='input'
            type='text'
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <button id='btn' onClick={handleClick}>
            Subt
          </button>
          <h1 style={{ color: 'red' }}>Result : {answer}</h1>
        </div>
      </h1>
    </div>
  );
}
export default Subtract;
