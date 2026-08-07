import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Home is the landing route for most visitors, so it stays in the initial bundle.
// Every other page is code-split and fetched on navigation.
import Home from "./pages/Home";

// Main pages
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const PlanningProcess = lazy(() => import("./pages/PlanningProcess"));
const VirtualFamilyOffice = lazy(() => import("./pages/VirtualFamilyOffice"));
const Team = lazy(() => import("./pages/Team"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Service pages
const AccountingTax = lazy(() => import("./pages/services/AccountingTax"));
const TaxPlanning = lazy(() => import("./pages/services/TaxPlanning"));
const TaxPreparation = lazy(() => import("./pages/services/TaxPreparation"));
const IRSRepresentation = lazy(() => import("./pages/services/IRSRepresentation"));
const EstateTrust = lazy(() => import("./pages/services/EstateTrust"));
const RetirementPlanning = lazy(() => import("./pages/services/RetirementPlanning"));
const FinancialPlanning = lazy(() => import("./pages/services/FinancialPlanning"));
const BusinessAdvisory = lazy(() => import("./pages/services/BusinessAdvisory"));
const CFOServices = lazy(() => import("./pages/services/CFOServices"));
const Payroll = lazy(() => import("./pages/services/Payroll"));
const BusinessValuations = lazy(() => import("./pages/services/BusinessValuations"));
const EntityStructuring = lazy(() => import("./pages/services/EntityStructuring"));
const CashFlow = lazy(() => import("./pages/services/CashFlow"));
const SuccessionPlanning = lazy(() => import("./pages/services/SuccessionPlanning"));

// Testimonials
const Testimonials = lazy(() => import("./pages/Testimonials"));

// Legal pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));

// City pages
const Weston = lazy(() => import("./pages/cities/Weston"));
const Plantation = lazy(() => import("./pages/cities/Plantation"));
const Sunrise = lazy(() => import("./pages/cities/Sunrise"));
const Davie = lazy(() => import("./pages/cities/Davie"));
const FortLauderdale = lazy(() => import("./pages/cities/FortLauderdale"));

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/planning-process" component={PlanningProcess} />
      <Route path="/virtual-family-office" component={VirtualFamilyOffice} />
      <Route path="/team" component={Team} />
      <Route path="/testimonials" component={Testimonials} />

      {/* Service pages */}
      <Route path="/services/accounting-tax" component={AccountingTax} />
      <Route path="/services/tax-planning" component={TaxPlanning} />
      <Route path="/services/tax-preparation" component={TaxPreparation} />
      <Route path="/services/irs-representation" component={IRSRepresentation} />
      <Route path="/services/estate-trust-planning" component={EstateTrust} />
      <Route path="/services/retirement-planning" component={RetirementPlanning} />
      <Route path="/services/financial-planning" component={FinancialPlanning} />
      <Route path="/services/business-advisory" component={BusinessAdvisory} />
      <Route path="/services/cfo-services" component={CFOServices} />
      <Route path="/services/payroll" component={Payroll} />
      <Route path="/services/business-valuations" component={BusinessValuations} />
      <Route path="/services/entity-structuring" component={EntityStructuring} />
      <Route path="/services/cash-flow" component={CashFlow} />
      <Route path="/services/succession-planning" component={SuccessionPlanning} />

      {/* City SEO pages */}
      <Route path="/weston-fl-cpa-accounting-tax-services" component={Weston} />
      <Route path="/plantation-fl-cpa-accounting-tax-services" component={Plantation} />
      <Route path="/sunrise-fl-cpa-accounting-tax-services" component={Sunrise} />
      <Route path="/davie-fl-cpa-accounting-tax-services" component={Davie} />
      <Route path="/fort-lauderdale-fl-cpa-accounting-tax-services" component={FortLauderdale} />

      {/* Legal pages */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {/* Route chunks are small and same-origin; an empty fallback avoids a
              loading flash between pages. */}
          <Suspense fallback={null}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
