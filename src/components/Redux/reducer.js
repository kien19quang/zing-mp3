const currentState = {
    listSong: [],
    isPlaying: false,
    currentIndex: 0,
    times: {}
}

export const reducers = (state = currentState, action) => {
    switch (action.type) {
        case 'play':
            return {
                ...state,
                isPlaying: action.payload,
            };
        case 'pause':
            return {
                ...state,
                isPlaying: action.payload,
            };
        case 'times':
            return {
                ...state,
                times: action.payload,
            };
        case 'next':
            return {
                ...state,
                currentIndex: action.payload,
            };
        case 'prev':
            return {
                ...state,
                currentIndex: action.payload,
            };
        case 'listSong':
            const listSong = action.payload.map((song) => {
                return song.src_music;
            });
            return {
                ...state,
                songs: listSong,
            };
        default:
            return state;
    }
}