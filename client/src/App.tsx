// ==========================================================================
// QARAT Community - App Router
// Design: Refined Warmth - Japanese Minimalism × Warm Scandinavian
// Routes: Home + 5 Event Detail pages
// ==========================================================================

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/qarat-community" component={Home} />
        <Route path="/qarat-community/events/:id" component={EventDetail} />
        <Route path="/qarat-community/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
