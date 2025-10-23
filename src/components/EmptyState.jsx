import React from 'react';
import { User, Search } from 'lucide-react';

const EmptyState = ({ searchQuery }) => {
  return (
    <div className="text-center py-16 px-4">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
        {searchQuery ? (
          <Search size={40} className="text-gray-400" />
        ) : (
          <User size={40} className="text-gray-400" />
        )}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        {searchQuery ? 'No contacts found' : 'No contacts yet'}
      </h3>
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        {searchQuery
          ? `We couldn't find any contacts matching "${searchQuery}".`
          : 'Get started by adding your first contact to your contact list.'}
      </p>
      {searchQuery && (
        <button
          onClick={() => window.location.reload()}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Clear search
        </button>
      )}
    </div>
  );
};
export default EmptyState;