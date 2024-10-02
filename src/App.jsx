import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
      <div className='flex flex-col general'>
        <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Outlet />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
          {/* <Route path="/users">
            <Users />
            </Route>
            <Route path="/">
            <Home />
            </Route> */}
        </Routes>
            <Footer/>
      </div>
    </Router>

    
  )
}




export default App
