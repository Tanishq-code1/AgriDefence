import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import PestDetectionPage from "./pages/PestDetectionPage";
import PestLibraryPage from "./pages/PestLibraryPage";
import DashboardPage from "./pages/DashboardPage";
import PrecisionAgPage from "./pages/PrecisionAgPage";
import CommunityPage from "./pages/CommunityPage";
import RoadmapPage from "./pages/RoadmapPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn"; // Now this import will work

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pest-detection" element={<PestDetectionPage />} />
                <Route path="/pest-library" element={<PestLibraryPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                  path="/precision-agriculture"
                  element={<PrecisionAgPage />}
                />
                {/* <Route path="/community" element={<CommunityPage />} /> */}
                <Route path="/roadmap" element={<RoadmapPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
