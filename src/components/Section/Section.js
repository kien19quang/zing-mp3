import classNames from "classnames/bind";
import styles from './Section.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import React from "react";
import ListMedia from "../Media/ListMedia";
import Gallery from "../Gallery";

const cx = classNames.bind(styles)
function Section({
    className,
    title,
    selectButton = [],
    to,
    pad0 = false,
    container,
    section = false,
    shortSection = false,
    playlistSection = false,
    newReleaseSection = false,
    channelSection = false,
    chartHomeSection = false,
    weekChartSection = false,
    radioSection = false
}) {
    const classNames = cx('wrapper', {
        [className]: className,
        pad0,
        container,
        section,
        shortSection,
        playlistSection,
        newReleaseSection,
        channelSection,
        chartHomeSection,
        weekChartSection,
    })

    const renderBtn = selectButton.map((item, index) => {
        return (
            <Button
                select
                children={item.nameBtn}
                to={item.to}
                key={index}
            />
        );
    })
    return (
        < div className={classNames} >
            {title && <div className={cx('title')}>
                <h3>{title}</h3>
                <Link to={to}>
                    <span className={cx('discovery-btn')}>
                        TẤT CẢ
                        <span className={cx('chevon-right')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </span>
                </Link>
            </div>}
            <div className={cx(radioSection ? 'radioSection' : '')}>
                {newReleaseSection &&
                    <div>
                        <div>
                            <div className={cx('genre-select')}>
                                {renderBtn}
                            </div>
                        </div>
                        <div className={cx('container-list-song', 'columns', 'row')}>
                            <ListMedia newReleaseSection />
                        </div>
                    </div>
                }
                {playlistSection &&
                    <div className={cx('container-list-song', 'row')}>
                        <ListMedia playlistSection />
                    </div>
                }
                {channelSection &&
                    <Gallery channelItem timeNextCard={5000} spacing={28} rankInfo />
                }
                {weekChartSection &&
                    <div className={cx('container-list-song', 'row')}>
                        <ListMedia weekChartSection />
                    </div>
                }
                {
                    chartHomeSection && <ListMedia chartHome />
                }
                {
                    radioSection && <ListMedia radioSection />
                }
            </div>

        </div>
    )
}

export default Section;