import { FirstLevelMenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/top-page.interface';
import { Book, Box, Cloud, Hat } from './menuIcons';

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {id: TopLevelCategory.Courses, title: 'Курсы', icon: <Hat />, route: 'courses'},
    {id: TopLevelCategory.Services, title: 'Сервисы', icon: <Cloud />, route: 'services'},
    {id: TopLevelCategory.Books, title: 'Книги', icon: <Book />, route: 'books'},
    {id: TopLevelCategory.Products, title: 'Товары', icon: <Box />, route: 'products'},
];
