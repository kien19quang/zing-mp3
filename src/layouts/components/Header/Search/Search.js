import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css'
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Search.module.scss'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import ListSuggest from '~/components/ListSuggest';
import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '~/hooks';
import { searchSong } from '~/services/getSongApi';

const cx = classNames.bind(styles)
function Search() {
    const [isClicked, setIsClicked] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const debounced = useDebounce(searchValue, 500)
    const inputRef = useRef()

    useEffect(() => {
        if (!debounced) {
            setSearchResult([])
            return;
        }
        const fetchApi = async () => {
            const result = await searchSong(debounced)
            setSearchResult(result)
        }

        fetchApi()
    }, [debounced]);

    return (
        <>
            <HeadlessTippy
                trigger="click"
                interactive
                // visible={isClicked}
                offset={[0, 0]}
                placement="bottom-start"
                onClickOutside={() => setIsClicked(false)}
                render={attrs => (
                    <div className={cx('search-result')}
                        tabIndex="-1" {...attrs}
                    >
                        <ListSuggest
                            data={searchResult}
                            searchValue={searchValue}
                        />
                    </div>
                )}
            >
                <div className={cx('search-container', isClicked && 'is-open')}
                >
                    <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value.trimStart())}
                        onFocus={() => setIsClicked(true)}
                    />
                    <FontAwesomeIcon className={cx('close-icon')} icon={faXmark} />
                </div>
            </HeadlessTippy >
        </>
    );
}

export default Search;