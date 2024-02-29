import classNames from "classnames/bind";
import styles from './Section.module.scss'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import React, { useState } from "react";
import ListMedia from "../Media/ListMedia";
import Gallery from "../Gallery";

const cx = classNames.bind(styles)

function Section({
    className,
    container,
    sections = [],
    playlistWithArtist = false,
}) {

    const [itemName, setItemName] = useState("all"); // Dòng này được thêm

    const handleClick = (filter) => {
        if (filter === "all") {
            setItemName("all")
        } else if (filter === "vPop") {
            setItemName("vPop")
        } else if (filter === "others") {
            setItemName("others")
        }
    };

    if (!sections.items) {
        return null; // Bỏ qua section nếu không có items
    }

    const classNames = cx('wrapper', {
        [className]: className,
        container,
        pad0: sections.pad0,
        section: sections.section,
        shortSection: sections.shortSection,
        playlistWithArtist,

        livestream: sections.livestream,
        newRelease: sections.newRelease,
        playlist: sections.playlist,
        newReleaseChart: sections.newReleaseChart,
        weekChart: sections.weekChart,
        RTChart: sections.RTChart,
    })

    const button = [
        {
            nameBtn: 'TẤT CẢ',
            filter: 'all'
        },
        {
            nameBtn: 'VIỆT NAM',
            filter: 'vPop'
        },
        {
            nameBtn: 'QUỐC TẾ',
            filter: 'others'
        },
    ]



    const renderBtn = button.map((item, index) => {
        return (
            <Button
                select
                children={item.nameBtn}
                onClick={() => handleClick(item.filter)}
                key={index}
            />
        );
    })

    return (
        <div className={classNames}>
            {sections.title && (
                <div className={cx('title')}>
                    <h3>{sections.title}</h3>
                    <Link to={sections.to}>
                        <span className={cx('discovery-btn')}>
                            TẤT CẢ
                            <span className={cx('chevon-right')}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>
                        </span>
                    </Link>
                </div>
            )}

            <div className={cx(sections.livestream ? 'livestream' : '')}>
                {(sections.sectionType === 'banner') && <Gallery items={sections.items} />}
                {(sections.sectionType === 'newRelease') && (
                    <div>
                        <div>
                            <div className={cx('genre-select')}>
                                {renderBtn}
                            </div>
                        </div>
                        <div className={cx('container-list-song', 'columns', 'row')}>
                            <ListMedia items={sections.items[itemName]} newRelease />
                        </div>
                    </div>
                )}

                {(sections.sectionType === 'playlist') && (
                    <div className={cx('container-list-song', 'row')}>
                        <ListMedia items={sections.items} playlist />
                    </div>
                )}

                {(sections.sectionType === 'newReleaseChart') && (
                    <Gallery channelItem timeNextCard={5000} spacing={28} rankInfo items={sections.items} />
                )}

                {(sections.sectionType === 'weekChart') && (
                    <div className={cx('container-list-song', 'row')}>
                        <ListMedia items={sections.items} weekChart />
                    </div>
                )}

                {(sections.sectionType === 'RTChart') && <ListMedia items={sections.items} chart={sections} chartHome />}
                {(sections.sectionType === 'livestream') && <div className={cx('row')}>
                    <ListMedia items={sections.items} livestream />
                </div>}
                {playlistWithArtist && (
                    <div className={cx('container-list-song', 'row')}>
                        <ListMedia items={sections.items} playlistWithArtist />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Section;