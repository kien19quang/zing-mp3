import axios from 'axios';

export const getHome = async () => {
    try {
        const response = await axios.get('http://localhost:8080');
        return response.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
