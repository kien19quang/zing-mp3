import React from "react";
import classNames from "classnames/bind";
import styles from './Media.module.scss';
import Actions from "./Actions";
import MediaLeft from "./MediaLeft";
import TruncatedText from "../TruncatedText";
import MediaRight from "./MediaRight";
import { Wrapper } from "../Icons";
import { images } from "~/assets/images";
import { getSong, getSongInfo } from "~/services/getSongApi";
import { playSong, setSong, setSongInfo, setTimes } from "../Redux/action";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function Media({ mediaTest = [], rankInfo, mediaBox, mediaRank, listClass, ...mediaProps }) {
    const {
        numRepeats,
        ...otherMediaProps
    } = mediaProps;

    const dispatch = useDispatch()

    const handleMediaItemClick = async (id) => {
        try {
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

    const classNamesList = {
        'newRelease': otherMediaProps.newRelease,
        'chartHome': otherMediaProps.chartHome,
        'playlist': otherMediaProps.playlist,
        'playlistWithArtist': otherMediaProps.playlistWithArtist,
        'weekChart': otherMediaProps.weekChart,
        'livestream': otherMediaProps.livestream,
        'mediaRank': mediaRank,
        'mediaBox': mediaBox,
    };

    const combinedClassNames = Object.keys(classNamesList).filter(className => classNamesList[className]);


    const renderSinger = (singers) => {
        let singerNames = '';
        if (singers && Array.isArray(singers)) {
            singerNames = singers.map(singer => singer.name).join(', ');
        }
        return <TruncatedText text={singerNames} maxLength={40} />;
    };

    const card = (action = false, href, title, imgHref) => {
        return (
            <div className={cx('card')}>
                <a href={href} title={title}>
                    <figure className={cx('image')}>
                        <img src={imgHref} alt="" />
                        <div className={cx('opacity')}></div>
                        {action && <Actions fullAction playLarge playCircle />}
                    </figure>
                </a>
            </div>
        );
    };

    const contentRelease = (songPrefix, numRepeats) => {
        return mediaTest.slice(0, numRepeats).map((mediaItem, index) => {
            let updatedPercent = mediaItem.percent;
            if (!otherMediaProps.chartHome && !otherMediaProps.chartMedia) {
                updatedPercent = undefined;
            }
            return (
                <div key={index} onClick={() => handleMediaItemClick(mediaItem.id)} className={cx(listClass, otherMediaProps.chartMedia ? 'chart-media' : 'media')}>
                    {otherMediaProps.chartHome
                        ? <MediaLeft media={mediaItem} chartMedia={otherMediaProps.chartMedia} newRelease songPrefix={index + 1} />
                        : <MediaLeft media={mediaItem} chartMedia={otherMediaProps.chartMedia} newRelease rankInfo />}
                    <MediaRight percent={updatedPercent} />
                </div>
            );
        });
    };


    const contentPlaylist = (playlistWithArtist, numRepeats) => {
        return mediaTest.slice(0, numRepeats).map((mediaItem, index) => (
            <div key={index} onClick={() => handleMediaItemClick(mediaItem.id)} className={cx(listClass, 'media')}>
                {card(true, mediaItem.href, mediaItem.title, mediaItem.imgHref)}
                <div className={cx('card-content')}>
                    {!!mediaItem.textType ? (
                        <div>
                            <h3 className={cx('title')}>
                                <TruncatedText text={mediaItem.title} maxLength={15} />
                            </h3>
                            <h3 className={cx('sub-title')} >{renderSinger(mediaItem.singers)}</h3>
                        </div>
                    ) : (
                        <h3 className={cx('sub-title')}>
                            <TruncatedText text={mediaItem.describe} maxLength={45} />
                        </h3>
                    )}
                </div>
            </div>
        ));
    };

    const contentWeekChart = (numRepeats) => {
        return mediaTest.slice(0, numRepeats).map((mediaItem, index) => (
            <div key={index} onClick={() => handleMediaItemClick(mediaItem.id)} className={cx(listClass, 'card')}>
                <a href={mediaItem.src} style={{ pointerEvents: 'none' }}>
                    <figure className={cx('image')}>
                        <img src={mediaItem.imgHref} alt="" />
                        <div className={cx('opacity')}></div>
                    </figure>
                </a>
            </div>
        ));
    };

    const contentRadio = (numRepeats) => {
        return mediaTest.slice(0, numRepeats).map((mediaItem, index) => (
            <div key={index} onClick={() => handleMediaItemClick(mediaItem.id)} className={cx(listClass, 'card-content')}>
                <div className={cx('top-content')}>
                    <Wrapper className={cx('svg')} width="100%" height="100%" />
                    <div className={cx('card-img')}>
                        <figure className={cx('img', 'cover')}>
                            {mediaItem.program?.thumbnail && (
                                <img src={mediaItem.program.thumbnail} alt="" />
                            )}
                        </figure>
                        <Actions radioAction playCircle />
                        <div className="opacity" />
                    </div>
                    {mediaItem.host.thumbnail && (
                        <React.Fragment>
                            <figure className={cx('img', 'host')}>
                                <img src={mediaItem.host.thumbnail} alt="" />
                            </figure>
                            <figure className={cx('img', 'label')}>
                                <img src={images.tag} alt="" />
                            </figure>
                        </React.Fragment>
                    )}
                </div>
                <div className={cx('bot-content')}>
                    <h3 className={cx('title')}>
                        <TruncatedText text={mediaItem.title} maxLength={12} />
                    </h3>
                    <h3 className={cx("subtitle")}>{`${mediaItem.activeUsers} đang nghe`}</h3>
                </div>
            </div>
        ));
    };

    const contentMediaRank = (numRepeats) => {
        return mediaTest.slice(0, numRepeats).map((mediaItem, index) => (
            <div key={index} onClick={() => handleMediaItemClick(mediaItem.id)} className={cx(listClass, 'media', mediaRank ? 'bor-b-1' : '')}>
                <MediaLeft media={mediaItem} mediaRank={mediaRank} songPrefix mediaBox={mediaBox} />
                <MediaRight content={mediaItem.duration} />
            </div>
        ));
    };

    return (
        <div className={cx('list-item', combinedClassNames)}>
            {(otherMediaProps.newRelease || otherMediaProps.chartMedia) && contentRelease(undefined, numRepeats)}
            {otherMediaProps.chartHome && contentRelease(true, numRepeats)}
            {otherMediaProps.playlist && contentPlaylist(undefined, numRepeats)}
            {otherMediaProps.playlistWithArtist && contentPlaylist(undefined, numRepeats)}
            {otherMediaProps.weekChart && contentWeekChart(numRepeats)}
            {otherMediaProps.livestream && contentRadio(numRepeats)}
            {mediaRank && contentMediaRank(numRepeats)}
            {mediaBox && contentMediaRank(numRepeats)}
        </div>
    );
}


export default React.memo(Media);
