import Button from '../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function MenuItem({ data, onChange }) {
    const classes = cx('item', {
        spederate: data.spederate,
        textblur: data.textblur,
    });

    return (
        <Button
            className={classes}
            LeftIcons={data.iconLeft}
            RightIcons={data.iconRight}
            to={data.to}
            href={data.href}
            onChange={() => onChange(data)}
        >
            <span className={cx('item-title')} >{data.title}</span>
        </Button>
    );
}

export default MenuItem;