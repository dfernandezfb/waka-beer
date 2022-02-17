import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/registro' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/home' element={<PrivateRoute><Home/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;
