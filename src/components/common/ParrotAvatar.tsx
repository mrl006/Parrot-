
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ParrotAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ParrotAvatar: React.FC<ParrotAvatarProps> = ({ size = 'md', className = '' }) => {
  // Determine size class
  const sizeClass = {
    'sm': 'h-8 w-8',
    'md': 'h-10 w-10',
    'lg': 'h-12 w-12',
    'xl': 'h-16 w-16',
  }[size];

  return (
    <Avatar className={`${sizeClass} ${className}`}>
      <AvatarImage src="/lovable-uploads/80e50601-d380-4ef8-927b-eefe93e6458f.png" alt="ParrotBamboo" />
      <AvatarFallback className="bg-dark-lighter text-neon-yellow font-bold">PB</AvatarFallback>
    </Avatar>
  );
};

export default ParrotAvatar;
