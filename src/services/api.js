import axios from 'axios';
import API_CONFIG from '../config/api.config';

// API base URL from environment variables
// Empty string uses relative paths, which are proxied by Vite dev server
const API_URL = import.meta.env.VITE_API_URL || '';

// Configure axios defaults
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

/**
 * Transform catalog data from backend format to frontend format
 * Backend format: { id, name }
 * Frontend format: { value, label, id }
 */
const transformCatalogData = (items) => {
  if (!items || !Array.isArray(items)) return [];
  return items.map(item => ({
    value: item.id.toString(), // HTML select values are strings
    label: item.name,
    id: item.id // Keep numeric ID for reference
  }));
};

/**
 * Fetch form data (catalog) from backend
 * @returns {Promise<Object>} Form data with all select options
 * @throws {Error} Error with message from backend or network error
 */
export const fetchFormData = async () => {
  try {
    const response = await apiClient.get(API_CONFIG.FORM_DATA_ENDPOINT);
    const catalogData = response.data.data;

    // Transform backend catalog data to frontend format
    const transformedData = {
      genders: transformCatalogData(catalogData.genders),
      occupations: transformCatalogData(catalogData.occupations),
      socioeconomicStrata: transformCatalogData(catalogData.stratums),
      programmingLevels: transformCatalogData(catalogData.knowledgeLevels),
      cities: transformCatalogData(catalogData.cities),
      dataTypes: transformCatalogData(catalogData.dataTypes),
      studySchedules: transformCatalogData(catalogData.classSchedules),
    };

    return transformedData;
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
 * @param {Object} formData - Form data to submit
 * @param {Object} catalogData - Catalog data with IDs for mapping
 * @returns {Promise} Response from the backend
 * @throws {Error} Error with message from backend or network error
 */
export const submitRegistration = async (formData, catalogData) => {
  try {
    // Find ID by value in catalog and return as number
    const findIdByValue = (catalog, value) => {
      if (!value || !catalog) return null;
      
      // Try to find by matching value (which is id.toString())
      const item = catalog.find(item => item.value === value || item.value === value.toString());
      
      // Return the numeric ID
      return item?.id ? Number(item.id) : null;
    };

    // Helper function to format date to YYYY-MM-DD
    const formatDate = (date) => {
      if (!date) return null;
      
      // If it's already a string in correct format, return it
      if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return date;
      }
      
      // Convert to Date object if needed
      const dateObj = date instanceof Date ? date : new Date(date);
      
      // Format to YYYY-MM-DD
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    };

    // Transform form data to backend expected format
    const payload = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber.startsWith('+57')
        ? formData.phoneNumber
        : `+57${formData.phoneNumber.replace(/^\+/, '')}`,
      email: formData.email,
      birthdate: formatDate(formData.birthdate),
      identityNumber: formData.documentNumber,
      genderId: findIdByValue(catalogData.genders, formData.gender),
      dataTypeId: findIdByValue(catalogData.dataTypes, formData.dataType) || 4, // Default to "Portal de Empleo" if not provided
      occupationId: findIdByValue(catalogData.occupations, formData.currentOccupation),
      cityId: findIdByValue(catalogData.cities, formData.residenceCity),
      knowledgeLevelId: findIdByValue(catalogData.programmingLevels, formData.programmingLevel),
      stratumId: findIdByValue(catalogData.socioeconomicStrata, formData.socioeconomicStratum),
      classScheduleId: findIdByValue(catalogData.studySchedules, formData.classSchedule),
    };

    console.log('Sending registration payload:', payload);
    const response = await apiClient.post(API_CONFIG.SUBMIT_FORM_ENDPOINT, payload);
    return response.data;
  } catch (error) {
    console.error('Error submitting registration:', error);
    console.error('Error response data:', error.response?.data);
    
    // Handle different error scenarios
    if (error.response) {
      // Server responded with error status
      const errorData = error.response.data;
      
      // Try to extract error message from different possible formats
      let errorMessage = 'Error al procesar la solicitud';
      
      if (errorData?.message) {
        errorMessage = errorData.message;
      } else if (errorData?.meta?.message) {
        errorMessage = errorData.meta.message;
      } else if (errorData?.errors) {
        // If there are validation errors, show them
        errorMessage = Object.values(errorData.errors).flat().join(', ');
      } else if (typeof errorData === 'string') {
        errorMessage = errorData;
      }
      
      console.error('Extracted error message:', errorMessage);
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
