import React from 'react';
import { QRGenerator } from './components/QRGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50">
      <nav className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Arbox QR Generator"
              className="h-10 object-contain"
            />
            <div className="text-sm text-gray-600">מחולל QR מבית Arbox</div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto py-12">
        <QRGenerator />
      </main>
    </div>
  );
}

export default App;