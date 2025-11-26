import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { StatsBar } from "./components/StatsBar";
import { TrendingGigs } from "./components/TrendingGigs";
import { HowItWorks } from "./components/HowItWorks";
import { TopCreators } from "./components/TopCreators";
import { LiveActivity } from "./components/LiveActivity";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

type Page = "home" | "login" | "register";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
  };

  const handleRegisterSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage("home");
  };

  // Render authentication pages
  if (currentPage === "login") {
    return (
      <Login
        onRegisterClick={() => setCurrentPage("register")}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (currentPage === "register") {
    return (
      <Register
        onLoginClick={() => setCurrentPage("login")}
        onRegisterSuccess={handleRegisterSuccess}
      />
    );
  }

  // Render home page
  return (
    <div className="min-h-screen bg-white">
      <NavBar onAuthClick={() => setCurrentPage(isAuthenticated ? "home" : "register")} />
      <HeroSection onRegisterClick={() => setCurrentPage("register")} />
      <StatsBar />
      <TrendingGigs />
      <HowItWorks />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <TopCreators />
          </div>
          <div className="lg:col-span-1">
            <LiveActivity />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}