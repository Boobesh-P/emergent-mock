import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Standardized relative imports to prevent Vite alias errors
import Navbar from "./components/Navbar";
import Footer from "./components/footer"; // Fixed lowercase 'f' to match your actual file
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) return; // let anchor links handle their own scroll
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname, hash]);
    return null;
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <main className="min-h-[60vh]">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;