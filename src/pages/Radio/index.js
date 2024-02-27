import classNames from "classnames/bind";
import styles from './Radio.module.scss'
import Section from "~/components/Section";
import Img from "~/components/Img";
import { images } from "~/assets/images";
import Actions from "~/components/Media/Actions";

const cx = classNames.bind(styles)
function Radio() {
    const renderCard = () => {
        return (
            <div className={cx('card')}>
                <div className={cx('content')}>
                    <figure className={cx('image')}>
                        <Img src={images.radioHost} />
                        <Actions playCircle />
                    </figure>
                </div>
            </div>
        )
    }

    const renderProgram = (customStyles) => {
        return (
            <div className={cx('programs')}>
                <div className={cx('programs-item')} style={customStyles}>

                </div>
            </div>
        );
    };

    const stylesFromOutside = {
        // backgroundColor: 'lightblue',
        width: '1032px',
        left: '0'
    };

    renderProgram(stylesFromOutside);
    return (
        <div className={cx('container')}>
            <a href="/zing-chart"
                className={cx('title-header')}>Radio</a>
            <Section livestream />
            <div className={cx('livestream-schedule')}>
                <div className={cx('left-col')}>
                    <div className={cx('header')}>
                        Kênh
                    </div>
                    <div className={cx('body')}>
                        {renderCard()}
                        {renderCard()}
                    </div>
                </div>
                <div className={cx('content-col')}>
                    <div className={cx('rows')}></div>
                    <div className={cx('time-lines')}></div>
                    <div className={cx('line')}></div>
                    {renderProgram(stylesFromOutside)}

                </div>
            </div>
        </div>
    );
}

export default Radio;