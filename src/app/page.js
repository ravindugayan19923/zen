
import BannerPage from "./components/view/bannerPage";
import Services from "./components/view/services";
import CaseStudy from "./components/view/caseStudy";
import RecentCaseStudy from "./components/view/recentCaseStudy";
import OurDevApproach from "./components/view/ourDevApproach";
import WayOfBuilding from "./components/view/wayOfBuilding";

export default function Home() {

  return (
      <main>
          <BannerPage/>
          <Services/>
          <CaseStudy/>
          <RecentCaseStudy/>
          <WayOfBuilding/>
          <OurDevApproach/>
      </main>
  );
}
