// reducer.js

const initialState = {
    times: {
        currentTime: 0,
        duration: 0
    },
    Song: {},
    SongInfo: {},
    ListSong: [],
    currentSongIndex: 0,
    isPlaying: false,
    volume: 0.5,
};

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return { ...state, times: action.payload };
        case 'SET_SONG':
            return { ...state, Song: action.payload };
        case 'SET_LIST_SONG':
            return { ...state, ListSong: action.payload };
        case 'SET_SONG_INFO':
            return { ...state, SongInfo: action.payload };
        case 'PLAY_SONG':
            return { ...state, isPlaying: true };
        case 'PAUSE_SONG':
            return { ...state, isPlaying: false };
        case 'NEXT_SONG':
            return { ...state, currentSongIndex: action.payload };
        case 'PREV_SONG':
            return { ...state, currentSongIndex: action.payload };
        case 'SET_VOLUME':
            return { ...state, volume: action.payload };
        default:
            return state;
    }
};

export default musicReducer;
