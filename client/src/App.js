import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/example`)
      .then((data) => {
        console.log(data)
        setMessage(data.data.text)
      })
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
