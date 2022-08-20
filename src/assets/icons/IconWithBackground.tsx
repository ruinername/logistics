import React, { ReactNode } from 'react';

export const IconWithBackground: React.FC<{ children: ReactNode, size?: number }> = ({ size = 48, children}) => {
  return (
    <div style={{ height: size, width: size }} className="icon-background">
      {children}
    </div>
  );
}