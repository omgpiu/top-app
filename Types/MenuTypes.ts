type SecondCategoryType = {
    secondCategory: string;
}

export type PageItemType = {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export type MenuItemType = {
    _id: SecondCategoryType;
    pages: PageItemType[];
}
