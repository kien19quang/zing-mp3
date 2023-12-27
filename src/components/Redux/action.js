export const times = (currentTime, duration) => {
    return {
        type: 'times',
        payload: { currentTime, duration },
    };
};

export const listSong = (data) => {
    return {
        type: 'listSong',
        payload: data,
    };
};

export const playSong = (data) => {
    return {
        type: 'play',
        payload: data,
    };
};
export const pauseSong = (data) => {
    return {
        type: 'pause',
        payload: data,
    };
};
export const nextSong = (index) => {
    return {
        type: 'next',
        payload: index
    };
};
export const prevSong = (index) => {
    return {
        type: 'prev',
        payload: index
    };

};
