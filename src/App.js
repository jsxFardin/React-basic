import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Nurain from './components/Nurain';
// import Hello from './components/Hello';
import Calculator from './components/Calculator';

function App() {
  const num1 = 10,
        num2 = 20;
  return (
    <div>
      {/* <Hello name="akkas" age="21" profession="Fisher man"/> */}
      <Calculator num1={num1} num2={num2}/>
    </div>
  );
}

export default App;
