import classNames from "classnames/bind";
import styles from './Actions.module.scss'
import { Heart, More, Play, circlePlay } from '~/components/Icons';
import Button from "~/components/Button";

const cx = classNames.bind(styles)
function Actions({ fullAction = false, playCircle = false, playLarge = false, radioAction = false }) {
    return (
        <div className={cx('actions-container')}>
            <div className={cx(radioAction ? 'radioAction' : 'actions')}>
                <Button className={cx(fullAction ? '' : 'is-hidden')}
                    Icon={Heart}
                    titleSub={'Thêm vào thư viện'}
                />
                <Button className={cx('action-play', playLarge ? 'action-large' : '')}
                    Icon={playCircle ? circlePlay : Play}
                />
                <Button className={cx(fullAction ? '' : 'is-hidden')}
                    Icon={More}
                    titleSub={'Khác'}
                />
            </div>
        </div>);
}

export default Actions;