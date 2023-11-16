import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import ManageBooks from "./pages/ManageBooks";
import Header from "./components/Header";
import AllBooks from "./pages/AllBooks";
import Footer from "./components/Footer";
import StaticHeader from "./components/StaticHeader";
import { AuthProvider } from "./context/DecodedToken";
import { SearchFilterContextProvider } from "./context/SearchFilterContext";
import { CartUpdateContextProvider } from "./context/CartUpdateContext";
import { useEffect } from "react";
import ManageUsers from "./pages/ManageUsers";
import About from "./pages/About";

function App() {

  useEffect(()=>{
    document.title = "BookHive"
  })

  return (
    <AuthProvider>

      <SearchFilterContextProvider>
        <Router>
        <CartUpdateContextProvider>
          <StaticHeader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/managebooks" element={<ManageBooks />} />
            <Route path="/manageusers" element={<ManageUsers />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/books" element={<AllBooks />} />
            <Route path="/about" element={<About />}/>
          </Routes>
          <Footer />
          </CartUpdateContextProvider>
        </Router>
      </SearchFilterContextProvider>

    </AuthProvider>
  );
}

export default App;
