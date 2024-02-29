import { NoSidebarLayout, DefaultLayout } from '~/layouts';
import Upload from '~/pages/Upload';

import config from '~/config';
import {
    Chart, Home, BXH, Profile, Radio, Library,
    HistoryMusic, FavotiteMusic, UploadMusic, PlaylistMusic, AlbumMusic, Top100, MusicGenre
} from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.chart, component: Chart },
    { path: config.routes.bxh, component: BXH },
    { path: config.routes.upload, component: Upload },
    { path: config.routes.livestream, component: Radio },
    { path: config.routes.library, component: Library },
    { path: config.routes.historyMusic, component: HistoryMusic },
    { path: config.routes.favoriteMusic, component: FavotiteMusic },
    { path: config.routes.top100, component: Top100 },
    { path: config.routes.musicGenre, component: MusicGenre },
    { path: config.routes.uploadMusic, component: UploadMusic },
    { path: config.routes.playlistMusic, component: PlaylistMusic },
    { path: config.routes.albumMusic, component: AlbumMusic },
    { path: config.routes.profile, component: Profile, layout: NoSidebarLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }