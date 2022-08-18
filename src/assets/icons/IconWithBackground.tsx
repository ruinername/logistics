import React, { ReactNode } from 'react';

export const IconWithBackground: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div className="icon-background">
      {props.children}
    </div>
  );
}