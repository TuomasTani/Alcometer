import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function calculate (e) {
    e.preventDefault();
   // Formula for calculating blood alcohol level.
   let formula=0;
   const litres = (bottles * 0.33);
   const grams = (litres * 8 * 4.5);
   const burning = weight / 10;
   const grams2 = grams - (burning * time);

   if (gender === 'male') {
    formula = grams2 / (weight * 0.7);
   }else{
    formula = grams2 / (weight * 0.6);
   }
   if (formula < 0) {
    formula = 0;
    setResult (formula);
    
   }else{
    setResult (formula);
   }


   }


  return (
    <form onSubmit={calculate}>
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)} ></input>
      </div>
      <div>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e =>setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e =>setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <output>
          {result.toFixed(2)}
        </output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
