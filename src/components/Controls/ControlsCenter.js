import { Next, Prev, Repeat, Random, circlePlay, Pause } from '../Icons';
import styles from './Controls.module.scss';
import classNames from 'classnames/bind';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { isPlaying, times } from '../Redux/selector';
import { pauseSong, playSong, setTimes } from '../Redux/action';

const cx = classNames.bind(styles);

function ControlsCenter({ audioRef }) {
    const dispatch = useDispatch();
    const isPlay = useSelector(isPlaying);
    const { currentTime, duration } = useSelector(times) || {};

    const [timePlay, setTimePlay] = useState(0);

    const handleTime = (time) => {
        const minutes = Math.floor(time >= 60 ? time / 60 : 0);
        const timeRemaining = time - minutes * 60;
        const second = Math.floor(timeRemaining < 60 ? timeRemaining : 0);
        return `${minutes < 10 ? '0' + minutes : minutes}:${second < 10 ? '0' + second : second}`;
    };

    useEffect(() => {
        let intervalId;

        if (isPlay) {
            intervalId = setInterval(() => {
                setTimePlay(prevTime => {
                    const newTime = prevTime + 1;
                    return newTime > duration ? 0 : newTime;
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isPlay, duration]);

    useEffect(() => {
        if (isPlay) {
            setTimePlay(currentTime);
        }
    }, [isPlay, currentTime]);

    const btns = [
        {
            Icon: Random,
            circle: true,
            titleSub: 'Bật phát ngẫu nhiên',
            type: 'random'
        },
        {
            Icon: Prev,
            circle: true,
            type: 'prev'
        },
        {
            Icon: isPlay ? Pause : circlePlay,
            border: true,
            type: isPlay ? 'pause' : 'play',
        },
        {
            Icon: Next,
            circle: true,
            type: 'next'
        },
        {
            Icon: Repeat,
            circle: true,
            titleSub: 'Bật phát lại tất cả',
            type: 'repeat'
        }
    ];

    const renderBtn = btns.map((btn, index) => {
        return (
            <Button
                circle={btn?.circle}
                border={btn?.border}
                className={cx('btn-control')}
                key={index}
                Icon={btn.Icon}
                titleSub={btn?.titleSub}
                onClick={() => handle(btn.type)}
            />
        );
    });

    const handle = (type) => {
        switch (type) {
            case 'play':
                dispatch(playSong(true))
                dispatch(setTimes(timePlay, duration))
                break;
            case 'pause':
                dispatch(pauseSong(true))
                dispatch(setTimes(timePlay, duration))
                break;
            default:
                console.log('default')
        }
    };

    return (
        <div className={cx('wrapper-center')}>
            <div className={cx('btn-actions')}>
                {renderBtn}
            </div>
            <div className={cx('time')}>
                <span className={cx('time-start')}>{handleTime(timePlay)}</span>
                <ProgressBar step={1} audioRef={audioRef} max={100} min={0} currentTime={currentTime} />
                <span className={cx('time-end')}>{handleTime(duration)}</span>
            </div>
        </div>
    );
}

export default ControlsCenter;
