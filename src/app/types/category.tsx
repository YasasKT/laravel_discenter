import { StaticImageData } from 'next/image';

export interface Category {
  name: string;
  image: StaticImageData;
  count: number;
}
