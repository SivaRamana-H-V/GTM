// ─────────────────────────────────────────────────────────────
// src/App.jsx
// ─────────────────────────────────────────────────────────────
// BrowserRouter, global layout shell, and all route definitions.
// Lazy-loads every page for optimal code-splitting.

import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { SparkleCanvas } from './components/SparkleCanvas'; // Import here

// Lazy page imports — each page is its own chunk
const HomePage = lazy(() => import("./pages/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ShortlistPage = lazy(() => import("./pages/ShortlistPage"));
const SkypassPage = lazy(() => import("./pages/SkypassPage"));
const JoinNextPage = lazy(() => import("./pages/JoinNextPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Scroll-to-top on every route change (mirrors SPA behaviour of vibecon.com)
function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

// Full-screen loading fallback — minimal, non-jarring
function PageLoader() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F9F5]">
        <div className="w-5 h-5 rounded-full border-2 border-[#009E52] border-t-transparent animate-spin" />
    </div>
  );
}

// Pages that show the global Navbar + Footer shell
// The Register page in VibeCon uses a split-panel layout without the
// standard footer — handle per-page opt-out via the page itself if needed.
function AppShell() {
  return (
    <div className="flex flex-col min-h-screen font-figtree bg-[#F4F9F5]">
      <SparkleCanvas />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/shortlist" element={<ShortlistPage />} />
            <Route path="/skypass" element={<SkypassPage />} />
            <Route path="/join-next" element={<JoinNextPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ScrollReset />
        <AppShell />
      </AppProvider>
    </BrowserRouter>
  );
}
