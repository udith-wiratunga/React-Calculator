import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
  const [display,setDisplay] = useState('');

  // function handle click
  const handleButtonClick =(value) =>{
    setDisplay(display+value);
  }

  // function calculate results
  const calculateResults = () =>{
    try{
      setDisplay(eval(display).toString())
    }
    catch (error) {
      setDisplay('Error');
    }
  }

  const clearDisplay = () => {
    setDisplay('');
  }


  return <div className="calculator">
          <div className='display'>{display}</div>
          <div className='buttons'>{[
          "7","8","9","+",
          "4","5","6","-",
          "1","2","3","*",
          "0",".","=","/"
        ].map((value) => (
          <button key={value} onClick={()=> value ==='='?calculateResults():handleButtonClick(value)}>{value}</button>
          
        ))}
        <button onClick={clearDisplay}>C</button>
        </div>

        </div>;
  
}

export default Calculator