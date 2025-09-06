import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      
      {/* ------------------- Header ------------------- */}
      <Header />

      {/* ------------------- Main Content ------------------- */}
      <main
        className="flex-1 container-max py-6 animate-fadeIn"
        role="main"
      >
        <Outlet />
      </main>

      {/* ------------------- Footer ------------------- */}
      <Footer />
      
    </div>
  );
}
