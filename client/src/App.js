import './App.css';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react'

function App() {
  const [colorsArr, setColorsArr] = useState([]);
  const inputEl = useRef(null)
  
  const [BGColor, setBGColor] = useState("")

  const dropdownUpdate = (event) => {
    event.preventDefault()
    setBGColor(event.target.value)
  }

  useEffect(() => {
    
  }, [BGColor])

  const submitForm = (event) => {
    event.preventDefault();
    const inputVal = inputEl.current.value
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/color`, {inputVal})
      .then(data => {
        setColorsArr(data.data)        
      })
  }


  return (
    <div className="App" >
      <header className="App-header" style={BGColor ? {background: BGColor} : {background: "gray"}}>
        <h1>Hello!</h1>
        <form onSubmit={submitForm}>
          <input type="string" ref={inputEl} name="color"/>
          <button>Submit</button>
        </form>
        <section>
          <select name="colors" onChange={dropdownUpdate}>
          {colorsArr && colorsArr.map((ele, index)=> {
            return <option key={index} value={ele}>{ele}</option>
          })}
          </select>        
        </section>
      </header>      
    </div>
  );
}

export default App;
