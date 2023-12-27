import classNames from "classnames/bind";
import styles from './Media.module.scss'
import Media from "./Media";
import React, { Fragment } from "react";
import Button from "../Button";
import { circlePlay } from "../Icons";
import Chart from "../ChartTooltip/Chart";
import config from "~/config";

const cx = classNames.bind(styles)
const ListMedia = ({
    playlistSection = false,
    newReleaseSection = false,
    weekChartSection = false,
    chartHome = false,
    radioSection = false
}) => {
    let sectionContent;
    let mediaContent;
    let numRepeats;

    if (newReleaseSection) {
        numRepeats = 12;
        mediaContent = (
            <div key="newRelease" className={cx('column', 'col-gutters', 'c-4')}>
                <div className={cx('list')}>
                    <Media newReleaseSection />
                </div>
            </div>
        );
    } else if (playlistSection) {
        numRepeats = 5;
        mediaContent = (
            <div key="playlist" className={cx('column', 'col', 'c-2_4')}>
                <div className={cx('list')}>
                    <Media playlistSection />
                </div>
            </div>
        );
    } else if (weekChartSection) {
        numRepeats = 3;
        mediaContent = (
            <div key="weekChart" className={cx('column', 'col', 'c-4')}>
                <div className={cx('list')}>
                    <Media weekChartSection />
                </div>
            </div>
        );
    } else if (radioSection) {
        numRepeats = 7;
        mediaContent = (
            <div key="radio" className={cx('column', 'col', 'c-1_7')}>
                <div className={cx('list')}>
                    <Media radioSection />
                </div>
            </div>
        );
    } else if (chartHome) {
        numRepeats = 3;
        mediaContent = (
            <div key="chartHome" className={cx('column', 'col', 'c-12')}>
                <div className={cx('list')}>
                    <Media chartHome />
                </div>
            </div>
        );
    }

    const repeatedContent = [];
    for (let i = 0; i < numRepeats; i++) {
        repeatedContent.push(
            React.cloneElement(mediaContent, { key: `${mediaContent.key}_${i}` })
        );
    }

    sectionContent = repeatedContent;
    return (
        chartHome ? <div className={cx('container')}>
            <div className={cx('section-header')}>
                <a href="/zing-chart"> #zingchart</a>
                <Button className={cx('play')}
                    circle Icon={circlePlay}
                />
            </div>
            <div className={cx('section-body')}>
                <div className={cx('chart-rank')}>
                    {sectionContent}
                    <div className={cx('more')}>
                        <Button
                            more
                            children={'Xem thêm'}
                            to={config.routes.chart}
                        />
                    </div>
                </div>
                <Chart />
            </div>
        </div>
            : <Fragment>
                {sectionContent}
            </Fragment>)
        ;
};

export default ListMedia;
