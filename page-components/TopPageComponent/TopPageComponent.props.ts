import { IMenuItem } from '../../interfaces/menu.interface';
import { ITopPageModel, TopLevelCategory } from '../../interfaces/top-page.interface';
import { IProductModal } from '../../interfaces/product.interface';

export interface ITopPageComponent  {
    firstCategory: TopLevelCategory
    page: ITopPageModel
    products: IProductModal[]
}
