
import axios from "axios"
import CryptoJS from "crypto-js";

class ZingMp3Api {

    VERSION
    URL
    SECRET_KEY
    API_KEY
    CTIME

    constructor(VERSION, URL, SECRET_KEY, API_KEY, CTIME) {
        this.VERSION = VERSION
        this.URL = URL
        this.SECRET_KEY = SECRET_KEY
        this.API_KEY = API_KEY
        this.CTIME = CTIME
    }

    getHash256(str) {
        return CryptoJS.SHA256(str).toString(CryptoJS.enc.Hex)
    }

    getHmac512(str, key) {
        let hmac = CryptoJS.HmacSHA512(str, key)
        return hmac.toString(CryptoJS.enc.Hex)
    }

    hashParamNoId(path) {
        return this.getHmac512(
            path + this.getHash256(`ctime=${this.CTIME}version=${this.VERSION}`),
            this.SECRET_KEY
        )
    }

    hashParam(path, id) {
        return this.getHmac512(
            path + this.getHash256(`ctime=${this.CTIME}id=${id}version=${this.VERSION}`),
            this.SECRET_KEY
        )
    }

    hashParamHome(path) {
        return this.getHmac512(
            path + this.getHash256(`count=30ctime=${this.CTIME}page=1version=${this.VERSION}`),
            this.SECRET_KEY
        )
    }

    hashCategoryMV(path, id, type) {
        return this.getHmac512(
            path + this.getHash256(`ctime=${this.CTIME}id=${id}type=${type}version=${this.VERSION}`),
            this.SECRET_KEY
        );
    }

    hashListMV(path, id, type, page, count) {
        return this.getHmac512(
            path +
            this.getHash256(
                `count=${count}ctime=${this.CTIME}id=${id}page=${page}type=${type}version=${this.VERSION}`
            ),
            this.SECRET_KEY
        );
    }

    hashSearchAll(path, type, page, count) {
        return this.getHmac512(
            path +
            this.getHash256(
                `count=${count}ctime=${this.CTIME}page=${page}type=${type}version=${this.VERSION}`
            ),
            this.SECRET_KEY
        );
    }

    hashSearchAllPlaylist(path, type, page, count) {
        return this.getHmac512(
            path +
            this.getHash256(
                `count=${count}ctime=${this.CTIME}page=${page}type=${type}version=${this.VERSION}`
            ),
            this.SECRET_KEY
        );
    }

    hashSearchAllVideo(path, type, page, count) {
        return this.getHmac512(
            path +
            this.getHash256(
                `count=${count}ctime=${this.CTIME}page=${page}type=${type}version=${this.VERSION}`
            ),
            this.SECRET_KEY
        );
    }

    hashSuggest(path) {
        return this.getHmac512(
            path +
            this.getHash256(
                `ctime=${this.CTIME}version=${this.VERSION}`
            ),
            this.SECRET_KEY
        );
    }

    getCookie() {
        return new Promise((resolve, rejects) => {
            axios.get(`${this.URL}`)
                .then((res) => {
                    // TODO: Skip Error Object is possibly 'undefined'
                    res.headers["set-cookie"].map((element, index) => {
                        if (index === 1) {
                            resolve(element) // return cookie
                        }
                    })
                })
                .catch((err) => {
                    rejects(err) // return error value if any
                })
        }
        )
    }

