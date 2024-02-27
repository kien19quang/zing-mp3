import classNames from "classnames/bind";
import styles from './Controls.module.scss'
import MediaLeft from "../Media/MediaLeft";
import MediaRight from "../Media/MediaRight";
import { useSelector } from "react-redux";


const cx = classNames.bind(styles)
function ControlsLeft() {
    const songInfo = useSelector(state => state.SongInfo);

    return (
        <div className={cx('wrapper-left')}>
            <MediaLeft controlsSection contentCenter media={songInfo} />
            <MediaRight fullAction />
        </div>
    );
}

export default ControlsLeft;