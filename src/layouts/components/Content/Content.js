import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Section from '~/components/Section';

const cx = classNames.bind(styles);
function Content() {
    const buttonTrending = [{
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

    return (
        <div className={cx('wrapper')}>
            <Section
                title={'Mới Phát Hành'}
                selectButton={buttonTrending}
                newReleaseSection
                channelSection
                pad0
            />
            <Section
                title={'Remix Là Dance Luôn'}
                playlistSection
                channelSection
                pad0
            />
        </div>
    );
}

export default Content;
