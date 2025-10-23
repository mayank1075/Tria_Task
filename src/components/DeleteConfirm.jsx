import React from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { useContacts } from '../context/ContactContext';

const DeleteConfirm = () => {
  const { deleteConfirmContact, setDeleteConfirmContact, deleteContact } = useContacts();
  if(!deleteConfirmContact) return null;
  const handleDelete = () => {
    deleteContact(deleteConfirmContact.id);
  };
  const handleCancel = () => {
    setDeleteConfirmContact(null);
  };
  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleDelete();
    }else if(e.key === 'Escape'){
      handleCancel();
    }
  };
  React.useEffect(() => {
    if(deleteConfirmContact){
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [deleteConfirmContact]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl animate-slide-up">
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>
        <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
          <AlertTriangle className="text-red-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Delete Contact
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Are you sure you want to delete this contact? This action cannot be undone.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
          <p className="text-sm text-gray-600 mb-1">Contact to be deleted:</p>
          <p className="font-semibold text-gray-900 text-lg">{deleteConfirmContact.name}</p>
          <p className="text-sm text-gray-600">{deleteConfirmContact.phone}</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 px-5 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="flex-1 px-5 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 transition-all font-semibold shadow-md hover:shadow-lg"
          >
            Delete Contact
          </button>
        </div>
        {/* <p className="text-xs text-gray-500 text-center mt-4">
          Press <kbd className="px-2 py-1 bg-gray-200 rounded">Enter</kbd> to confirm or <kbd className="px-2 py-1 bg-gray-200 rounded">Esc</kbd> to cancel
        </p> */}
      </div>
    </div>
  );
};
export default DeleteConfirm;