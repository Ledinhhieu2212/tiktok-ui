//

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';

import { HeaderOnly } from '~/components/Layout';
import Search from '~/Pages/Search';

// No account
const publicRoutes = [
    {path: "/", compinent: Home},
    {path: "/following", compinent: Following},
    {path: "/profile", compinent: Profile},
    {path: "/upload", compinent: Upload, layout: HeaderOnly},
    {path: "/search", compinent: Search, layout: null},
];

// must account
const privateRoutes = [];

export { publicRoutes, privateRoutes };
