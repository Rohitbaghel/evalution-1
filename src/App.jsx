import { Recipe } from './components/recipe';
import { Showrecipe } from './components/Showrecipe';
import {Description} from './components/description'
import {useState} from "react"
import './App.css';

function App() {
  const [data, setData] = useState()
  const [info, setInfo] = useState()
  const getdata = (e) => {
    setData(e)
  }
  const getinfo = (e) => {
    setInfo(e)
  }
  return (
    <div className="App">
      <h1>Recipe Show Application</h1>
      <div className='upper'>
       <Recipe func={getdata} />
       <div className='sec2'><Showrecipe data={data} func={getinfo} /></div>
      </div>
      <h1>Detail</h1>
       <div className='sec3' ><Description e={info} /></div>
    </div>
  );
}

export default App;
