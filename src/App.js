import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Contact from './pages/Contact'
import './App.css';


function App() {
  return (
    <div className='app'>
      <Router>

        <Navbar/>

        <Routes>

          <Route exact path="/" element={ <Home/> } />

          <Route path="/users" element={ <Users/>} />

          <Route path="/users/:id" element={ <User/>} />

          <Route path="/contact" element= { <Contact/> } /> 

        </Routes>

      </Router>
    </div>
  );
}

export default App;
