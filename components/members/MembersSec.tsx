import React from 'react';
import Image from 'next/image';

import membersImg from '@/public/assets/images/members.png';
import { PageLayout } from '../page/PageLayout';

export const MembersSec = () => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <PageLayout title="Информация для участников" pathname="Главная / Информация для участников">
        <p className="text-p">
          В распоряжении компании имеются возможности размещения и застройки полностью оборудованных
          павильонов общей площадью 1200 кв.м. которые соответствуют современным стандартам. В
          помещении имеются все необходимые коммуникации для реализации проектов любого характера.
          Конгрессы, конференции и другие мероприятия проводятся в специально подготовленных залах.
        </p>
        <Image src={membersImg} width={1000} height={500} alt="members" />
        <div className="flex flex-col items-start gap-y-[24px] text-p">
          <p>
            В выставках принимают участие более 1500 компаний, а ежегодно их посещает более 50000
            человек. Торгово-промышленная палата Туркменистана оказывает содействие развитию
            «Туркмен Экспо». Компания является членом многих гильдий и ассоциаций, в том числе
            международных. Площадка «Туркмен Экспо» включает в себя офисные помещения,
            конференц-залы, концертные площадки и крупнейшие павильоны. Общая выставочная площадь
            этого комплекса составляет 8330 квадратных метров. м, из них 2300 кв. м – закрытые
            помещения. Остальные 6030 кв. м – это открытая выставочная площадь, которую также можно
            использовать как место для организации крупных концертно-развлекательных мероприятий.
          </p>
          <p>
            TurkmenExpo активно внедряет инновационные выставочные и маркетинговые технологии,
            предоставляя обширный спектр профессиональных решений для эффективной организации и
            проведения выставок любого уровня. Мы создаем максимально комфортные условия для
            успешных деловых контактов в мормате B2B
          </p>
          <ol className="list-disc ml-[20px]">
            <li>
              Наши выставочные залы оснащены системой “одного окна”, позволяющей экспонентам
              оперативно заказывать все необходимые услуги в одном месте. Для максимальной
              полезности для наших экспонентов мы организовываем семинары по теме “Эффективное
              участие в выставках”, доступные для всех заинтересованных.
            </li>
            <li>
              Мы также предоставляем участникам и посетителям-специалистам функционал “Назначение
              деловых встреч” (MatchMaking), который обеспечивает эффективный поиск потенциальных
              партнеров и предварительное согласование встреч на выставке.
            </li>
            <li>
              Каждый участник выставок, проводимых в “Экспоцентре”, может получить свидетельство о
              демонстрации своего товарного знака или экспоната.
            </li>
          </ol>
          <p>
            TurkmenExpo, сотрудничая с ТПП Туркменистана, организует участие туркменских компаний в
            крупнейших специализированных выставках, как в Туркменистане, так и за рубежом. Мы
            создаем единые экспозиции и сотрудничаем с региональными ТПП, способствуя расширению
            возможностей для участия регионального бизнеса и продвижению товаров и услуг на
            международном уровне.
          </p>
        </div>
      </PageLayout>
    </div>
  );
};