    requestZingMp3(path, qs) {
        return new Promise((resolve, rejects) => {

            // Config axios request default URL "https://zingmp3.vn"
            const client = axios.create({
                baseURL: `${this.URL}`,
            });

            client.interceptors.response.use((res) => res.data); // setting axios response data

            this.getCookie()
                .then((cookie) => {
                    // request
                    client.get(path, {
                        headers: {
                            Cookie: `${cookie}`,
                        },
                        params: {
                            ...qs,
                            ctime: this.CTIME,
                            version: this.VERSION,
                            apiKey: this.API_KEY,
                        }
                    })
                        .then((res) => {
                            resolve(res)
                        })
                        .catch((err) => {
                            rejects(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        })
    }

    // getSong
    getSong(songId) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/song/get/streaming", {
                id: songId,
                sig: this.hashParam("/api/v2/song/get/streaming", songId)
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getDetailPlaylist
    getDetailPlaylist(playlistId) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/playlist", {
                id: playlistId,
                sig: this.hashParam("/api/v2/page/get/playlist", playlistId)
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getHome
    getHome() {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/home", {
                page: 1,
                segmentId: "-1",
                count: "30",
                sig: this.hashParamHome("/api/v2/page/get/home")
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getTop100
    getTop100() {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/top-100", {
                sig: this.hashParamNoId("/api/v2/page/get/top-100")
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getChartHome
    getChartHome() {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/chart-home", {
                sig: this.hashParamNoId("/api/v2/page/get/chart-home")
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getNewReleaseChart
    getNewReleaseChart() {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/newRelease-chart", {
                sig: this.hashParamNoId("/api/v2/page/get/newRelease-chart")
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getInfoSong
    getInfoSong(songId) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/song/get/info", {
                id: songId,
                sig: this.hashParam("/api/v2/song/get/info", songId)
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getArtist
    getArtist(name) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/artist", {
                alias: name,
                sig: this.hashParamNoId("/api/v2/page/get/artist")
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getLyric
    getLyric(songId) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/lyric/get/lyric", {
                id: songId,
                sig: this.hashParam("/api/v2/lyric/get/lyric", songId)
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // search
    search(name) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/search/multi", {
                q: name,
                sig: this.hashParamNoId("/api/v2/search/multi")
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    getListArtistSong(artistId, page, count) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/song/get/list", {
                id: artistId,
                type: "artist",
                page: page,
                count: count,
                sort: "new",
                sectionId: "aSong",
                sig: this.hashListMV("/api/v2/song/get/list", artistId, "artist", page, count)
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    getListArtistPlaylist(artistId, page, count) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/playlist/get/list", {
                id: artistId,
                type: "artist",
                page: page,
                count: count,
                sort: "new",
                sectionId: "aPlaylist",
                sig: this.hashListMV("/api/v2/playlist/get/list", artistId, "artist", page, count)
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    getSongsByArtistName(name, page, count) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/search", {
                q: name,
                type: "song",
                page: page,
                count: count,
                sig: this.hashSearchAll("/api/v2/search", "song", page, count),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // get all playlist of artist name
    getPlaylistsByArtistName(name, page, count) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/search", {
                q: name,
                type: "playlist",
                page: page,
                count: count,
                sig: this.hashSearchAllPlaylist("/api/v2/search", "playlist", page, count),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    getVideosByArtistName(name, page, count) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/search", {
                q: name,
                type: "video",
                page: page,
                count: count,
                sig: this.hashSearchAllVideo("/api/v2/search", "video", page, count),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    Suggest() {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/app/get/recommend-keyword", {
                sig: this.hashSuggest("/api/v2/app/get/recommend-keyword"),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getListMV
    getListMV(id, page, count) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/video/get/list", {
                id: id,
                type: "genre",
                page: page,
                count: count,
                sort: "listen",
                sig: this.hashListMV("/api/v2/video/get/list", id, "genre", page, count),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getCategoryMV
    getCategoryMV(id) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/genre/get/info", {
                id: id,
                type: "video",
                sig: this.hashCategoryMV("/api/v2/genre/get/info", id, "video"),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

    // getVideo
    getVideo(videoId) {
        return new Promise((resolve, rejects) => {
            this.requestZingMp3("/api/v2/page/get/video", {
                id: videoId,
                sig: this.hashParam("/api/v2/page/get/video", videoId),
            })
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    rejects(err)
                })
        })
    }

} // END

// instance default
const ZingMp3 = new ZingMp3Api(
    "1.6.34", // VERSION
    "https://zingmp3.vn", // URL
    "2aa2d1c561e809b267f3638c4a307aab", // SECRET_KEY
    "88265e23d4284f25963e6eedac8fbfa3", // API_KEY
    String(Math.floor(Date.now() / 1000)) // CTIME
)

export default ZingMp3