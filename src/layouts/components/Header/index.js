import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faDownload } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import Img from '~/components/Img';
import { images } from '~/assets/images';
import Menu from '~/components/Menu';
import { Ads, Block, Brush, Call, GoLink, GoRight, Info, LogOut, Play, Privacy, Report, Rules, Upload, setting } from '~/components/Icons';
import Button from '~/components/Button';
const cx = classNames.bind(styles)

function Header() {
    const menuSetting = [
        {
            title: 'Trình phát nhạc',
            iconLeft: Play,
            iconRight: GoRight
        },
        {
            title: 'Giao diện',
            iconLeft: Brush,
            iconRight: GoRight,
            data: {
                title: 'Chủ đề',
                iconRight: GoRight
            }
        },
        {
            title: 'Giới thiệu',
            iconLeft: Info,
            spederate: true,
            textblur: true
        },
        {
            title: 'Thỏa thuận sử dụng',
            iconLeft: Rules,
            iconRight: GoLink,
            textblur: true
        },
        {
            title: 'Chính sách bảo mật',
            iconLeft: Privacy,
            iconRight: GoLink,
            textblur: true,
        },
        {
            title: 'Báo cáo vi phạm bản quyền',
            iconLeft: Report,
            iconRight: GoLink,
            textblur: true,
        },
        {
            title: 'Quảng cáo',
            iconLeft: Ads,
            iconRight: GoLink,
            textblur: true,
        },
        {
            title: 'Liên hệ',
            iconLeft: Call,
            iconRight: GoLink,
            textblur: true,
            href: "https://www.facebook.com/"
        },

    ]

    const menuUser = [
        {
            title: 'Danh sách chặn',
            iconLeft: Block
        },
        {
            title: 'Tải lên',
            iconLeft: Upload
        },
        {
            title: 'Đăng xuất',
            iconLeft: LogOut,
            to: './logout',
            spederate: true,
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('header-left')}>
                <button className={cx('header-btn', 'disabled')}>
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>
                <button className={cx('header-btn', 'disabled')}>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
                <Search className={cx('search-container')} />
            </div>
            <div className={cx('header-right')}>
                <div className={cx('download-desktop-app')}>
                    <a href='./' className={cx('download-btn')}>
                        <FontAwesomeIcon className={cx('icon-download')} icon={faDownload} />
                        <span>Tải bản Windows</span>
                    </a>
                </div>
                <Menu className={cx('setting-item')}
                    items={menuSetting}
                >
                    <div className={cx('setting-item')}>
                        <Button circle Icon={setting} titleSub={'Cài đặt'} />
                    </div>
                </Menu>
                <Menu items={menuUser}>
                    <Img
                        className={cx('user-avatar')}
                        src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/288357121_1136120336934592_3112665981295926794_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YKbvpNd3IgkAX8brO6R&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDIEL0-GZGi2oFG5Wkil1bo4xkOyxZD3K9iWcjrXytiVg&oe=6546BE08"
                        alt="Manh"
                        fallBack={images.noUser}
                    />
                </Menu>
            </div>
        </div>
    </header>
}
export default Header;