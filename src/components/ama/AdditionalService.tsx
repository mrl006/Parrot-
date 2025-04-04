
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

interface AdditionalServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdditionalService: React.FC<AdditionalServiceProps> = ({ icon, title, description }) => {
  const { t } = useLanguage();
  
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-dark backdrop-blur-sm hover:bg-dark-lighter/50 transition-all group">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{t(title)}</h3>
      <p className="text-gray-400">{t(description)}</p>
    </div>
  );
};

export default AdditionalService;
