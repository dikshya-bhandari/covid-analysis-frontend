import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Header from "./components/header";
import NoPage from "./pages/noPage";
import Visualize from "./pages/visualize";
import WorldMap from "./pages/worldMap";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualize" element={<Visualize />} />
        <Route path="/visualize-map" element={<WorldMap />} />
        {/* <Route path="/explore/:id" element={<ExploreDetail />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
