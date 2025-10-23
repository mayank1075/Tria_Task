import React from 'react';
import { Mail, Phone, MapPin, Edit2, Trash2 } from 'lucide-react';
import { getAvatarColor } from '../data/Contacts';
import { useContacts } from '../context/ContactContext';

const ContactCard = ({ contact }) => {
  const avatarColor = getAvatarColor(contact.id);
  const { openEditModal, setDeleteConfirmContact } = useContacts();
  const handleEdit = (e) => {
    e.stopPropagation();
    openEditModal(contact);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    setDeleteConfirmContact(contact);
  };
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group">
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handleEdit}
          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
          title="Edit contact"
        >
          <Edit2 size={16} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
          title="Delete contact"
        >
          <Trash2 size={16} />
        </button>
      </div>
      <div className="flex items-start gap-4">
        <div
          className={`${avatarColor} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md`}
        >
          {contact.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 truncate pr-16">
            {contact.name}
          </h3>
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-gray-600 text-sm group/item">
              <Mail size={16} className="text-gray-400 group-hover/item:text-blue-500 transition-colors flex-shrink-0" />
              <span className="truncate hover:text-blue-600 transition-colors">
                {contact.email}
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 text-sm group/item">
              <Phone size={16} className="text-gray-400 group-hover/item:text-green-500 transition-colors flex-shrink-0" />
              <span className="hover:text-green-600 transition-colors">
                {contact.phone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;