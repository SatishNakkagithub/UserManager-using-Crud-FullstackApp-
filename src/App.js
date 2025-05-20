
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './Users/AddUser';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';




function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/adduser" element={<AddUser/>}></Route>
        <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
        <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>
      </Routes>

    </Router>
    
  
    </>
   
  );
}

export default App;
