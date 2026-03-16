import ContentSection from "./components/ContentSection";
import ParallaxLayer from "./ParallaxLayer";
import mountains from "../assets/steep-mountains.png";

const ParallaxSection = () => {
  return (
    <section className="relative h-[200vh] overflow-hidden">
      <ParallaxLayer speed={0.1}>
        <div className="h-screen bg-sky-400" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.3}>
        <img src={mountains} alt="mountains" className="w-full object-cover" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.6}>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-white text-6xl font-bold">Parallax Experience</h1>
        </div>
      </ParallaxLayer>
    </section>
  );
};

export default ParallaxSection;
