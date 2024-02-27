import classNames from "classnames/bind";
import styles from './ListSuggest.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Media from "../Media/Media";
import MediaLeft from "../Media/MediaLeft";
import MediaRight from "../Media/MediaRight";

const cx = classNames.bind(styles);

function ListItem({ title, songs, searchValue }) {
    return (
        <div>
            <h4 className={cx('suggest-title')}>
                {title}
            </h4>
            {songs?.slice(0, 4).map((song, index) => (
                <div className={cx('suggest-item')} key={index}>
                    <FontAwesomeIcon icon={faSearch} className={cx('icon-up')} />
                    <h4 className={cx('item-title')}>{song.title}</h4>
                </div>
            ))}
            <div className={cx('suggest-item')}>
                <FontAwesomeIcon icon={faSearch} className={cx('icon-up')} />
                <h4 className={cx('item-title')}>Tìm kiếm "{searchValue}"</h4>
            </div>
        </div>
    );
}

function ListSuggest({ data, searchValue }) {
    return (
        <div className={cx('suggest-list')}>
            <ListItem title="Đề xuất cho bạn" songs={data.songs} searchValue={searchValue} />
            {searchValue && <div>
                <h4 className={cx('suggest-title')}>
                    Gợi ý kết quả
                </h4>
                {data.songs?.slice(0, 4).map((song, index) => (
                    <div className={cx('suggest-item')} key={index}>
                        {/* {console.log(song)} */}
                        <MediaLeft media={song} controlsSection contentCenter />
                        <MediaRight fullAction />
                    </div>
                ))}
            </div>}
        </div>
    );
}

export default ListSuggest;
