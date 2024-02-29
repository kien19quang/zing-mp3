import classNames from "classnames/bind";
import styles from './Controls.module.scss'
import Button from "../Button";
import { MV, karaoke, list, restore, volume } from "../Icons";
import ProgressBar from "./ProgressBar";

const cx = classNames.bind(styles)
function ControlsRight() {
    return (
        <div className={cx('wrapper-right')}>
            <Button Icon={MV}
                titleSub={'MV'}
            />
            <Button Icon={karaoke}
                titleSub={'Xem lời bài hát'}
            />
            <Button Icon={restore}
                titleSub={'Chế độ cửa sổ'}
            />
            <Button Icon={volume} />
            <ProgressBar max={1} min={0} step={0.01} volumeControl />
            <Button Icon={list}
                titleSub={'Danh sách phát'}
            />
        </div>
    );
}

export default ControlsRight;