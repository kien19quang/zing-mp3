import classNames from "classnames/bind";
import styles from './Controls.module.scss'
import MediaLeft from "../Media/MediaLeft";
import MediaRight from "../Media/MediaRight";


const cx = classNames.bind(styles)
function ControlsLeft() {
    return (
        <div className={cx('wrapper-left')}>
            <MediaLeft controlsSection contentCenter />
            <MediaRight fullAction />
        </div>
    )
}

export default ControlsLeft;