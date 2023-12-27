import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { times } from '~/components/Redux/action';
import { listSong, currentIndex, isPlaying } from '~/components/Redux/selector';

function Audio({ audioRef }) {
    const dispatch = useDispatch();
    const songPlay = useSelector(listSong)
    const index = useSelector(currentIndex);
    const handleTime = (event) => {
        dispatch(times(event.target.currentTime, event.target.duration))
    }

    const handleCanPlay = () => {
        if (isPlaying) {
            audioRef && audioRef.current.play();
        }
    }

    return (
        <audio
            ref={audioRef}
            src={songPlay[index]}
            onTimeUpdate={(e) => { handleTime(e) }}
            onCanPlay={handleCanPlay}
        />
    );
}

export default Audio;