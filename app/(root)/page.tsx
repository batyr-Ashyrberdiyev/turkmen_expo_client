import Image from "next/image";

import videoImg from "@/public/assets/images/video.png";

import { Events } from "@/components/home/Events";
import { News } from "@/components/home/News";
import { Services } from "@/components/home/Services";
import { Partners } from "@/components/home/Partners";
import Slider from "@/components/home/Slider";

const Home = () => {
  return (
    <div className="bg-blueBg">
      <section className="h-full mx-auto mb-[60px] min-[380px]:mb-[160px]">
        <Slider />
      </section>

      <section className="md:mb-[60px] section-mb w-full">
        <Events />
      </section>

      <section className="min-[380px]:mb-[221px] mb-[60px]">
        <News />
      </section>

      <section className="section-mb">
        <Image
          src={videoImg}
          alt="video"
          width={1920}
          height={800}
          className="mx-auto"
        />
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
