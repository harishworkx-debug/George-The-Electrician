import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ResidentialElectricianPage from "@/pages/ResidentialElectricianPage";
import CommercialElectricianPage from "@/pages/CommercialElectricianPage";
import ElectricalRepairPage from "@/pages/ElectricalRepairPage";
import EmergencyElectricianPage from "@/pages/EmergencyElectricianPage";
import PanelUpgradePage from "@/pages/PanelUpgradePage";
import EVChargerInstallationPage from "@/pages/EVChargerInstallationPage";
import LightingInstallationPage from "@/pages/LightingInstallationPage";
import OutletSwitchRepairPage from "@/pages/OutletSwitchRepairPage";
import CeilingFanInstallationPage from "@/pages/CeilingFanInstallationPage";
import ElectricalInspectionPage from "@/pages/ElectricalInspectionPage";
import ServiceAreasPage from "@/pages/ServiceAreasPage";
import LocationPage from "@/pages/LocationPage";
import ElectricalServicesLocationPage from "@/pages/ElectricalServicesLocationPage";
import ElectricianGlendaleCaPage from "@/pages/ElectricianGlendaleCaPage";
import ElectricianPasadenaCaPage from "@/pages/ElectricianPasadenaCaPage";
import ElectricianBurbankCaPage from "@/pages/ElectricianBurbankCaPage";
import ElectricianLosAngelesCaPage from "@/pages/ElectricianLosAngelesCaPage";
import ElectricianLaCanadaFlintridgeCaPage from "@/pages/ElectricianLaCanadaFlintridgeCaPage";
import ElectricalServicesPasadenaCaPage from "@/pages/ElectricalServicesPasadenaCaPage";
import ElectricalServicesBurbankCaPage from "@/pages/ElectricalServicesBurbankCaPage";
import ElectricalServicesLosAngelesCaPage from "@/pages/ElectricalServicesLosAngelesCaPage";
import ElectricalServicesLaCanadaFlintridgeCaPage from "@/pages/ElectricalServicesLaCanadaFlintridgeCaPage";
import ReviewsPage from "@/pages/ReviewsPage";
import FAQPage from "@/pages/FAQPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/service-areas", element: <ServiceAreasPage /> },
      { path: "/reviews", element: <ReviewsPage /> },
      { path: "/faq", element: <FAQPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/electrical-services-glendale-ca", element: <ElectricalServicesLocationPage /> },
      // 10 service pages
      { path: "/residential-electrician-glendale-ca", element: <ResidentialElectricianPage /> },
      { path: "/commercial-electrician-glendale-ca", element: <CommercialElectricianPage /> },
      { path: "/electrical-repair-glendale-ca", element: <ElectricalRepairPage /> },
      { path: "/emergency-electrician-glendale-ca", element: <EmergencyElectricianPage /> },
      { path: "/electrical-panel-upgrade-glendale-ca", element: <PanelUpgradePage /> },
      { path: "/ev-charger-installation-glendale-ca", element: <EVChargerInstallationPage /> },
      { path: "/lighting-installation-glendale-ca", element: <LightingInstallationPage /> },
      { path: "/outlet-switch-repair-glendale-ca", element: <OutletSwitchRepairPage /> },
      { path: "/ceiling-fan-installation-glendale-ca", element: <CeilingFanInstallationPage /> },
      { path: "/electrical-inspection-glendale-ca", element: <ElectricalInspectionPage /> },
      // Electrician location pages
      { path: "/electrician-glendale-ca", element: <ElectricianGlendaleCaPage /> },
      { path: "/electrician-pasadena-ca", element: <ElectricianPasadenaCaPage /> },
      { path: "/electrician-burbank-ca", element: <ElectricianBurbankCaPage /> },
      { path: "/electrician-los-angeles-ca", element: <ElectricianLosAngelesCaPage /> },
      { path: "/electrician-la-canada-flintridge-ca", element: <ElectricianLaCanadaFlintridgeCaPage /> },
      // Electrical services location pages
      { path: "/electrical-services-pasadena-ca", element: <ElectricalServicesPasadenaCaPage /> },
      { path: "/electrical-services-burbank-ca", element: <ElectricalServicesBurbankCaPage /> },
      { path: "/electrical-services-los-angeles-ca", element: <ElectricalServicesLosAngelesCaPage /> },
      { path: "/electrical-services-la-canada-flintridge-ca", element: <ElectricalServicesLaCanadaFlintridgeCaPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
