import classNames from "classnames/bind";
import styles from './Footer.module.scss';
import { logoBrand } from "~/assets/images";
import Img from "~/components/Img";

const cx = classNames.bind(styles);
function Footer() {
    const renderBrand = () => {
        const logo = logoBrand.map((logo, index) => {
            return (
                <figure className={cx('item')} key={index}>
                    <Img src={logo} className={cx('img')} />
                </figure>
            );
        });
        return logo;
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>
                ĐỐI TÁC ÂM NHẠC
            </h3>
            <div className={cx('container')}>
                {renderBrand()}
            </div>
        </div>
    );;
}

export default Footer;