import classNames from "classnames/bind";
import styles from './Gallery.module.scss'
// import { useState } from "react";
import { useKeenSlider } from 'keen-slider/react';
import { images } from "~/assets/images";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";
import Img from "../Img";

const cx = classNames.bind(styles)
function Gallery() {
    const img = [
        images.card1,
        images.card2,
        images.card3,
        images.card4
    ];
    const renderBanner = img.map((item, index) => {
        return (
            <div className={cx('card_banners')} key={index}>
                <div className={`keen-slider__slide number-slide${index + 1}`}>
                    <Link to="/">
                        <figure className={cx('items')}>
                            <Img src={item} />
                        </figure>
                    </Link>
                </div>
            </div>
        );
    });
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            mode: 'free',
            slides: {
                perView: 3,
                spacing: 15,
            },
        },
        [
            (slider) => {
                let timeout;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 2000);
                }
                slider.on('created', () => {
                    slider.container.addEventListener('mouseover', () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener('mouseout', () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });

                slider.on('dragStarted', clearNextTimeout);
                slider.on('animationEnded', nextTimeout);
                slider.on('animationStarted', nextTimeout);
                slider.on('updated', nextTimeout);
                slider.on('destroyed', clearNextTimeout);
            }
        ],
    );
    return (
        <div className={cx('wrapper')}>

            <div className={cx('gallery-prev')}>
                <Arrow
                    left
                    onClick={(e) => {
                        e.stopPropagation() || instanceRef.current.prev();
                    }}
                />
            </div>

            <div ref={sliderRef} className={cx('keen-slider')}>
                {renderBanner}
            </div>

            <div className={cx('gallery-next')}>
                <Arrow
                    onClick={(e) =>
                        e.stopPropagation() || instanceRef.current.next()
                    }
                />
            </div>
        </div>
    );
}

export default Gallery;