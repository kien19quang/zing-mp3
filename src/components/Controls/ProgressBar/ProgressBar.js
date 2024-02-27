import classNames from "classnames/bind";
import styles from './ProgressBar.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Song, isPlaying, times, volume } from '~/components/Redux/selector';
import { setTimes, setVolume } from "~/components/Redux/action";

const cx = classNames.bind(styles);

function ProgressBar({ max, min, step, classes, volumeControl = false }) {
    const dispatch = useDispatch();
    const song = useSelector(Song);
    const isPlay = useSelector(isPlaying);
    const clickTime = useSelector(times);
    const currentVolume = useSelector(volume);
    const [currentTime, setCurrentTime] = useState(0);
    const [volumeValue, setVolumeValue] = useState(currentVolume);
    const audioRef = useRef();
    const volumeRef = useRef();
    const isChangingTime = useRef(false);

    useEffect(() => {
        if (clickTime && clickTime.currentTime !== null && clickTime.duration !== null) {
            setCurrentTime((clickTime.currentTime / clickTime.duration) * 100);
        }
    }, [clickTime]);

    useEffect(() => {
        const audio = audioRef.current;

        const handlePlay = () => {
            try {
                if (audio.paused) {
                    audio.play().catch(error => {
                        console.error("Lỗi phát: ", error);
                    });
                }
            } catch (error) {
                console.error("Lỗi phát: ", error);
            }
        };

        const handleCanPlayThrough = () => {
            if (isPlay) {
                handlePlay();
            }
        };

        const handleEnded = () => {
            if (audio.currentTime === audio.duration) {
                setCurrentTime(0);
            }
            audio.currentTime = 0;
            if (isPlay) {
                audio.play().catch(error => {
                    console.error("Lỗi phát: ", error);
                });
            }
        };


        if (!volumeControl && isPlay) {
            audio.src = song["128"];
            audio.load();
            audio.currentTime = clickTime?.currentTime || 0;
            audio.addEventListener('canplaythrough', handleCanPlayThrough);
            audio.addEventListener('ended', handleEnded);
        } else {
            audio.pause();
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
            audio.removeEventListener('ended', handleEnded);
        }

        return () => {
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isPlay, song, volumeControl, clickTime]);


    useEffect(() => {
        const audio = audioRef.current;
        const handleTimeUpdate = () => {
            const audio = audioRef.current;

            if (isPlay && !isChangingTime.current) {
                setCurrentTime((audio.currentTime / audio.duration) * 100);
            }
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [isPlay]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = currentVolume;

        if (volumeRef.current) {
            volumeRef.current.value = currentVolume;
        }

        return () => {
            audio.volume = currentVolume;
        };
    }, [currentVolume]);


    const handleInputChange = (event) => {
        isChangingTime.current = true
        const newTime = (event.target.value / 100) * (clickTime?.duration || 0);
        const newCurrentTime = isNaN(newTime) ? 0 : newTime
        if (newCurrentTime !== currentTime) {
            setCurrentTime(newCurrentTime);
            audioRef.current.currentTime = newTime
            dispatch(setTimes(newCurrentTime, clickTime.duration))
        }
    };



    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        dispatch(setVolume(newVolume));
        setVolumeValue(newVolume);
        audioRef.current.volume = newVolume;
    };

    return (
        <div style={{ width: '80%' }}>
            {!volumeControl ? (
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={isNaN(currentTime) ? 0 : currentTime}
                    onChange={(e) => handleInputChange(e)}
                    className={cx('input-progress', classes)}
                    style={{ '--progress-width': `${currentTime}%` }}
                    onBlur={() => { isChangingTime.current = false; }}
                />
            ) : (
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volumeValue}
                    onChange={(e) => handleVolumeChange(e)}
                    className={cx('input-volume', classes)}
                    ref={volumeRef}
                    style={{ '--volume-width': `${volumeValue * 100}%` }}
                />
            )}
            <audio ref={audioRef} style={{ display: 'none' }} />
        </div>
    );
}

export default ProgressBar;