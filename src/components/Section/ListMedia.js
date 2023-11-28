import classNames from "classnames/bind";
import styles from './Media.module.scss'
import Media from "./Media";

const cx = classNames.bind(styles)
function ListMedia({
    playlistSection = false,
    newReleaseSection = false,
    chartHomeSection = false,
    weekChartSection = false,
    livesTreamSection = false }) {

    let sectionContent;
    let mediaContent
    let numRepeats;
    if (newReleaseSection) {
        numRepeats = 12
        mediaContent = <div className={cx('column', 'col', 'c-4')}>
            <div className={cx('list')}>
                <Media newReleaseSection />

            </div>
        </div>
    } else if (playlistSection) {
        numRepeats = 5
        mediaContent = <div className={cx('column', 'col', 'c-2_4')} >
            <div className={cx('list')}>
                <Media playlistSection />
            </div>
        </div >
    } else if (weekChartSection) {
        numRepeats = 3
        mediaContent = <div className={cx('column', 'col', 'c-4')} >
            <div className={cx('list')}>
                <Media mediaContent />
            </div>
        </div >
    } else if (livesTreamSection) {
        numRepeats = 7
        mediaContent = <div className={cx('column', 'col', 'c-1_7')} >
            <div className={cx('list')}>
                <Media livesTreamSection />
            </div>
        </div >
    }

    const repeatedContent = [];
    for (let i = 0; i < numRepeats; i++) {
        repeatedContent.push(mediaContent);
    }

    sectionContent = repeatedContent;
    return sectionContent;
}

export default ListMedia;