import { CoverImg } from './cover-img.model';

export interface Book {
  title: string;
  author: string;
  coverImg?: CoverImg;
  id: number;
}
