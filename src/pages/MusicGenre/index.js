import classNames from "classnames/bind";
import styles from './MusicGenre.module.scss'
import Button from "~/components/Button";
import { useState } from "react";
import Section from "~/components/Section";

const cx = classNames.bind(styles)
function MusicGenre() {
    const initialVisibleItems = [4, 4, 8];
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
    const [buttonClicked, setButtonClicked] = useState(Array(3).fill(false));

    const items = [
        {
            title: "BXH Nhạc Mới",
            href: "/hub/BXH-Nhac-Moi/IWZ9Z0CA.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/d/b/e/4/dbe426a555b7d680be25232007739019.jpg"
        },
        {
            title: "Top 100",
            href: "/hub/Top-100/IWZ9Z0BF.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/2/d/2/d/2d2d88326a507319335ffc2e2887c0b7.jpg"
        },
        {
            title: "Best Of 2023",
            href: "/hub/Best-Of-2023/IWZ9Z0C6.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/7/0/1/1/7011bc43a49137cfc9a895be46ef307e.jpg"
        },
        {
            title: "Artist's Story",
            href: "/hub/Artist-s-Story/IWZ9Z0CO.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/a/c/9/e/ac9e073bbfbaadea7b1cb50bd047ece0.jpg"
        },
        {
            title: "Nhạc Xuân",
            href: "/hub/Nhac-Xuan/IWZ9Z0A6.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/5/a/8/0/5a8069e570b600c90b56fdd1699ed698.jpg"
        }
    ];

    const items2 = [
        {
            title: "Nhạc Việt",
            href: "/hub/Nhac-Viet/IWZ9Z087.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/9/5/8/e/958e9994c6720513cc84a7f7a478020b.jpg"
        },
        {
            title: "Nhạc Âu Mỹ",
            href: "/hub/Nhac-Au-My/IWZ9Z086.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/d/6/4/0/d640e486023bb0bc1bbe4d94209ff648.jpg"
        },
        {
            title: "Nhạc Hàn",
            href: "/hub/Nhac-Han/IWZ9Z08U.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/9/0/c/6/90c615657364a570232d7f6e86ffa6da.jpg"
        },
        {
            title: "Nhạc Hoa",
            href: "/hub/Nhac-Hoa/IWZ9Z08Z.html",
            imageUrl: "https://photo-zmp3.zmdcdn.me/cover/0/6/e/0/06e09e84d6c6ef29f588e0c6032d72bf.jpg"
        },
    ];

    const items3 = [
        {
            title: 'Ngủ Ngon',
            href: '/hub/Ngu-Ngon/IWZ9Z09B.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/4/a/3/b/4a3b5265ee2c9e2c84f5a88194382b5d.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/8/c/7/d8c7d808f78847698451e0c3c8516072.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/2/1/7/2217a09c02428d677e29fe63838beabc.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/2/d/d/12ddfe3fe6c1a1ab900292ec3b386fb8.jpg',
            ],
        },
        {
            title: 'Workout',
            href: '/hub/Workout/IWZ9Z09F.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/d/b/5/c/db5cf069b328c7858b2d9642cc6b4529.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/c/7/1/6c71b38b65b49236a4f8e3400e6f4e98.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/4/9/9/14995898650bd33e2d0d7604acf45077.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/c/d/7ecd60f5131550a38267d9d0d35cf979.jpg',
            ],
        },
        {
            title: 'Khúc Nhạc Vui',
            href: '/hub/Khuc-Nhac-Vui/IWZ9Z09A.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/5/4/5/4/5454a8586d26bd5e5bdb7682b84dce0f.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/9/e/f/59efb805f9684f22867299b912f5d6a0.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/0/2/1/9021e0914ecfe8c7e183033bb9f6ead2.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/6/1/5/9615a0c7baf671e8cd80f064d013a402.jpg',
            ],
        },
        {
            title: 'Dinner',
            href: '/hub/Dinner/IWZ9Z0C8.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/1/c/c/8/1cc8ae9704ae8fb7e34487ce744083a9.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/0/8/a/c08a32a5bc9c5d5429cd1a7ea2c4b8ef.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/e/9/9/c/e99c01854deb2930a6d7e7510cf4f9ff.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/9/5/5/2955d83bfa5d429dc8309951335cae24.jpg',
            ],
        },
        {
            title: 'Chơi Game',
            href: '/hub/Choi-Game/IWZ9Z097.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/4/d/f/4/4df44f0a15edb254717c383cf256b193.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/e/0/7/de077aa08495f9d73fb40b3a14770018.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/b/7/6/7b766c4c4debc2ea417c48e0f0416a55.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/7/c/7/97c7e9f277edf5cdb3269426c5b00ad2.jpg',
            ],
        },
        {
            title: 'Tiệc Tùng',
            href: '/hub/Tiec-Tung/IWZ9Z09D.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/0/8/7/8/0878113f776f53892e91935f0913cc0b.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/b/f/a/cbfa029e1020300b11d9ca6f5723f6b9.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/4/2/b/342b57cd14262e6e479f3b79a4a7ca98.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/7/5/9/0759bc7757917277a2d749113e81a17d.jpg',
            ],
        },
        {
            title: 'Cà Phê',
            href: '/hub/Ca-Phe/IWZ9Z09Z.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/b/b/b/0/bbb0a8963e9ed3b81974613b52b9476c.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/3/8/4/c384805adbd65b80736434e8af9b1b53.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/c/8/c/9c8c3aa35c687aaab7c434fa6aba5089.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/5/e/6/15e6cb3351fa9eb85004f6c70f64ca8b.jpg',
            ],
        },
        {
            title: 'Những Chuyến Đi',
            href: '/hub/Nhung-Chuyen-Di/IWZ9Z0AF.html',
            imageUrl: 'https://photo-zmp3.zmdcdn.me/cover/8/e/4/a/8e4a3346be739dc204d16d1729e0c74e.jpg',
            thumbImages: [
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/e/8/d/1e8d03653cef922247dc8a8e48cfbb23.jpg',
                'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/6/1/5/36151e1f5ee6d59a1d398bf1a7aec5f3.jpg',
            ],
        },
    ];




    const SectionItem = ({ title, href, imageUrl, thumbImages }) => {
        return (
            <div className={cx('column')}>
                <a href={href}>
                    <div className={cx('item')}>
                        <div className={cx('card-image', 'cover')}>
                            <figure className={cx('image', 'is-48x48')}>
                                <img src={imageUrl} alt="" />
                            </figure>
                        </div>
                        <div className={cx(thumbImages ? '' : 'body')}>
                            <div className={cx(thumbImages ? 'topic-info' : 'content')}>
                                <h3 className={cx('title')}>{title}</h3>
                                {thumbImages && ThumbImage()}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    };

    const ThumbImage = () => {
        return (
            <div className={cx("thumb-images")}>
                <div className={cx("thumb-item")}>
                    <figure className={cx("thumb-figure")}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/8/c/7/d8c7d808f78847698451e0c3c8516072.jpg" alt="" />
                    </figure>
                </div>
                <div className={cx("thumb-item")}>
                    <figure className={cx("thumb-figure")}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/2/1/7/2217a09c02428d677e29fe63838beabc.jpg" alt="" />
                    </figure>
                </div>
                <div className={cx("thumb-item")}>
                    <figure className={cx("thumb-figure")}>
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/2/d/d/12ddfe3fe6c1a1ab900292ec3b386fb8.jpg" alt="" />
                    </figure>
                </div>
            </div>
        );
    };

    const SectionGenre = ({ items, title, index }) => {
        const handleShowAll = () => {
            setVisibleItems(prevVisibleItems => {
                const newVisibleItems = [...prevVisibleItems];
                newVisibleItems[index] = items.length;
                return newVisibleItems;
            });
            setButtonClicked(prevStates => {
                const newStates = [...prevStates];
                newStates[index] = true;
                return newStates;
            });
        };

        return (
            <div className={cx('section')}>
                <h3 className={cx('section-title')}>{title}</h3>
                <div className={cx('collapsed-list')}>
                    <div className={cx('columns', 'is-multiline', 'is-oneline')}>
                        {items.slice(0, visibleItems[index]).map((item, index) => (
                            <SectionItem key={index} {...item} />
                        ))}
                    </div>
                    <div className={cx('more')}>
                        {!buttonClicked[index] && (
                            <Button more onClick={handleShowAll}>
                                Xem thêm
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                <a href="./" alt=''>
                    <figure className={cx('banner-image')}>
                        <img src='https://photo-zmp3.zmdcdn.me/cover/9/a/7/3/9a735b1300b03f0c174e9ed0971b90da.jpg'
                            alt=""
                        />
                    </figure>
                </a>
                {SectionGenre({ items: items, title: 'Nổi Bật', index: 0 })}
                {SectionGenre({ items: items2, title: 'Quốc Gia', index: 1 })}
                {SectionGenre({ items: items3, title: 'Quốc Gia', index: 2 })}
                <Section
                    title={"Trữ Tình & Bolero"}
                    playlistWithArtist
                    className={cx('section')} />
            </div>
        </div>
    );
}

export default MusicGenre;


