import { useEffect } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import './lib/i18n';
import { initCustomScrollbar } from './lib/scrollbar';

function Router() {
  const { i18n, t } = useTranslation();
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.title = t("title");
  }, [i18n.language, t]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize custom scrollbar
    const cleanup = initCustomScrollbar();
    return cleanup;
  }, []);

  return (
    <div className="custom-scrollbar h-screen overflow-y-auto">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;