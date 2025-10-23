import React from 'react';
import { Search, Plus } from 'lucide-react';
import { useContacts } from '../context/ContactContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery, openAddModal, totalContacts } = useContacts();
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm hover:border-gray-400"
          />
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-all font-medium shadow-md hover:shadow-lg whitespace-nowrap"
        >
          <Plus size={20} />
          Add Contact
        </button>
      </div>
      <div className="text-sm text-gray-500">
        Total Contacts: <span className="font-semibold text-gray-700">{totalContacts}</span>
      </div>
    </div>
  );
};
export default SearchBar;