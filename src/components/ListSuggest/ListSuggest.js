import classNames from "classnames/bind";
import styles from './ListSuggest.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
const list = [
    {
        title: 'từng quen',
    },
    {
        title: "cắt đôi nỗi sầu",
    },
    {
        title: "cô đơn đã quá bình thường",
    },
]
function ListSuggest({ result }) {
    return (
        <div className={cx('suggest-list')}>
            <h4 className={cx('suggest-title')}>
                Đề xuất cho bạn
            </h4>
            {
                list.map((result, index) => {
                    // console.log(result)
                    return (<div className={cx('suggest-item')} key={index}>
                        <FontAwesomeIcon icon={faArrowTrendUp} className={cx('icon-up')} />
                        <h4 className={cx('item-title')}>{result.title}</h4>
                    </div>)
                })
            }
        </div>

    );
}

export default ListSuggest;