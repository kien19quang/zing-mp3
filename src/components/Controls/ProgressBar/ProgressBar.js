import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProgressBar.module.scss'
import { useSelector } from 'react-redux';
import { times } from '~/components/Redux/selector';

const cx = classNames.bind(styles)
function ProgressBar({ max, min, step, classes, audioRef }) {
    const clickTime = useSelector(times);
    const ref = useRef();
    const [currentTime, setCurrentTime] = useState(0);
    const handleInputChange = (event) => {
        setCurrentTime(event.target.value);
        audioRef.current.currentTime =
            (ref.current.value / 100) * audioRef.current.duration;
    };

    useEffect(() => {
        if (audioRef) {
            setCurrentTime(
                clickTime.currentTime
                    ? (clickTime.currentTime / clickTime.duration) * 100
                    : 0,
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clickTime.currentTime]);

    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={currentTime}
            onInput={(e) => handleInputChange(e)}
            className={cx('progress_input', classes)}
            ref={ref}
        />

    );
}

export default ProgressBar;