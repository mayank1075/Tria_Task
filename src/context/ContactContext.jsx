import React, { createContext, useContext, useState } from 'react';
import { Contacts, generateAvatar } from '../data/Contacts';

const ContactContext = createContext();

export const useContacts = () => {
  const context = useContext(ContactContext);
  if(!context){
    throw new Error('Some error with the context');
  }
  return context;
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(Contacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [deleteConfirmContact, setDeleteConfirmContact] = useState(null);
  const addContact = (newContact) => {
    const contact = {
      ...newContact,
      id: Date.now(),
      avatar: generateAvatar(newContact.name),
      createdAt: new Date()
    };
    setContacts(prev => [contact, ...prev]);
  };
  const updateContact = (id, updatedData) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === id
          ? {
              ...contact,
              ...updatedData,
              avatar: generateAvatar(updatedData.name)
            }
          : contact
      )
    );
  };
  const deleteContact = (id) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
    setDeleteConfirmContact(null);
  };
  const openEditModal = (contact) => {
    setEditingContact(contact);
    setIsEditMode(true);
    setIsModalOpen(true);
  };
  const openAddModal = () => {
    setEditingContact(null);
    setIsEditMode(false);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditingContact(null);
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.phone.includes(searchQuery)
  );
  const value = {
    contacts: filteredContacts,
    allContacts: contacts,
    searchQuery,
    setSearchQuery,
    addContact,
    deleteContact,
    updateContact,
    isModalOpen,
    setIsModalOpen,
    openAddModal,
    openEditModal,
    closeModal,
    isEditMode,
    editingContact,
    deleteConfirmContact,
    setDeleteConfirmContact,
    totalContacts: contacts.length,
    filteredCount: filteredContacts.length
  };
  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};