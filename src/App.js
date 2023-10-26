import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import AddBook from "./pages/AddBook";
import Header from "./components/Header";
import Books from "./components/Books";
import Footer from "./components/Footer";
import BookPage from "./pages/BookPage";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:bookid" element={<BookPage />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
