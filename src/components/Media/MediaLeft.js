import classNames from "classnames/bind";
import styles from './Media.module.scss'
import React from "react";
import TruncatedText from "../TruncatedText";
import Actions from "./Actions";

const cx = classNames.bind(styles)
function MediaLeft({
    controlsSection,
    newReleaseSection = false,
    playCircle = false,
    playLarge = false,
    rankInfo = false,
    contentCenter = false,
    songPrefix = false,
}) {
    if (controlsSection) {
        newReleaseSection = true
    }
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
        rank: "#1",
        songPrefix: "1"
    }
    var lengthMax = 1000;
    if (!songPrefix) {
        lengthMax = undefined;
    }

    const renderSinger = media.singers.map((singer, index) => (
        <React.Fragment key={index}>
            <a className={cx('singers')} href={singer.href}>
                <TruncatedText text={singer.name} maxLength={lengthMax ? lengthMax : 10} />
            </a>
            {index < media.singers.length - 1 && <span>,&nbsp;</span>}
        </React.Fragment>
    ));

    return (
        <div className={cx('media-left')}>
            {songPrefix && <div className={cx('song-prefix')}>
                <span className={cx('number', ' is-top-1')}>{media.songPrefix}</span>
            </div>
            }
            <div className={cx('song-thumb')}>
                <figure className={cx('image', newReleaseSection ? 'is-60X60' : 'is-120X120')}>
                    <img src={media.src} alt="" />
                </figure>
                <Actions playLarge={playLarge} playCircle={playCircle} />
            </div>
            <div className={cx('card-info', contentCenter ? 'conten-center' : '')}>
                <div>
                    <div className={cx('title-wrapper')}>
                        <span className={cx('title')}>
                            <TruncatedText text={media.title} maxLength={lengthMax ? lengthMax : 15} />
                        </span>
                    </div>
                    <h3 className={cx('sub-title', 'truncate')}>
                        {renderSinger}
                    </h3>
                </div>
                <div className={cx(rankInfo ? 'rank-info' : 'display-none')}>
                    <span className={cx('order')}>{media.rank}</span>
                    <span className={cx('time-release')}>{media.time}</span>
                </div>
            </div>
        </div>
    )
}

export default MediaLeft;
