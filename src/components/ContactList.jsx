import React from 'react';
import ContactCard from './ContactCard';
import EmptyState from './EmptyState';
import { useContacts } from '../context/ContactContext';

const ContactList = () => {
  const { contacts, searchQuery } = useContacts();
  if(contacts.length === 0){
    return <EmptyState searchQuery={searchQuery} />;
  }
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        Showing {contacts.length} contact{contacts.length !== 1 ? 's' : ''}
        {searchQuery && ` for "${searchQuery}"`}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};
export default ContactList;