import classNames from "classnames/bind";
import styles from './Chart.module.scss'
import Button from "~/components/Button";
import { circlePlay } from "~/components/Icons";
import ChartTooltip from "~/components/ChartTooltip";
// import Media from "~/components/Media/Media";
import config from "~/config/routes";
import Media from "~/components/Media/Media";

const cx = classNames.bind(styles)
function Chart() {
    const boxHeader = ({ href = "/zing-chart/vn", content = "Việt Nam" }) => {
        return (
            <div className={cx('box-header')}>
                <a href={href}
                    className={cx('title-body')}>{content}</a>
                <Button className={cx('play')}
                    medium circle Icon={circlePlay}
                />
            </div>
        )
    }
    return (
        <div className={cx('container')}>
            <div className={cx('section-header')}>
                <a href="/zing-chart"
                    className={cx('title-header')}> #zingchart</a>
                <Button className={cx('play')}
                    big circle Icon={circlePlay}
                />
            </div>
            <ChartTooltip
                className={cx('chart-container')}
                width={1008}
                height={300}
            />
            <Media mediaRank />
            <div className={cx('more')}>
                <Button
                    more
                    children={'Xem top 100'}
                />
            </div>
            <div className={cx('wrapper')}>
                <div className={cx('bg-blur')} />
                <div className={cx('bg-alpha')} />
                <div className={cx('section-body')}>
                    <a href={config.chart} className={cx('title')}>
                        Bảng Xếp Hạng Tuần
                    </a>
                </div>
                <div className={cx('week-chart-box')}>
                    <div className={cx('column')}>
                        <div className={cx('box')}>
                            {boxHeader({ href: "/zing-chart/vn", content: "Việt Nam" })}
                            <Media mediaBox />
                            <div className={cx('more')}>
                                <Button
                                    more
                                    children={'Xem thêm'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('column')}>
                        <div className={cx('box')}>
                            {boxHeader({ href: "/zing-chart/us-uk", content: "US-UK" })}
                            <Media mediaBox />
                            <div className={cx('more')}>
                                <Button
                                    more
                                    children={'Xem thêm'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('column')}>
                        <div className={cx('box')}>
                            {boxHeader({ href: "/zing-chart/K-Pop", content: "K-Pop" })}
                            <Media mediaBox />
                            <div className={cx('more')}>
                                <Button
                                    more
                                    children={'Xem thêm'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chart;