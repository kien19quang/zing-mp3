import classNames from "classnames/bind";
import styles from './Media.module.scss'
import React, { Fragment } from "react";
import Button from "../Button";
import { circlePlay } from "../Icons";
import Chart from "../ChartTooltip/Chart";
import config from "~/config";
import Media from "./Media";

const cx = classNames.bind(styles);

function ListMedia({ items = [], chart, ...mediaTypes }) {
    let sectionContent;
    const mediaList = items.map(item => {
        const {
            encodeId,
            title,
            link,
            releaseDate,
            artists,
            album,
            rakingStatus,
            songPrefix,
            describe,
            thumbnail,
            host,
            program,
            activeUsers,
            sortDescription,
            banner,
            textType
        } = item;

        return {

            id: encodeId,
            title,
            src: link,
            time: convertTimestamp(releaseDate),
            singers: artists,
            describe: describe || sortDescription,
            imgHref: thumbnail || banner,
            host: host,
            program: program,
            activeUsers,
            album,
            rank: "#" + rakingStatus,
            songPrefix,
            textType: textType
        };
    });

    function convertTimestamp(timestamp) {
        if (isNaN(timestamp)) {
            return "Invalid timestamp";
        }
        const releaseDate = new Date(timestamp * 1000);
        const timeDiffMilliseconds = Date.now() - releaseDate.getTime();
        if (timeDiffMilliseconds >= 31536000000) { // 1 năm = 31536000000 milisecond
            const yearsDiff = Math.floor(timeDiffMilliseconds / 31536000000);
            return `${yearsDiff} năm trước`;
        } else if (timeDiffMilliseconds >= 86400000) {
            const daysDiff = Math.floor(timeDiffMilliseconds / 86400000);
            return `${daysDiff} ngày trước`;
        } else {
            const hoursDiff = Math.floor(timeDiffMilliseconds / 3600000); // 1 giờ = 3600000 milisecond
            return `${hoursDiff} giờ trước`;
        }
    }

    const activeMediaType = Object.keys(mediaTypes).find(type => mediaTypes[type]);
    const mediaConfigs = {
        newRelease: {
            listClass: 'c-4',
            mediaProps: {
                numRepeats: 12,
                newRelease: true
            }
        },
        playlist: {
            listClass: 'c-2_4',
            mediaProps: {
                numRepeats: 5,
                playlist: true
            }
        },
        weekChart: {
            listClass: 'c-4',
            mediaProps: {
                numRepeats: 3,
                weekChart: true
            }
        },
        livestream: {
            listClass: 'c-1_7',
            mediaProps: {
                numRepeats: 7,
                livestream: true
            }
        },
        chartHome: {
            listClass: 'c-12',
            mediaProps: {
                numRepeats: 3,
                chartHome: true
            }
        },
        mediaRank: {
            listClass: 'c-12',
            mediaProps: {
                numRepeats: 10,
                mediaRank: true
            }
        },
        mediaBox: {
            listClass: 'c-12',
            mediaProps: {
                numRepeats: 5,
                mediaBox: true
            }
        }
    };

    const { mediaProps, listClass } = mediaConfigs[activeMediaType];
    const mediaContent = (
        <div key={activeMediaType} className={cx(activeMediaType === 'newRelease' ? 'col-gutters' : 'col')}>
            {getMediaComponent(mediaList, mediaProps, listClass)}
        </div>
    );

    sectionContent = mediaContent;

    return (
        activeMediaType === 'chartHome' ? (
            <div className={cx('container')}>
                <div className={cx('section-header')}>
                    <a href="/zing-chart"> #zingchart</a>
                    <Button className={cx('play')} circle Icon={circlePlay} />
                </div>
                <div className={cx('section-body')}>
                    <div className={cx('chart-rank')}>
                        {sectionContent}
                        <div className={cx('more')}>
                            <Button more children={'Xem thêm'} to={config.routes.chart} />
                        </div>
                    </div>
                    <Chart width={554} height={300} items={chart} />
                </div>
            </div>
        ) : (
            <Fragment>{sectionContent}</Fragment>
        )
    );
}

function getMediaComponent(mediaList, mediaProps, listClass) {
    return (
        <Media mediaTest={mediaList} listClass={listClass} {...mediaProps} />
    );
}

export default ListMedia;
