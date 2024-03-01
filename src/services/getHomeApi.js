import axios from 'axios';


export const getHome = async () => {
    try {
        const response = await axios.get('https://zingmp3-be-yu5c.vercel.app/');
        return response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
