import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import DataDrivenWealth from "./components/blog/data-driven-wealth";
import UnderstandingSIFs from "./components/blog/understanding-sifs";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />
          <Route
            path="blog/data-driven-wealth"
            element={<DataDrivenWealth />}
          />
          <Route
            path="blog/understanding-sifs"
            element={<UnderstandingSIFs />}
          />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
