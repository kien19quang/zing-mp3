import axios from 'axios';

const getSong = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/song/getSong?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const getSongInfo = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/song/getSongInfo?id=${id}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const searchSong = async (q) => {
    try {
        const response = await axios.get(`http://localhost:8080/song/searchSong?query=${q}`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};





export { getSong, getSongInfo, searchSong };
