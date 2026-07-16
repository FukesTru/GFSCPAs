import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Main pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import PlanningProcess from "./pages/PlanningProcess";
import VirtualFamilyOffice from "./pages/VirtualFamilyOffice";
import Team from "./pages/Team";

// Service pages
import AccountingTax from "./pages/services/AccountingTax";
import TaxPlanning from "./pages/services/TaxPlanning";
import TaxPreparation from "./pages/services/TaxPreparation";
import IRSRepresentation from "./pages/services/IRSRepresentation";
import EstateTrust from "./pages/services/EstateTrust";
import RetirementPlanning from "./pages/services/RetirementPlanning";
import FinancialPlanning from "./pages/services/FinancialPlanning";
import BusinessAdvisory from "./pages/services/BusinessAdvisory";
import CFOServices from "./pages/services/CFOServices";
import Payroll from "./pages/services/Payroll";
import BusinessValuations from "./pages/services/BusinessValuations";
import EntityStructuring from "./pages/services/EntityStructuring";
import CashFlow from "./pages/services/CashFlow";
import SuccessionPlanning from "./pages/services/SuccessionPlanning";

// Testimonials
import Testimonials from "./pages/Testimonials";

// Legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// City pages
import Weston from "./pages/cities/Weston";
import Plantation from "./pages/cities/Plantation";
import Sunrise from "./pages/cities/Sunrise";
import Davie from "./pages/cities/Davie";
import FortLauderdale from "./pages/cities/FortLauderdale";

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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
