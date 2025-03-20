import { useEffect } from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";
import './lib/i18n';
import { useTranslation } from "react-i18next";

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
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;