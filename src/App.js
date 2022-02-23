import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Router>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="*" element={<PublicRoute><LandingPage /></PublicRoute>} />
            <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/productos" element={<PrivateRoute><Products /></PrivateRoute>} />
            <Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
          </Routes>
        </Layout>
      </UserProvider>
    </Router>
  );
}

export default App;
