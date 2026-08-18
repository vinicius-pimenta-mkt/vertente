// Cartografia Viva — shell de navegação: editorial, territorial e orientado ao próximo passo.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import ServicePage from "@/pages/ServicePage";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function GenericServicePage() { return <ServicePage />; }
function LaudosPage() { return <ServicePage forcedSlug="laudos-e-licencas" />; }
function ConservacaoPage() { return <ServicePage forcedSlug="conservacao-solo-agua" />; }

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos/:slug" component={GenericServicePage} />
      <Route path="/laudos-e-licencas" component={LaudosPage} />
      <Route path="/conservacao-solo-agua" component={ConservacaoPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
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
