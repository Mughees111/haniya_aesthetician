import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import AestheticServices from './pages/AestheticServices';
import ServiceDetail from './pages/ServiceDetail';
import DigitalMarketing from './pages/DigitalMarketing';
import MyWork from './pages/MyWork';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aesthetic-services" element={<AestheticServices />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
