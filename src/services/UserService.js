import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const UserService = {
    getAllUsers: async () => {
        try {
            const response = await axios.get(`${API_URL}/users`);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    getDrivers: async () => {
        try {
            const response = await axios.get(`${API_URL}/users`);
            return response.data.data.filter(user => user.role === 'driver');
        } catch (error) {
            console.error('Error fetching drivers:', error);
            throw error;
        }
    },

    getMechanics: async () => {
        try {
            const response = await axios.get(`${API_URL}/users`);
            return response.data.data.filter(user => user.role === 'mechanic');
        } catch (error) {
            console.error('Error fetching mechanics:', error);
            throw error;
        }
    }
};

export default UserService;
