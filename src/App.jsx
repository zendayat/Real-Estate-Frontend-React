import {QueryClient, QueryClientProvider} from 'react-query'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Website from "./pages/Website";
import { Suspense } from 'react';
import {ReactQueryDevtools} from 'react-query/devtools'
import Layout from './components/Layout/Layout';
import Properties from './pages/Properties/Properties';
import {ToastContainer} from 'react-toastify'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties" element={<Properties />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}

export default App;
