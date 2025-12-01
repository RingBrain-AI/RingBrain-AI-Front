import axios from 'axios';

// API base URL - defaults to Spring Boot standard port
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Configure axios defaults
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

/**
 * Submit registration form data to the backend
 * @param {Object} data - Form data to submit
 * @returns {Promise} Response from the backend
 * @throws {Error} Error with message from backend or network error
 */
export const submitRegistration = async (data) => {
  try {
    const response = await apiClient.post('/registrations', data);
    return response.data;
  } catch (error) {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || 'Error al procesar la solicitud';
      throw new Error(errorMessage);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No se pudo conectar con el servidor. Por favor verifica tu conexión.');
    } else {
      // Something else happened
      throw new Error('Error inesperado. Por favor intenta nuevamente.');
    }
  }
};

export default apiClient;