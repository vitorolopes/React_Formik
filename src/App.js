import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Contact from './pages/Contact'
import './App.css';
import { useThemeContext } from "./context/ThemeContextProvider";

function App() {
  const {dummyValue, theme} = useThemeContext();

  return (
    <div className={`app ${theme}`}>
      <Router>

        <Navbar/>

        <Routes>

          <Route exact path="/" element={ <Home/> } />

          <Route path="/users" element={ <Users/>} />

          <Route path="/user/:id" element={ <User/>} />

          <Route path="/contact" element= { <Contact/> } /> 

        </Routes>

      </Router>
    </div>
  );
}

export default App;
