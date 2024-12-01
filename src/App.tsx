import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import HomePage from "./components/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShadCDNThemeProvider } from "@/components/MyComponents/ShadCDNThemeProvider";

function App() {
  return (
    <ShadCDNThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col h-screen">
          <NavBar />
          <div className="border border-collapse border-green-500" />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ShadCDNThemeProvider>
  );
}

export default App;
