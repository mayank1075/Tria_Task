export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const validateNumber = (number) => {
  const numberRegex = /^[\d\s\-\+\(\)]+$/;
  return numberRegex.test(number) && number.replace(/\D/g, '').length >= 10;
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validateContactForm = (formData) => {
  const errors = {};

  if(!formData.name || !validateName(formData.name)){
    errors.name = 'Please enter a valid name';
  }
  if(!formData.email){
    errors.email = 'Email is required';
  }else if(!validateEmail(formData.email)){
    errors.email = 'Please enter a valid email address';
  }
  if(!formData.phone){
    errors.phone = 'Phone number is required';
  }else if(!validateNumber(formData.phone)){
    errors.phone = 'Please enter a valid phone number';
  }
  return errors;
};