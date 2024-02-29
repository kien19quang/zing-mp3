export const setTimes = (currentTime, duration) => {
    console.log("Dispatching setTimes action with currentTime:", currentTime, "and duration:", duration);
    return {
        type: 'SET_TIMES',
        payload: { currentTime, duration }
    };
};

export const setSong = (data) => {
    console.log("Dispatching setSong action with data:", data);
    return {
        type: 'SET_SONG',
        payload: data
    };
};

export const setListSong = (data) => {
    console.log("Dispatching setListSong action with data:", data);
    return {
        type: 'SET_LIST_SONG',
        payload: data
    };
};

export const setSongInfo = (data) => {
    console.log("Dispatching setSongInfo action with data:", data);
    return {
        type: 'SET_SONG_INFO',
        payload: data
    };
};

export const playSong = (data) => {
    console.log("Dispatching playSong action with data:", data);
    return {
        type: 'PLAY_SONG',
        payload: data
    };
};

export const pauseSong = (data) => ({
    type: 'PAUSE_SONG',
    payload: data
});

export const nextSong = (index) => ({
    type: 'NEXT_SONG',
    payload: index
});

export const prevSong = (index) => ({
    type: 'PREV_SONG',
    payload: index
});

export const setVolume = (volume) => {
    console.log("Dispatching setSongInfo action with data:", volume);
    return {
        type: 'SET_VOLUME',
        payload: volume
    };
};