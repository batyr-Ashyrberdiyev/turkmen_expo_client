import car from '@/public/assets/icons/service/car.svg';
import bus from '@/public/assets/icons/service/bus.svg';
import track from '@/public/assets/icons/service/track.svg';

import { RoadCardProps } from '../types';

export const roadCardData: RoadCardProps[] = [
  {
    icon: car,
    text: 'На машине',
  },
  {
    icon: bus,
    text: 'На автобусе',
  },
  {
    icon: track,
    text: 'Проезд грузового транспорта',
  },
];

import call from '@/public/assets/icons/service/call.svg';
import megaphone from '@/public/assets/icons/service/megaphone.svg';
import bag from '@/public/assets/icons/service/bag.svg';

export const contactCardData: RoadCardProps[] = [
  {
    icon: call,
    text: 'Справочный центр',
  },
  {
    icon: bag,
    text: 'Услуги',
  },
  {
    icon: megaphone,
    text: 'Реклама',
  },
];

import partner from '@/public/assets/icons/home/partner.svg';
import { StaticImageData } from 'next/image';

export const partnersData: StaticImageData[] = [partner, partner, partner, partner, partner];
