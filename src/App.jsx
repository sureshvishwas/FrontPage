import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Component/Nav';
import Home from './Component/Home';
import Blogs from './Component/Blogs';
import Footer from './Component/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="Footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
