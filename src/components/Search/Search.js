import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import ListSuggest from '../ListSuggest';

const cx = classNames.bind(styles)


const handleOpen = (event) => {
    if (event) {
        const searchInput = event.target;
        searchInput.parentNode.classList.add("is-open")
        console.log(searchInput.parentNode)
    }
}
function Search() {
    return (
        <div>
            <HeadlessTippy
                trigger="click"
                delay={[0, 1000000]}
                offset={[0, 0]}
                placement="bottom-start"
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ListSuggest />
                    </div>
                )}

            >

                <div className={cx('search-container', "is-open")}>
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    <input
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        spellCheck={false}
                        onClick={(event) => { handleOpen(event) }}
                    />
                    <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} />
                </div>
            </HeadlessTippy >
        </div>
    );
}

export default Search;