import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import ManageBooks from "./pages/ManageBooks";
import Header from "./components/Header";
import AllBooks from "./pages/AllBooks";
import Footer from "./components/Footer";
import BookPage from "./pages/BookPage";
import StaticHeader from "./components/StaticHeader";
import { AuthProvider } from "./context/DecodedToken";

function App() {

  return (
    <AuthProvider>
    <>
      <Router>

        <StaticHeader/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/managebooks" element={<ManageBooks />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:bookid" element={<BookPage />} />
        </Routes>
        <Footer />

      </Router>
    </>
    </AuthProvider>
  );
}

export default App;
