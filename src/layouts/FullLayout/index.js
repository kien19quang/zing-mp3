import classNames from "classnames/bind";
import styles from './FullLayout.module.scss'
import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import Footer from "~/layouts/components/Footer";

const cx = classNames.bind(styles)

function FullLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default FullLayout;