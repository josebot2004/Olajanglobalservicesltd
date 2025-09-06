import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Site Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 transition-opacity duration-700 ease-in-out animate-fadeIn">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
