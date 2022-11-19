import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Gallery from './components/gallery';
import UserForm from './components/UserForm';
import UserFormLayout from './components/UserFormLayout';
import Home from './components/Home';

function App() {
  var name = "Asif";
  var course = "Web development";
  return (
  <>       
    <Header/>
    <Home/>
    <hr></hr>
  </>
   
  );
}

export default App;


