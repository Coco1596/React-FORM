import './App.css';
import Admin from './Components/Admin';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddUser from './Components/AddUser';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Admin />} exact/>
    <Route path="/adduser" element={<AddUser />} exact/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
