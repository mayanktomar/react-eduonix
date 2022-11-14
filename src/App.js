import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Gallery from './components/gallery';
import UserForm from './components/UserForm';
import UserFormLayout from './components/UserFormLayout';

function App() {
  var name = "Asif";
  var course = "Web development";
  return (
  <>       
    <Header/>
    <Gallery/>
    <hr></hr>
    <UserFormLayout/>
  </>
   
  );
}

export default App;


