import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import CounterContainer from './components/counter-container/CounterContainer'
import Counter from './components/counter/Counter'
import Parent from './components/props/parent/Parent'
import ContextProvider from './components/context/ContextProvider'
import Events from './components/events/Events'
import AxiosFetch from './components/axios-fetch/AxiosFetch'

function App() {

  return (
    <>
      {/* Recall that to use the nav bar, we need to use it inside of the browser router,
      and add in specific routes */}
      <BrowserRouter>
        {/* Can add a slash to make it a self-closing tag instead of an open tag and a closing one */}
        <Nav /> 
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="/counter-container" element={<CounterContainer />}/>
          <Route path="/props" element={<Parent />}/>
          <Route path="/context" element={<ContextProvider />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/axios-fetch" element={<AxiosFetch />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
