import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Gallery from './components/gallery';
import UserForm from './components/UserForm';
import UserFormLayout from './components/UserFormLayout';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  var name = "Asif";
  var course = "Web development";
  return (
    <Router>
       <div>
          <Header/>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
            <Route path="/form" element={<UserFormLayout/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>
          {/* <Home/>
          <hr></hr> */}
        </div>   
    </Router>
   
  );
}

export default App;


