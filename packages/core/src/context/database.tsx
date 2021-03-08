import React, {useCallback, useEffect, useState} from 'react';
import {DatabaseInstance} from '@guava/database';

export interface DatabaseContextValue {
  database: DatabaseInstance;
}

export interface DatabaseProviderProps {
  database: DatabaseInstance;
  children: React.ReactNode;
}

export const DatabaseContext = React.createContext({} as DatabaseContextValue);

export const DatabaseProvider = ({
  database,
  children,
}: DatabaseProviderProps) => {
  return (
    <DatabaseContext.Provider value={{database}}>
      {children}
    </DatabaseContext.Provider>
  );
};
