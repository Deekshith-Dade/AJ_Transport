import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Qualities from './components/Qualities';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Jumbotron /><Qualities /><Services /><Contact /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;