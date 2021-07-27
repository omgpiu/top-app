import { TopLevelCategory } from './top-page.interface';

interface ISecondCategory {
  secondCategory: string;
}

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface IMenuItem {
  _id: ISecondCategory;
  pages: IPageItem[];
  isOpen?:boolean
}

export interface FirstLevelMenuItem {
  route:string
  title: string
  icon: JSX.Element
  id: TopLevelCategory
}
