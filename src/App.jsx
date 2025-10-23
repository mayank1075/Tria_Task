import React from 'react';
import { ContactProvider } from './context/ContactContext';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import DeleteConfirm from './components/DeleteConfirm';
import './App.css';

function App() {
  return (
    <ContactProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contacts
            </h1>
            <p className="text-lg text-gray-600">
              Manage and search your contacts
            </p>
          </div>
          <SearchBar />
          <ContactList />
          <AddContact />
          <DeleteConfirm />
        </div>
      </div>
    </ContactProvider>
  );
}
export default App;
