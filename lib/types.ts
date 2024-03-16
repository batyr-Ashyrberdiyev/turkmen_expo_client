import { StaticImageData } from 'next/image';

export type EventCardProps = {
  dark?: boolean;
  img: StaticImageData;
  title: string;
  text: string;
  suptitle: string;
  footerText: string;
  organizer: string;
  date: string;
  calendar: string;
};

export type NewsCardProps = {
  img: StaticImageData;
  date: string;
  text: string;
};

export type RoadCardProps = {
  icon: any;
  text: string;
};
