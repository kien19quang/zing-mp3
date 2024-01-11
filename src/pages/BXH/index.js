import classNames from "classnames/bind";
import styles from './BXH.module.scss'
import Button from "~/components/Button";
import { circlePlay } from "~/components/Icons";
import Media from "~/components/Media";
import ListMedia from "~/components/Media/ListMedia";

const cx = classNames.bind(styles)
function BXH() {
    return (
        <div className={cx('container')}>
            <div className={cx('section')}>
                <h3
                    className={cx('title')}> BXH Nhạc Mới</h3>
                <Button className={cx('play')}
                    big circle Icon={circlePlay}
                />
            </div>

            <Media mediaRank />
            <ListMedia mediaRank />
        </div>
    );
}

export default BXH;