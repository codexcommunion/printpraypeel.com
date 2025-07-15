import React from 'react';
import LiturgicalTheme from '@site/src/components/LiturgicalTheme';

export default function Root({children}) {
  return (
    <>
      {children}
      <LiturgicalTheme />
    </>
  );
}
