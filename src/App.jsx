// import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from  "./pages/Home";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
// import ProtectedRoute from './components/ProtectedRoute';
// import UserProfile from './pages/UserProfile';
// import LoginPage from './pages/LoginPage';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<WishlistPage/>}/>
          {/* <Route path="/loginpage" element={<Login/>}/> */}
          {/* <Route path="/profile" element={<ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App