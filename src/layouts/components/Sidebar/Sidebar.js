import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import Navbar, { NavbarItem } from './Navbar';
import config from '~/config';
import { AlbumMusic, BXH, Discovery, FavoriteMusic, HistoryMusic, Libary, MusicGenre, PlaylistMusic, Radio, Top100, UploadMusic, ZingChart } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { images } from '~/assets/images';

const cx = classNames.bind(styles)

function Sidebar() {
    const [isClose, setClose] = useState(false)
    const toggleClass = () => {
        setClose(!isClose);
    };
    return (<aside className={cx('wrapper', isClose ? 'is-closed' : '')}>
        <nav className={cx('navbar')}>
            <div className={cx('navbar-brand')}>
                <a className={cx('navbar-logo')} href='/'>
                    {!isClose ?
                        <img src={images.logo} alt='logo' />
                        : <img src={images.iconLogo} alt='icon-logo' className={cx('icon-logo')} />
                    }
                </a>
            </div>
        </nav>
        <nav className={cx('navbar', 'navbar-main')}>
            <Navbar className={cx('navbar-menu')}>
                <NavbarItem className={cx('navbar-item')}
                    isClose={isClose}
                    title='Khám Phá'
                    to={config.routes.home}
                    icon={<Discovery />}
                />
                <NavbarItem className={cx('navbar-item')}
                    isClose={isClose}
                    title='#zingchart'
                    to={config.routes.chart}
                    icon={<ZingChart />}
                    playicon={true}
                />
                <NavbarItem className={cx('navbar-item')}
                    isClose={isClose}
                    title='Radio'
                    to={config.routes.livestream}
                    icon={<Radio />}
                    figure={true}
                    playicon={true}
                />
                <NavbarItem className={cx('navbar-item')}
                    isClose={isClose}
                    title='Thư Viện'
                    to={config.routes.library}
                    icon={<Libary />}
                    playicon={true}
                />
            </Navbar>
        </nav>

        <div className={cx('sidebar-divide')} />
        <div className={cx('sidebar-wrapper')}>
            <div className={cx('sidebar-scrollbar')}>
                <nav className={cx('navbar', 'navbar-main')}>
                    <Navbar className={cx('navbar-menu')}>
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='BXH Nhạc Mới'
                            to={config.routes.bxh}
                            icon={<BXH />}
                            playicon={true}
                        />
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Chủ Đề & Thể Loại'
                            to={config.routes.musicGenre}
                            icon={<MusicGenre />}
                        />
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Top 100'
                            to={config.routes.top100}
                            icon={<Top100 />}
                        />
                    </Navbar>
                </nav>
                <nav className={cx('navbar', 'navbar-my-music')}>
                    <Navbar className={cx('navbar-menu')}>
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Nghe gần đây'
                            to={config.routes.historyMusic}
                            icon={<HistoryMusic />}
                        />
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Bài hát yêu thích'
                            to={config.routes.favoriteMusic}
                            icon={<FavoriteMusic />}
                            playicon={true}
                        />
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Playlist'
                            to={config.routes.playlistMusic}
                            icon={<PlaylistMusic />}
                        />
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Album'
                            to={config.routes.albumMusic}
                            icon={<AlbumMusic />}
                        />
                        <NavbarItem className={cx('navbar-item')}
                            isClose={isClose}
                            title='Đã tải lên'
                            to={config.routes.uploadMusic}
                            icon={<UploadMusic />}
                        />
                    </Navbar>
                </nav>
                <div className={cx('add-playlist-sidebar')}>
                    {!isClose && <div className={cx('no-expanded')}>
                        <FontAwesomeIcon icon={faPlus} className={cx('icon-plus')} />
                        <span>Tạo playlist mới</span>
                    </div>}
                    <div onClick={toggleClass}>
                        {!isClose && <FontAwesomeIcon
                            icon={faChevronCircleLeft}
                            className={cx('icon-expanded', 'icon-go-left')}
                        />}
                        {isClose && <FontAwesomeIcon
                            icon={faChevronCircleRight}
                            className={cx('icon-expanded', 'icon-go-right')}
                        />
                        }
                    </div>
                </div>
            </div>
        </div>

    </aside>)
}
export default Sidebar;