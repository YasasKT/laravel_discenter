// data/categories.ts
import { Category } from '../types/category';
import TVImage from '@/img/tv.png';
import refreImage from '@/img/fridge.png';
import HAppImage from '@/img/vacuum.png';
import WashineImage from '@/img/washing_machine.png';
import KAppImage from '@/img/airfyer-bgless.png';
import AuVideoImage from '@/img/headphones.png';

export const categories: Category[] = [
  { name: 'TV', image: TVImage, count: 120 },
  { name: 'Refrigerators', image: refreImage, count: 80 },
  { name: 'Home Appliances', image: HAppImage, count: 150 },
  { name: 'Washing Machines', image: WashineImage, count: 60 },
  { name: 'Kitchen Appliances', image: KAppImage, count: 90 },
  { name: 'Audio & Video', image: AuVideoImage, count: 110 },
];
