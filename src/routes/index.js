import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const routes = [
    {
        path: '/',
        Page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        Page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        Page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '*',
        Page: NotFoundPage
    }
]