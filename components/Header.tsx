import React from 'react';
import { Menu, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-4 border-prezydent-red shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-4">
             {/* Abstract Eagle/Emblem Placeholder since we can't load external SVGs easily without URL. Using a styled circle. */}
            <div className="w-12 h-12 rounded-full bg-prezydent-red flex items-center justify-center text-white border-2 border-white shadow-sm ring-1 ring-gray-200">
               <span className="font-serif font-bold text-xl">RP</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold text-gray-900 leading-tight">
                Prezydent.pl
              </h1>
              <p className="text-xs text-prezydent-red uppercase tracking-widest font-bold">
                Inicjatywy Ustawodawcze
              </p>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-prezydent-red px-3 py-2 rounded-md text-sm font-medium transition-colors">Aktualności</a>
            <a href="#" className="text-prezydent-red border-b-2 border-prezydent-red px-3 py-2 rounded-md text-sm font-bold">Zamrażarka Legislacyjna</a>
            <a href="#" className="text-gray-900 hover:text-prezydent-red px-3 py-2 rounded-md text-sm font-medium transition-colors">Wydarzenia</a>
            <a href="#" className="text-gray-900 hover:text-prezydent-red px-3 py-2 rounded-md text-sm font-medium transition-colors">Kontakt</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
             <button className="p-2 text-gray-600 hover:text-prezydent-red transition-colors">
               <Search className="w-6 h-6" />
             </button>
             <button className="md:hidden p-2 text-gray-600 hover:text-prezydent-red">
               <Menu className="w-6 h-6" />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;