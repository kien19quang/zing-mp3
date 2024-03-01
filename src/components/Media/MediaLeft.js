import React from 'react';
import classNames from 'classnames/bind';
import styles from './Media.module.scss';
import TruncatedText from '../TruncatedText';
import Actions from './Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { playSong, setSong, setSongInfo, setTimes } from '../Redux/action';
import { getSong, getSongInfo } from '~/services/getSongApi';

const cx = classNames.bind(styles);

function MediaLeft({
    controlsSection,
    newRelease = false,
    playCircle = false,
    playLarge = false,
    rankInfo,
    contentCenter = false,
    songPrefix,
    chartMedia = false,
    mediaRank = false,
    mediaBox = false,
    media = {},
}) {
    const dispatch = useDispatch(); // Sử dụng useDispatch để gửi action đến Redux

    if (controlsSection || mediaRank) {
        newRelease = true;
    }

    var lengthMax = 1000;
    if (chartMedia || mediaBox) {
        lengthMax = 25;
    } else if (!songPrefix) {
        lengthMax = undefined;
    }
    var lengthTitle = lengthMax + 5;

    const renderSinger = (singers) => {
        let singerNames = '';
        if (singers && Array.isArray(singers)) {
            singerNames = singers.map((singer) => singer.name).join(', ');
        }
        return <TruncatedText text={singerNames} maxLength={20} />;
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const handleClick = async () => {
        try {
            const id = media.encodeId
            const song = await getSong(id);
            const songInfo = await getSongInfo(id);
            if (song && songInfo) {
                const { currentTime, duration } = songInfo;

                dispatch(setSong(song));
                dispatch(setSongInfo(songInfo));
                dispatch(playSong(true))
                dispatch(setTimes(currentTime || 0, duration));

            } else {
                console.log("Failed to get song or songInfo from API");
            }

        } catch (error) {
            console.error('Error fetching song data:', error)
        }
    };

    return (
        <div className={cx(mediaRank || mediaBox ? 'mediaRank' : 'media-left', 'media-left')} onClick={handleClick}>
            {(songPrefix || mediaRank) && (
                <div className={cx('song-prefix')}>
                    <span className={cx('number', ' is-top-1')}>{songPrefix}</span>
                    {mediaRank || mediaBox ? <FontAwesomeIcon icon={faMinus} className={cx('minus')} fade size="l" /> : null}
                </div>
            )}
            <div className={cx('song-thumb')}>
                <figure className={cx('image', newRelease ? 'is-60X60' : 'is-120X120')}>
                    <img src={media.imgHref || media.thumbnail} alt="" />
                </figure>
                <Actions playLarge={playLarge} playCircle={playCircle} />
            </div>
            <div className={cx('card-info', contentCenter ? 'conten-center' : '')}>
                <div>
                    <div className={cx('title-wrapper')}>
                        <span className={cx('title')}>
                            <TruncatedText text={media.title} maxLength={lengthTitle ? lengthTitle : 15} />
                        </span>
                    </div>
                    <h3 className={cx('sub-title', 'truncate')}>{renderSinger(media.singers || media.artists)}</h3>
                </div>
                <div className={cx(rankInfo ? 'rank-info' : 'display-none')}>
                    <span className={cx('order')}>{media.rank || rankInfo}</span>
                    <span className={cx('time-release')}>{media.time || formatDate(media.releasedAt)}</span>
                </div>
            </div>
            {mediaRank && (
                <div className={cx('media-content')}>
                    <span className={cx('album-info')}>{media.album.title}</span>
                </div>
            )}
        </div>
    );
}

export default MediaLeft;
