import config from '~/config';
import { Home, NoteApp, Pagination, SearchGit } from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.pagination, component: Pagination },
    { path: config.routes.noteApp, component: NoteApp },
    { path: config.routes.searchGit, component: SearchGit },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
