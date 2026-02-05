import React from 'react';

export const HeaderBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="header-background absolute inset-0 rounded-[28px] overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(180deg, 
              rgba(17, 24, 39, 0.95) 0%, 
              rgba(17, 24, 39, 0.98) 100%
            ),
            url('/images/header-bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950/80 backdrop-blur-[2px]" />
    </div>
  );
}; 