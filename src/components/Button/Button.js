import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import Menu from '../Menu';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    onClick,
    circle = false,
    border = false,
    primary = false,
    select = false,
    more = false,
    Icon,
    LeftIcons,
    RightIcons,
    href,
    to,
    text,
    sizes,
    children,
    className,
    titleSub = false,
    ...passProps
}) {
    const classnames = cx('wrapper', {
        [className]: className,
        primary,
        circle,
        border,
        text,
        select,
        more,
        sizes
    });

    const Comp = to ? Link : href ? 'a' : 'div';
    const props = { onClick, ...passProps, to, href };

    return titleSub ? (
        <Tippy duration={[100, 0]} content={titleSub}>
            <Comp className={classnames} {...props} onClick={onClick} >
                {LeftIcons && <span className={cx('left-icon')}><LeftIcons /></span>}
                {Icon && <Icon className={cx('main-icon')} />}
                <span>{children}</span>
                {RightIcons && <span className={cx('right-icon')}><RightIcons /></span>}
            </Comp>
        </Tippy>
    ) : (
        <Tippy offset={[-160, 20]} render={(attrs) => (
            <div className={cx('menu')} {...attrs} tabIndex="-1">
                <Menu visible />
            </div>
        )}>
            <Comp className={classnames} {...props} onClick={onClick}>
                {LeftIcons && <span className={cx('left-icon')}><LeftIcons /></span>}
                {Icon && <Icon className={cx('main-icon')} />}
                <span>{children}</span>
                {RightIcons && <span className={cx('right-icon')}><RightIcons /></span>}
            </Comp>
        </Tippy>
    );

}

export default Button;
