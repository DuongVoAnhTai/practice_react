import config from '~/config';
import { Home, Pagination } from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.pagination, component: Pagination },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
