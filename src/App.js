import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState("")

  const [data,setData] = useState([])

  const [isPressed,setisPressed] = useState(false)

  const functionText = (str) =>{
    setValue(str)
  }

  const functionClick = () =>{
    setisPressed(!isPressed)
  }

  useEffect(()=>{
    fetch(`https://content.guardianapis.com/search?q=${value}&api-key=d945f5b4-e12b-4825-909b-1c12a410059b`)
    .then(res=> res.json()) 
    .then(info => setData(info.response.results));
  },[isPressed])
console.log(data)
  return (
    <div className="App">
        <input onChange={(event)=> functionText(event.target.value)} type="text"/>
        <button onClick={functionClick}>search</button>
        <div>{data.map(element => {
          return(
            <p>{element.webTitle}</p>
          )
        })}</div>
    </div>
  );
}

export default App;
