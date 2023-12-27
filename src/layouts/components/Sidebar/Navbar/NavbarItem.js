import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './Navbar.module.scss'
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { images } from "~/assets/images";

const cx = classNames.bind(styles);
function NavbarItem({ title, to, icon, figure = false, playicon = false, className, isClose = false }) {
    return (
        <NavLink className={(nav) => cx(className, { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{icon}</span>
            {!isClose && <div className={cx('no-expanded')}>
                <div>
                    <span className={cx('title')}>{title}</span>
                    {figure &&
                        <img src={images.tag} alt={'tag'} className={cx('tag')} />
                    }
                </div>
                {playicon &&
                    <FontAwesomeIcon icon={faCirclePlay} className={cx('icon-play')} />
                }
            </div>}
        </NavLink>
    );
}

export default NavbarItem;
