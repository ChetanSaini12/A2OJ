import "./App.css";
import "particles.js/particles";
import CodeEditor from "./Components/CodeEditor";
import A2oj_M from "./Components/A2oj_M/A2oj_M";
import LeaderBoard from "./Components/LeaderBoard";
import "particles.js/particles";
import Navbar from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero//Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { Footer } from "./Components/Footer/Footer";
import About from "./Components/Abouts/About";
import LaddersPage from "./Components/A2oj_M/ladders/[laddersId]";
import Nopage from "./Components/Nopage/Nopage";
import Form from "./Components/Form/form";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.particlesJS.load("particles", "/particlesjs-config.json");
  Aos.init();
  return (
    <div className="App">
      <div className="relative">
        <div className="fixed top-0 left-0 -z-50">
          <div
            id="particles"
            style={{ background: "#08081b" }}
            className="w-screen h-screen"
          />
        </div>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index path="/" element={<Hero />}></Route>
            <Route index path="/home" element={<Hero />}></Route>
            <Route path="/a2oj" element={<A2oj_M />}></Route>
            <Route path="/leaderboard" element={<LeaderBoard />}></Route>
            <Route path="/roadmap" element={<Roadmap />}></Route>
            <Route path="/code-editor" element={<CodeEditor />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/ladders" element={<LaddersPage />}></Route>
            <Route path="*" element={<Nopage />} />
            {/* <Route path="/form" element={<Form />} /> just for testing purpose*/}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
