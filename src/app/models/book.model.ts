import { CoverImg } from './cover-img.model';

export interface Book {
  title: string;
  author: string;
  id: number;
  description?: string;
  coverImg?: CoverImg;
  addedBy?: string;
  lubimyCzytacUrl?: string;
}
