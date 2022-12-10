import { useState } from "react";

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue);

    const addToCounter = () => {

    }

  return (
    <div className="counter">

        {/* <input type="number" className="counter_value" id="counter_value" onBlur={()=> {
            let inputBox = document.getElementById('counter_value');
            
            setCounter(inputBox.value)
            inputBox.value = counter;
            previous = counter;
            console.log(counter);
        }}></input> */}

       <span className="counter_value">{counter}</span> 

      <button
        className="btn btn--reset"
        onClick={() => {
            setCounter(initialValue)
            document.getElementById('counter_value').value = initialValue;  
        }}
      >
        Reset
      </button>
      <div className="btn_container">
      
        <button
          className="btn"
          onClick={() => {
            setCounter((previousValue) => previousValue - 1);
            document.getElementById('counter_value').value = counter;  
             
        }}
        >
          -
        </button>

        <button
          className="btn"
          onClick={() =>{
            setCounter((previousValue) => previousValue + 1)
            document.getElementById('counter_value').value = counter;}  
        }
        >
          +    
        </button>
      </div>
    </div>
  );
};

export default Counter;
