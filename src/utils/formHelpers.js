/**
 * Utility functions for form data transformation
 */

/**
 * Transform form data to match backend API expectations
 * @param {Object} formData - Raw form data from React Hook Form
 * @returns {Object} Transformed data ready for API submission
 */
export const transformFormData = (formData) => {
  return {
    ...formData,
    // Ensure date is in ISO format
    fechaNacimiento: formData.fechaNacimiento 
      ? new Date(formData.fechaNacimiento).toISOString().split('T')[0]
      : null,
    // Ensure boolean values
    politicaPrivacidad: Boolean(formData.politicaPrivacidad),
  };
};

/**
 * Validate if a string is a valid email
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};
