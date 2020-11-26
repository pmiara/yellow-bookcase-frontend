import { CoverImg } from './cover-img.model';

export interface Book {
  title: string;
  author: string;
  description: string;
  coverImg: CoverImg;
}
