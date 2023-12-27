import classNames from "classnames/bind";
import styles from './Gallery.module.scss'
import Button from "../Button";
import { GoLeft, GoRight } from "../Icons";

const cx = classNames.bind(styles);
const defaultfn = () => { }
function Arrow({ left = false, onClick = defaultfn }) {
    return (
        <Button
            onClick={onClick}
            className={cx('arrow', left ? 'arrow-left' : 'arrow-right')}
            Icon={left ? GoLeft : GoRight}
        />
    );
}
export default Arrow;