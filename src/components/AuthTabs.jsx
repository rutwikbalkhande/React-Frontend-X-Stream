import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Lock } from 'lucide-react';

export const AuthTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: 'User Login', path: '/login', icon: null },
    { label: 'Register', path: '/register', icon: null },
    { label: 'Admin', path: '/admin', icon: Lock },
  ];

  return (
    <div className="flex border-b">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        const Icon = tab.icon;

        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`flex-1 py-3 font-medium text-center transition-colors flex items-center justify-center gap-2 ${
              isActive
                ? 'border-b-2 border-cyan-600 text-cyan-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {Icon && <Icon size={18} />}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};