import { NoSidebarLayout, FullLayout } from '~/layouts';

import Upload from '~/pages/Upload';
import { Home, Profile } from '~/pages'

const publicRoutes = [
    { path: '/', component: Home, layout: FullLayout },
    { path: '/profile', component: Profile, layout: NoSidebarLayout },
    { path: '/upload', component: Upload }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }