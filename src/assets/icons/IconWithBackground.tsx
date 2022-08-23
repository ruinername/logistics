import React, { ReactNode } from 'react';

export const IconWithBackground: React.FC<{ children: ReactNode, size?: number, backgroundColor?: string; }> = ({ size = 48, backgroundColor, children}) => {
  return (
    <div style={{ height: size, width: size, backgroundColor }} className="icon-background">
      {children}
    </div>
  );
}