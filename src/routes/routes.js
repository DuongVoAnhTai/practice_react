import config from '~/config';
import { Home, NoteApp, Pagination } from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.pagination, component: Pagination },
    { path: config.routes.noteApp, component: NoteApp },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
