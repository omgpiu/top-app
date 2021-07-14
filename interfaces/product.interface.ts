export interface IProductCharacteristic {
  value: string;
  name: string;
}

export interface IReviewModel {
  _id: string
  name: string
  title: string
  description: string
  rating: number
  createdAt: Date

}

export interface IProductModal {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  description: string;
  link: string;
  image: string;
  characteristics: IProductCharacteristic[];
  initialRating: number;
  credit: number;
  price: number;
  oldPrice: number;
  advantages: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  html: string;
  reviews: IReviewModel[];
  reviewCount: number;
  reviewAvg?: number;
}
