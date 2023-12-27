import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Section from '~/components/Section';

const cx = classNames.bind(styles);
function Content() {
    const buttonTrending = [
        {
            nameBtn: 'TẤT CẢ',
            to: '/new-release/song?filter=all'
        },
        {
            nameBtn: 'VIỆT NAM',
            to: '/new-release/song?filter=vpop'
        },
        {
            nameBtn: 'QUỐC TẾ',
            to: '/new-release/song?filter=USUK'
        },
    ]

    const sections = [
        {
            title: 'Mới Phát Hành',
            selectButton: buttonTrending,
            newReleaseSection: true,
            section: true, pad0: true
        },
        {
            title: 'Chill',
            playlistSection: true,
            section: true, pad0: true
        },
        {
            title: 'Tâm trạng tan chậm',
            playlistSection: true,
            section: true, pad0: true
        },
        {
            title: 'BXH Nhạc Mới',
            rankInfo: true,
            channelSection: true,
            section: true, pad0: true
        },
        {
            chartHomeSection: true,
            section: true, pad0: true
        },
        {
            weekChartSection: true,
            shortSection: true,
            pad0: true
        },
        {
            title: 'Radio Nổi Bật',
            radioSection: true,
            section: true,
            pad0: true
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {sections.map((sectionProps, index) => (
                <Section key={index} {...sectionProps} />
            ))}
        </div>
    );
}

export default Content;

