
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Website from "./pages/Website";
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Website />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
