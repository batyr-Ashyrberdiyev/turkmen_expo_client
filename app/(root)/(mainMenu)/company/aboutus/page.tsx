import React from "react";
import Image from "next/image";

import aboutImg from "@/public/assets/images/about.png";

const About = () => {
  return (
    <div className="flex flex-col items-start gap-y-[24px] mb-[100px] w-full">
      <p className="text-[12px] text-gray4">
        Главная / О компании / Коротко о нас
      </p>
      <h2 className="text-extra font-semibold">Коротко о нас</h2>

      <Image src={aboutImg} width={1000} height={500} alt="about image" />
      <div className="flex flex-col items-start gap-y-[24px] text-p">
        <p>
          Turkmen Expo - новое направление компании TPS в Туркменистане, успешно
          работающей более двадцати лет и являющейся лидером на туркменском
          рынке в сфере рекламы, маркетинга и полиграфии. Компания предоставляет
          услуги по организации выставок, дизайну, монтажу и обслуживанию
          рекламных продуктов, выставочных стендов, сувениров, типографской
          печати, а также производству и трансляции телевизионных рекламных
          роликов.
        </p>
        <p>
          Будучи материнской компанией Turkmen Expo, TPS является ведущей
          компанией в Туркменистане на всех выставках с 1999 года. Мы также
          специализируемся на маркетинговых исследованиях, управлении
          мероприятиями, запуске новых продуктов и акциях по продвижению, и мы
          хорошо известны своим выдающимся качеством обслуживания и вкусом.
        </p>
        <p>
          Компания «Туркменэкспо» вместе с головными компаниями является
          крупнейшим организатором выставок и инвестиционных роуд-шоу не только
          в Туркменистане, но и за его пределами. Мы успешно организовываем
          международные выставки, конгрессы, форумы и конференции по всей
          стране. Кроме того, наша компания активно участвует в организации
          участия отечественных компаний на международных выставках, проводимых
          за рубежом.
        </p>
      </div>
    </div>
  );
};

export default About;
