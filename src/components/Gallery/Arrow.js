import classNames from "classnames/bind";
import styles from './Gallery.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
const defaultfn = () => { }
function Arrow({ left = false, onClick = defaultfn }) {
    return (
        <FontAwesomeIcon
            onClick={onClick}
            className={cx('arrow', left ? 'arrow-left' : 'arrow-right')}
            icon={left ? faChevronLeft : faChevronRight}
        />
    );
}
export default Arrow;