import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss"
import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import Footer from "../components/Footer";
import Content from "../components/Content/Content";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')} >
                <Sidebar />
            </div>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <Header />
                </div>
                <div className={cx('content')}
                    style={{ marginTop: 70 }}>
                    {children}
                    <Content />
                </div>
                <div className={cx('footer')}>
                    <Footer />
                </div>
            </div>
            {/* <div className={cx('control-music')}>
                <Controls />
            </div> */}
        </div>
    );
}

export default DefaultLayout;