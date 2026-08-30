
import CallToAction from "./components/CallToAction";
import ExperienceSection from "./components/experience";
import ExpertiseBanner from "./components/ExpertiseBanner";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import WhyOntopProperties from "./components/WhyOntopProperties";

export default function Home() {
  return (
    <div className="w-[100vw] ">
      <div>
        <Hero/>
        <ExperienceSection/>
        <FeaturedProjects/>
        <WhyOntopProperties/>
        <ExpertiseBanner/>
        <CallToAction/>
        
      </div>
    </div>
  );
}
