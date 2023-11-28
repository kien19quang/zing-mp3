import classNames from "classnames/bind";
import styles from './Section.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import ListMedia from "./ListMedia";
import React from "react";

const cx = classNames.bind(styles)
function Section({
    className,
    title,
    selectButton = [],
    to,
    pad0 = false,
    container,
    section,
    playlistSection = false,
    newReleaseSection = false,
    channelSection = false,
    chartHomeSection = false,
    weekChartSection = false,
    livesTreamSection = false
}) {
    const classNames = cx('wrapper', {
        [className]: className,
        pad0,
        container,
        section,
        playlistSection,
        newReleaseSection,
        channelSection,
        chartHomeSection,
        weekChartSection,
        livesTreamSection
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
            <div className={cx('title')}>
                <h3>{title}</h3>
                <Link to={to}>
                    <span className={cx('discovery-btn')}>
                        TẤT CẢ
                        <span className={cx('chevon-right')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </span>
                </Link>
            </div>
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
                <div className={cx('container-list-song', 'columns', 'row')}>
                    <ListMedia playlistSection />
                </div>
            }

        </div>
    )
}

export default Section;