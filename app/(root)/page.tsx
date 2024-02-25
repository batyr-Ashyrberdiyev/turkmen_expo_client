import Image from "next/image";

import heroImg from "@/public/assets/images/hero.png";
import videoImg from "@/public/assets/images/video.png";

import { Events } from "@/components/sections/Events";
import { News } from "@/components/sections/News";
import { Services } from "@/components/sections/Services";
import { Partners } from "@/components/sections/Partners";
import Swiper from "swiper";

const Home = () => {
  return (
    <div className="bg-blueBg">
      <Image src={heroImg} alt="hero" className="w-full h-full mb-[160px]" />
      <section className="section-mb w-full">
        <Events />
      </section>
      <section className="mb-[221px]">
        <News />
      </section>
      <section className="section-mb">
        <Image src={videoImg} alt="video" className="w-full mx-auto" />
      </section>
      <section className="section-mb">
        <Services />
      </section>
      <section className="pb-[160px]">
        <Partners />
      </section>
    </div>
  );
};

export default Home;
