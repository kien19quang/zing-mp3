import classNames from "classnames/bind";
import styles from './Media.module.scss'
import Button from "../Button";
import { Heart, More } from "../Icons";

const cx = classNames.bind(styles)
function MediaRight({ fullAction = false, percent }) {
    return (
        percent ? <div className={cx('media-right')}>
            <span className={cx('percent-item')}>
                {percent}
            </span>
        </div>
            : <div className={cx('media-right')}>
                {fullAction &&
                    <Button className={cx('more-btn')}
                        Icon={Heart}
                        titleSub={'Thêm vào thư viện'}
                    />
                }
                <Button className={cx('more-btn')}
                    Icon={More}
                    titleSub={'Khác'}
                />
            </div>
    );
}

export default MediaRight;

