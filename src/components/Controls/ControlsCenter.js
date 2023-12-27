import { Next, Prev, Repeat, Random, circlePlay, Pause } from '../Icons';
import styles from './Controls.module.scss';
import classNames from 'classnames/bind';
import ProgressBar from './ProgressBar';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { currentIndex, isPlaying, listSong, times } from '../Redux/selector';
import { nextSong, pauseSong, playSong } from '../Redux/action';

const cx = classNames.bind(styles)
function ControlsCenter({ audioRef }) {
    // const isPlaying = true
    const dispatch = useDispatch();
    const isPlay = useSelector(isPlaying);
    const time = useSelector(times);
    const songsPlay = useSelector(listSong);
    let index = useSelector(currentIndex);

    const [timePlay, setTimePlay] = useState();

    const handleTime = (time) => {
        const minutes = Math.floor(time >= 60 ? time / 60 : 0);
        const timeRemaining = time - minutes * 60;
        const second = Math.floor(timeRemaining < 60 ? timeRemaining : 0);

        return `${minutes < 10 ? '0' + minutes : minutes} : ${second < 10 ? '0' + second : second}`;
    };
    const timeRemain = handleTime(times.currentTime);
    const timeDuration = handleTime(times.duration);

    useEffect(() => {
        //time update
        setTimePlay(timeRemain);
    }, [timeRemain]);

    useEffect(() => {
        //time update
        setTimePlay(timeRemain);

    }, [timeRemain]);

    useEffect(() => {
        if (audioRef) {
            if (isPlay) {
                audioRef.current.play();
            } else {
                // audioRef.current.pause();
            }
        }
    }, [isPlay]);




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
            Icon: isPlaying ? circlePlay : Pause,
            border: true,
            type: isPlaying ? 'play' : 'pause',
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
    ]

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
    })

    const handle = (type) => {
        switch (type) {
            case 'play':
                dispatch(playSong(isPlay ? false : true));
                break;
            case 'pause':
                dispatch(pauseSong(isPlay ? false : true));
                break;
            case 'next':
                console.log('next');
                if (index < songsPlay.length - 1) {
                    index++;
                    dispatch(nextSong(index));
                    dispatch(playSong(true));
                    setTimeout(function () {
                        audioRef.current.play();
                    }, 0);
                } else {
                    index = 0;
                    dispatch(nextSong(index));
                    dispatch(playSong(true));
                    setTimeout(function () {
                        audioRef.current.play();
                    }, 0);
                }

                break;
            case 'prev':
                if (index > 0) {
                    index--;
                    dispatch(nextSong(index));
                    dispatch(playSong(true));
                    setTimeout(function () {
                        audioRef.current.play();
                    }, 0);
                } else {
                    index = songsPlay.length - 1;
                    dispatch(nextSong(index));
                    dispatch(playSong(true));
                    setTimeout(function () {
                        audioRef.current.play();
                    }, 0);
                }
                break;
            default:
                console.log('default');
        }
    };
    return (
        <div className={cx('wrapper-center')}>
            <div className={cx('btn-actions')}>
                {renderBtn}
            </div>
            <div className={cx('time')}>
                <span className={cx('time-start')}>0:00</span>
                <ProgressBar step={1} audioRef={audioRef} />
                <span className={cx('time-end')}>0:00</span>
            </div>
        </div>
    );
}

export default ControlsCenter;