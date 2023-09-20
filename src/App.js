
import './App.css';
import {Routes,Route} from 'react-router-dom';
import SignUp from './components/NavLinks/SignUp';
import SignIn from './components/NavLinks/SignIn';
import HomePage from './components/NavLinks/HomePage';
function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signin' element={<SignIn/>}/>  
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
     
    </div>
  );
}

export default App;
