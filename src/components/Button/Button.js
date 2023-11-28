import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import Tippy from '@tippyjs/react';
import Menu from '../Menu';

const cx = classNames.bind(styles);

function Button({
    onClick,
    onHandle,
    circle = false,
    primary = false,
    select = false,
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
        text,
        select,
        sizes
    });

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }


    return (
        titleSub ? (
            <Tippy duration={[100, 0]} content={titleSub} >
                <Comp className={classnames} {...props} onClick={onClick}>
                    {LeftIcons && <span className={cx('left-icon')}><LeftIcons /></span>}
                    {Icon && <Icon className={cx('main-icon')} />}
                    <span>{children}</span>
                    {RightIcons && <span className={cx('right-icon')}><RightIcons /></span>}
                </Comp>
            </Tippy>
        ) : (
            <Tippy
                offset={[-160, 20]}
                render={(attrs) => {
                    return (
                        <div className={cx('menu')} {...attrs} tabIndex="-1">
                            <Menu visible />
                        </div>
                    );
                }}
            >
                <Comp
                    className={classnames}
                    {...props}
                    onClick={onHandle}
                >
                    {LeftIcons && <span className={cx('left-icon')}><LeftIcons /></span>}
                    {Icon && <Icon className={cx('main-icon')} />}
                    <span>{children}</span>
                    {RightIcons && <span className={cx('right-icon')}><RightIcons /></span>}
                </Comp>
            </Tippy >)
    )
}

export default Button;