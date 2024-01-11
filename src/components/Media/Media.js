import classNames from "classnames/bind";
import styles from './Media.module.scss'
import React from "react";
import Actions from "./Actions";
import MediaLeft from "./MediaLeft";
import TruncatedText from "../TruncatedText";
import MediaRight from "./MediaRight";
import { Wrapper } from "../Icons";
import { images } from "~/assets/images";

const cx = classNames.bind(styles)

function Media({
    playlistSection = false,
    newReleaseSection = false,
    channelSection = false,
    weekChartSection = false,
    chartHome = false,
    radioSection = false,
    chartMedia = false,
    mediaRank = false,
    mediaBox = false,
    playlistWithArtist = false
}) {
    const classNames = cx({
        playlistSection,
        newReleaseSection,
        channelSection,
        weekChartSection,
        chartHome,
        radioSection,
        chartMedia,
        mediaRank,
        mediaBox,
        playlistWithArtist
    })


    const mediaPlaylist = {
        title: "Đỉnh cao Remix Việt",
        href: "https://zingmp3.vn/album/Dinh-Cao-Remix-Viet-Hoang-Thuy-Linh-Masew-Van-Mai-Huong-Tang-Duy-Tan/ZWZA8DZ9.html",
        imgHref: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/d/8/d/4d8d4608e336c270994d31c59ee68179.jpg",
        describe: "Khi bạn cần giai điệu để xoa dịu những...",
        percent: "33%",
        duration: "03:55"

    }

    const mediaWeekChart = {
        href: "https://zingmp3.vn/zing-chart-tuan/Bai-hat-Viet-Nam/IWZ9Z08I.html",
        imgHref: "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg",
    }

    const card = (action = false) => {
        return (
            <div className={cx('card')}>
                <a href={mediaPlaylist.href} title={mediaPlaylist.title}>
                    <figure className={cx('image')}>
                        <img src={mediaPlaylist.imgHref} alt="" />
                        <div className={cx('opacity')}></div>
                        {action &&
                            <Actions fullAction playLarge playCircle />}
                    </figure>
                </a>
            </div>
        )
    }

    let songPrefix = false
    const contentRelease = (songPrefix) => {
        let percent = mediaPlaylist.percent
        if (!(chartHome || chartMedia)) {
            percent = undefined;
        }
        return (
            <div className={cx(chartMedia ? 'chart-media' : 'media')}>
                <MediaLeft chartMedia={chartMedia} newReleaseSection songPrefix={songPrefix} />
                <MediaRight percent={percent} />
            </div>
        )
    }

    //component mediaLeft
    const media = {
        title: "3D (Justin Timberlake Remix)",
        src: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/4/a/5/d4a548a46b2c47c6a27583147546b185.jpg",
        time: '3 ngày trước',
        singers: [{
            name: "Jung Kook",
            href: 'https://zingmp3.vn/nghe-si/Jung-Kook',
        }, {
            name: "Justin Timberlake",
            href: 'https://zingmp3.vn/nghe-si/Justin-Timberlake',
        }
        ],
        album: "3D (Justin Timberlake Remix)",
        rank: "#1",
        songPrefix: "1"
    }
    const renderSinger = media.singers.map((singer, index) => (
        <React.Fragment key={index}>
            <a className={cx('singers')} href={singer.href}>
                <TruncatedText text={singer.name} maxLength={100} />
            </a>
            {index < media.singers.length - 1 && <span>,&nbsp;</span>}
        </React.Fragment>
    ));
    //
    const contentPlaylist = (playlistWithArtist) => {
        return (
            <div className={cx('media')}>
                {card(true)}
                <div className={cx('card-content')}>
                    {playlistWithArtist ?
                        <div>
                            <h3 classNames={cx('sub-title')}>{media.title}</h3>
                            <h3>
                                {renderSinger}
                            </h3>

                        </div>
                        : <h3 className={cx('sub-title')}>
                            <TruncatedText text={mediaPlaylist.describe} maxLength={100} />
                        </h3>
                    }
                </div>
            </div>
        )
    }

    const contentChannel = () => {
        const mediaArray = Array.from({ length: 5 }, (_, index) => (
            <div key={index} className={cx('gallery-media', `keen-slider__slide number-slide${index + 1}`)}>
                <div className={cx('media')}>
                    <MediaLeft playCircle playLarge rankInfo />
                </div>
            </div>
        ));
        return (
            mediaArray.map((media, index) => (
                <div key={index} className={cx('card_banners')}>
                    {media}
                    {/* {console.log(mediaArray, media)} */}
                </div>
            ))
        );
    };

    const contentWeekChart = () => {
        return (
            <div className={cx('card')}>
                <a href={mediaWeekChart.href}>
                    <figure className={cx('image')}>
                        <img src={mediaWeekChart.imgHref} alt="" />
                        <div className={cx('opacity')}></div>
                    </figure>
                </a>
            </div>
        )
    }

    const contentRadio = () => {
        return (
            <div className={cx('card-content')}>
                <div className={cx('top-content')}>
                    <Wrapper className={cx('svg')} width="100%" height="100%" />
                    <div className={cx('card-img')}>
                        <figure className={cx('img', 'cover')}>
                            <img src={images.radioCover} alt="" />
                        </figure>
                        <Actions radioAction playCircle />
                        <div className="opacity" />
                    </div>
                    <figure className={cx('img', 'host')}>
                        <img src={images.radioHost} alt="" />
                    </figure>
                    <figure className={cx('img', 'label')}>
                        <img src={images.tag} alt="" />
                    </figure>
                </div>
                <div className={cx('bot-content')}>
                    <h3 className={cx('title')}>CHILLING</h3>
                    <h3 className={cx("subtitle")}>666 đang nghe</h3>
                </div>
            </div>
        )
    }

    const contentMediaRank = ({ mediaBox, mediaRank }) => {
        return (
            <div className={cx('media', mediaRank ? 'bor-b-1' : '')}>
                <MediaLeft mediaRank={mediaRank} songPrefix mediaBox={mediaBox} />
                <MediaRight content={mediaPlaylist.duration} />
                {console.log(mediaBox)}
            </div>
        )
    }

    return (
        channelSection ? contentChannel()
            : (
                <div className={cx('list-item', classNames)}>
                    {(newReleaseSection || chartMedia) && contentRelease()}
                    {chartHome && contentRelease({ songPrefix })}
                    {playlistSection && contentPlaylist()}
                    {playlistWithArtist && contentPlaylist({ playlistWithArtist })}
                    {weekChartSection && contentWeekChart()}
                    {radioSection && contentRadio()}
                    {mediaRank && contentMediaRank({ mediaRank })}
                    {mediaBox && contentMediaRank({ mediaBox })}
                </div>
            )
    );
}

export default Media;