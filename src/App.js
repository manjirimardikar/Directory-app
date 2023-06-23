
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addata from './Components/Addata';
import Setdata from './Components/Setdata';
import Retrieve from './Components/Retrieve';


function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Addata/>}>
      <Route path='addata' element={<Setdata/>}/>
      <Route path='retrieve' element={<Retrieve/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;