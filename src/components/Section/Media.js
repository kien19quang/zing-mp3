import classNames from "classnames/bind";
import styles from './Media.module.scss'
import Button from "../Button";
import { Heart, More, Play, circlePlay } from "../Icons";
import React from "react";

const cx = classNames.bind(styles)

function Media({
    playlistSection = false,
    newReleaseSection = false,
    channelSection = false,
    chartHomeSection = false,
    weekChartSection = false,
    livesTreamSection = false
}) {
    const classNames = cx({
        playlistSection,
        newReleaseSection,
        channelSection,
        chartHomeSection,
        weekChartSection,
        livesTreamSection
    })

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
        ]

    }

    const renderSinger = media.singers.map((singer, index) => (
        <React.Fragment key={index}>
            <a className={cx('singers')} href={singer.href}>
                {singer.name}
            </a>
            {index < media.singers.length - 1 && <span>,&nbsp;</span>}
        </React.Fragment>
    ));

    const actions = () => {
        return (
            <div className={cx('action-container')}>
                <div className={cx('actions')}>
                    <Button className={cx(newReleaseSection ? 'is-hidden' : '')}
                        Icon={Heart}
                        titleSub={'Thêm vào thư viện'}
                    />
                    <Button
                        Icon={newReleaseSection ? Play : circlePlay}
                    />
                    <Button className={cx(newReleaseSection ? 'is-hidden' : '')}
                        Icon={More}
                        titleSub={'Khác'}
                    />
                </div>
            </div>
        )
    }

    const contentRelease = () => {
        return (
            <div className={cx('media')}>
                <div className={cx('media-left')}>
                    <div className={cx('song-thumb')}>
                        <figure className={cx('image', 'is-60X60')}>
                            <img src={media.src} alt="" />
                        </figure>
                        {actions()}
                    </div>
                    <div className={cx('card-info')}>
                        <div className={cx('title-wrapper')}>
                            <span className={cx('title')}>{media.title}</span>
                        </div>
                        <h3 className={cx('sub-title')}>
                            {renderSinger}
                        </h3>
                        <span className={cx('time-release')}>{media.time}</span>
                    </div>
                </div>
                <div className={cx('media-right')}>
                    <Button className={cx('more-btn')}
                        Icon={More}
                        titleSub={'Khác'}
                    />
                </div>
            </div>
        )
    }

    const contentPlaylist = () => {
        return (
            <div className={cx('media')}>

            </div>
        )
    }

    return (
        <div className={cx('list-item', classNames)}>
            {newReleaseSection && contentRelease()}
            {playlistSection && contentPlaylist()}
        </div>
    );
}

export default Media;