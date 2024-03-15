import Image from 'next/image';

import heroImg from '@/public/assets/images/hero.png';
import videoImg from '@/public/assets/images/video.png';

import { Events } from '@/components/sections/Events';
import { News } from '@/components/sections/News';
import { Services } from '@/components/sections/Services';
import { Partners } from '@/components/sections/Partners';
import Slider from '@/components/sections/home/Slider';

const Home = () => {
  return (
    <div className="bg-blueBg">
      <section className="h-full mx-auto mb-[160px]">
        <Slider />
      </section>
      <section className="section-mb w-full">
        <Events />
      </section>
      <section className="mb-[221px]">
        <News />
      </section>
      <section className="section-mb">
        <Image src={videoImg} alt="video" width={1920} height={800} className="mx-auto" />
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
