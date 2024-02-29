import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import MenuItem from './MenuItem';


const defaultFn = () => { }
const cx = classNames.bind(styles);
function Menu({ items = [], children, onChange = defaultFn }) {
    const [isVisible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!isVisible);
    };

    const renderResult = items.map((item, index) => {
        return <MenuItem key={index} data={item} onChange={onChange} />;
    })
    return (
        <Tippy
            interactive
            visible={isVisible}
            appendTo={document.body}
            placement="bottom-end"
            onClickOutside={() => setVisible(!isVisible)}
            render={(attrs) => {
                return (
                    <div className={cx('wrapper')} {...attrs} tabIndex="-1">
                        <ul className={cx('menu_items')}>{renderResult}</ul>
                    </div>
                );
            }}
        >
            <span onClick={handleClick}>{children}</span>
        </Tippy>
    );
}

export default Menu;