import {useState} from 'react';
import './App.css';
import staticData from './data'
// console.log(staticData)

function App() {
  const [doctors,setDoctors] = useState(staticData)
  console.log(doctors)
  return (
    <div className="App">
      <h1>Find a Doctor App!</h1>
    </div>
  );
}

export default App;
