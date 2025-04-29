import axios from 'axios';

const API_BASE_URL = "https://dynamic-form-generator-9rl7.onrender.com"

export const createUser = async ( userData: { rollNumber: string; name: string; }) => {
    try {
        console.log(userData);
        const response = await axios.post(`${API_BASE_URL}/create-user`, userData, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getForm = async (rollNumber: string) => {
    try {
        console.log(rollNumber);
        const response = await axios.get(`${API_BASE_URL}/get-form`, {
            params: { rollNumber }
        });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching form:', error);
        throw error;
    }
};