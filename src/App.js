import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ProductsState from "./context/products/ProductsState";
import UserProvider from "./context/UserContext";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Register from "./pages/Register";
import AdminRoute from "./routes/AdminRoute";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Router>
      <UserProvider>
        <ProductsState>
          <Layout>
            <Routes>
              <Route path="*" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/registro" element={<PublicRoute><Register /></PublicRoute>} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
              <Route path="/productos" element={<PrivateRoute><Products /></PrivateRoute>} />
              <Route path="/productos/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>} />
            </Routes>
        </Layout>
        </ProductsState>
      </UserProvider>
    </Router>
  );
}

export default App;
