import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Section from '~/components/Section';

const cx = classNames.bind(styles);
function Content({ items = [] }) {

    // const sections = [
    //     {
    //         title: 'Mới Phát Hành',
    //         selectButton: buttonTrending,
    //         newRelease: true,
    //         section: true, pad0: true
    //     },
    //     {
    //         title: 'Chill',
    //         playlist: true,
    //         section: true, pad0: true
    //     },
    //     {
    //         title: 'Tâm trạng tan chậm',
    //         playlist: true,
    //         section: true, pad0: true
    //     },
    //     {
    //         title: 'BXH Nhạc Mới',
    //         rankInfo: true,
    //         newReleaseChart: true,
    //         section: true, pad0: true
    //     },
    //     {
    //         RTChart: true,
    //         section: true, pad0: true
    //     },
    //     {
    //         weekChart: true,
    //         shortSection: true,
    //         pad0: true
    //     },
    //     {
    //         title: 'Radio Nổi Bật',
    //         livestream: true,
    //         section: true,
    //         pad0: true
    //     },
    // ];

    const sectionArray = items.map(item => {
        const sectionTypeMap = {
            "banner": "section",
            "new-release": "section",
            "recentPlaylist": "section",
            "playlist": "section",
            "livestream": "section",
            "weekChart": "shortSection",
            "newReleaseChart": "section",
            "RTChart": "section"
        };

        const newItem = {
            sectionType: item.sectionType === "new-release" ? "newRelease" : item.sectionType, // Thay đổi tên sectionType nếu là "new-release"
            section: false,
            pad0: true,
            title: item.title,
            items: item.items
        };

        const mappedSectionType = sectionTypeMap[item.sectionType];
        if (mappedSectionType) {
            newItem[mappedSectionType] = true;
        }

        return newItem;
    });

    return (
        <div className={cx('wrapper')}>
            {sectionArray.map((sectionProps, index) => (
                <Section key={index} sections={sectionProps} />
            ))}
            {/* {console.log(items) */}
        </div>

    );
}

export default Content;

