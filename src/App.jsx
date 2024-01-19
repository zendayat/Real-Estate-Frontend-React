
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Website from "./pages/Website";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Website/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
