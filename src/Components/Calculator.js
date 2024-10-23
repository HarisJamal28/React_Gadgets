import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '%') {
        if (input) {
            const percentage = eval(input) / 100;
            setResult(percentage);
            setInput('');
        }
    } else {
        setInput((prev) => prev + value);
    }
};

const handleClear = () => {
    setInput('');
    setResult('');
};

const handleCalculate = () => {
    try {
        const evalResult = eval(input);
        setResult(evalResult);
        setInput('');
    } catch (error) {
        setResult('Error');
    }
};


  return (
    <div className='calculator'>
      <section className='main'>

        <br />

        <div className='Calculator'>
          <form>
          <div className="input-display">{input}</div>
          <div className="result-display">{result}</div>
          </form>
          <div className='grid1'>
            <button onClick={handleClear}>C</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={handleCalculate}>=</button>
        </div>
          <div className='grid'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9,'.','%', 0].map((number) => (
              <button key={number} onClick={() => handleClick(number.toString())}>
                  {number}
              </button>
          ))}
        </div>
        <br />

        </div>

      </section>
    </div>
  );
}
