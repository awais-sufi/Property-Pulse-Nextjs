import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import FeaturedProperty from "@/components/FeaturedProperty";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperty />
      <HomeProperties />
    </>
  );
}
