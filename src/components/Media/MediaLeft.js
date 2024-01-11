import classNames from "classnames/bind";
import styles from './Media.module.scss'
import React from "react";
import TruncatedText from "../TruncatedText";
import Actions from "./Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)
function MediaLeft({
    controlsSection,
    newReleaseSection = false,
    playCircle = false,
    playLarge = false,
    rankInfo = false,
    contentCenter = false,
    songPrefix = false,
    chartMedia = false,
    mediaRank = false,
    mediaBox = false
}) {
    if (controlsSection || mediaRank) {
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
        album: "3D (Justin Timberlake Remix)",
        rank: "#1",
        songPrefix: "1"
    }
    var lengthMax = 1000;
    if (chartMedia || mediaBox) {
        lengthMax = 5
    } else if (!songPrefix) {
        lengthMax = undefined;
    }
    var lengthTitle = lengthMax + 5

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
            {(songPrefix || mediaRank) && <div className={cx('song-prefix')}>
                <span className={cx('number', ' is-top-1')}>{media.songPrefix}</span>
                {(mediaRank || mediaBox) && <FontAwesomeIcon icon={faMinus} className={cx('minus')} fade size="l" />}
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
                            <TruncatedText text={media.title} maxLength={lengthTitle ? lengthTitle : 15} />
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
            {mediaRank && <div className={cx('media-content')} >
                <span className={cx('album-info')} >
                    {media.album}
                </span>
            </div>
            }
        </div>
    )
}

export default MediaLeft;
