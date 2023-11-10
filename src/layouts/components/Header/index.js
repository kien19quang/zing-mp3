import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faDownload, faGear } from '@fortawesome/free-solid-svg-icons';
import Search from '~/components/Search';
import Img from '~/components/Img';
const cx = classNames.bind(styles)

function Header() {
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
                <div className={cx('setting-item')}>
                    <FontAwesomeIcon icon={faGear} />
                </div>
                <div>
                    <Img
                        className={cx('user-avatar')}
                        src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/288357121_1136120336934592_3112665981295926794_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YKbvpNd3IgkAX8brO6R&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan3-2.fna&oh=00_AfDIEL0-GZGi2oFG5Wkil1bo4xkOyxZD3K9iWcjrXytiVg&oe=6546BE08"
                        alt="Manh"
                    />
                </div>
            </div>
        </div>
    </header>
}
export default Header;