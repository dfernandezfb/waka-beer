import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Test from "./pages/Test";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  console.log('hola');
  return (
    <Router>
      <UserProvider>
      <Layout>
      <Routes>
        <Route path="/test/:id" element={<Test/>} />
        <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          />
      </Routes>
          </Layout>
          </UserProvider>
    </Router>
  );
}

export default App;
