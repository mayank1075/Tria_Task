import React, { useState, useEffect } from 'react';
import { X, User, Mail, Phone, MapPin } from 'lucide-react';
import { useContacts } from '../context/ContactContext';
import { validateContactForm } from '../utils/validation';

const AddContact = () => {
  const { 
    isModalOpen, 
    closeModal, 
    addContact, 
    updateContact, 
    isEditMode, 
    editingContact 
  } = useContacts();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    if(isEditMode && editingContact){
      setFormData({
        name: editingContact.name,
        email: editingContact.email,
        phone: editingContact.phone,
      });
    }else{
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    }
    setErrors({});
    setTouched({});
  }, [isEditMode, editingContact, isModalOpen]);

  if (!isModalOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if(errors[name]){
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };
  const handleSubmit = () => {
    const validationErrors = validateContactForm(formData);
    if(Object.keys(validationErrors).length === 0){
      if(isEditMode && editingContact){
        updateContact(editingContact.id, formData);
      }else{
        addContact(formData);
      }
      handleClose();
    }else{
      setErrors(validationErrors);
      setTouched({ name: true, email: true, phone: true });
    }
  };
  const handleClose = () => {
    closeModal();
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
    setTouched({});
  };
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit();
    }else if(e.key === 'Escape'){
      handleClose();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {isEditMode ? 'Edit Contact' : 'Add New Contact'}
        </h2>
        <p className="text-gray-600 mb-6">
          {isEditMode 
            ? 'Update the contact details below' 
            : 'Fill in the details below to add a new contact'}
        </p>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={() => handleBlur('name')}
                onKeyPress={handleKeyPress}
                placeholder="John Doe"
                className={`w-full pl-10 pr-4 py-3 border ${
                  touched.name && errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              />
            </div>
            {touched.name && errors.name && (
              <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur('email')}
                onKeyPress={handleKeyPress}
                placeholder="john.doe@example.com"
                className={`w-full pl-10 pr-4 py-3 border ${
                  touched.email && errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              />
            </div>
            {touched.email && errors.email && (
              <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                onKeyPress={handleKeyPress}
                placeholder="+91 1234567890"
                className={`w-full pl-10 pr-4 py-3 border ${
                  touched.phone && errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
              />
            </div>
            {touched.phone && errors.phone && (
              <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>
            )}
          </div>
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-5 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              {isEditMode ? 'Update Contact' : 'Add Contact'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddContact;