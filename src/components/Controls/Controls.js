import classNames from "classnames/bind";
import styles from './Controls.module.scss'
import ControlsLeft from "./ControlsLeft";
import ControlsRight from "./ControlsRight";
import ControlsCenter from "./ControlsCenter";

const cx = classNames.bind(styles)
function Controls({ audioRef }) {
    return (
        <div className={cx('wrapper')}>
            <ControlsLeft />
            <ControlsCenter audioRef={audioRef} />
            <ControlsRight />
        </div>
    );
}

export default Controls;