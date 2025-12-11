import axios from 'axios';
import API_CONFIG from '../config/api.config';

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
 * Fetch form data (options for all selects) from backend
 * @returns {Promise<Object>} Form data with all select options
 * @throws {Error} Error with message from backend or network error
 */
export const fetchFormData = async () => {
  try {
    const response = await apiClient.get(API_CONFIG.FORM_DATA_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error fetching form data:', error);
    if (error.response) {
      const errorMessage = error.response.data?.message || 'Error al cargar los datos del formulario';
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error('No se pudo conectar con el servidor. Por favor verifica tu conexión.');
    } else {
      throw new Error('Error inesperado al cargar los datos del formulario.');
    }
  }
};

/**
 * Submit registration form data to the backend
 * @param {Object} data - Form data to submit
 * @returns {Promise} Response from the backend
 * @throws {Error} Error with message from backend or network error
 */
export const submitRegistration = async (data) => {
  try {
    const response = await apiClient.post(API_CONFIG.SUBMIT_FORM_ENDPOINT, data);
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