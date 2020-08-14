import React, {useState, useEffect} from 'react'
import axios from 'axios';


const App = () => {

  const [num,setNum] = useState();
  const [name,setName] = useState();
  const [moves,setMoves] = useState();

  useEffect(()=> {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
    <select value= {num} onChange={(event)=>{setNum(event.target.value);}}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>

      <br/>

    <h1>You chose <span style={{color:"#ff0000"}}>{num} value</span></h1>
    <h1>Hi, My name is <span style={{color:"#ff0000"}}>{name}</span></h1>
    <h1>I have <span style={{color:"#ff0000"}}>{moves} moves!!</span></h1>
    </>
  )
}

export default App
