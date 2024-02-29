import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header";
import Sidebar from "~/layouts/components/Sidebar";
import Footer from "../components/Footer";
import Controls from "~/components/Controls";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const audioRef = useRef();
    const isPlaying = useSelector((state) => state.isPlaying);
    const [isOpen, setIsOpen] = useState(false);
    const isInitial = useRef(true);

    useEffect(() => {
        if (!isInitial.current && isPlaying) {
            setIsOpen(true);
        }
        isInitial.current = false;
    }, [isPlaying]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("sidebar")}>
                <Sidebar />
            </div>
            <div className={cx("container")}>
                <div className={cx("header")}>
                    <Header />
                </div>
                <div className={cx("content")} style={{ marginTop: 70 }}>
                    {children}
                </div>
                <div className={cx("footer")}>
                    <Footer />
                </div>
            </div>
            {isOpen && (
                <div className={cx("control-music")}>
                    <Controls audioRef={audioRef} />
                </div>
            )}
        </div>
    );
}

export default DefaultLayout;
