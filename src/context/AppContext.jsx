// ─────────────────────────────────────────────────────────────
// src/context/AppContext.jsx
// ─────────────────────────────────────────────────────────────
// Provides global state: mobile menu open/close, scroll position,
// and any future shared state (auth, toast notifications, etc.)

import React, { createContext, useContext, useReducer, useCallback } from "react";

const AppContext = createContext(null);

const initialState = {
  mobileMenuOpen: false,
  scrolled: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MOBILE_MENU":
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
    case "CLOSE_MOBILE_MENU":
      return { ...state, mobileMenuOpen: false };
    case "SET_SCROLLED":
      return { ...state, scrolled: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleMobileMenu = useCallback(
    () => dispatch({ type: "TOGGLE_MOBILE_MENU" }),
    []
  );
  const closeMobileMenu = useCallback(
    () => dispatch({ type: "CLOSE_MOBILE_MENU" }),
    []
  );
  const setScrolled = useCallback(
    (val) => dispatch({ type: "SET_SCROLLED", payload: val }),
    []
  );

  return (
    <AppContext.Provider
      value={{ ...state, toggleMobileMenu, closeMobileMenu, setScrolled }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

