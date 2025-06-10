import axios from 'axios';

const API_URL = 'http://localhost:3006/api';

const PaymentService = {
    getAllPayments: async () => {
        try {
            const response = await axios.get(`${API_URL}/payments/bills`);
            return response.data;
        } catch (error) {
            console.error('Error fetching payments:', error);
            throw error;
        }
    }
};

export default PaymentService;
