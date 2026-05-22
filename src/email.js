import emailjs from '@emailjs/browser';

/**
 * Sends a contact form using EmailJS
 * @param {HTMLFormElement} formElement - The HTML form element to send
 * @returns {Promise} - The EmailJS sendForm promise
 */
export const sendContactForm = (formElement) => {
  // Pre-configured templates - replace these with your actual dashboard credentials
  const serviceId = 'service_tjqf95d';
  const templateId = 'template_0230ooe';
  const publicKey = 'Ne9eD_3rnskFGdaux';

  return emailjs.sendForm(serviceId, templateId, formElement, publicKey);
};
