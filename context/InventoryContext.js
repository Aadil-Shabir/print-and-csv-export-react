import { createContext, useState, useMemo } from 'react';
import { inventory } from '../data/inventory';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [searchInventory, setSearchInventory] = useState('');

  const filteredInventory = useMemo(() => {
    if (!searchInventory) return inventory;

    return inventory.filter((item) => {
      return (
        item.description
          .toLowerCase()
          .includes(searchInventory.toLowerCase()) ||
        item.idNumber.toLowerCase().includes(searchInventory.toLowerCase())
      );
    });
  }, [searchInventory, inventory]);
  return (
    <InventoryContext.Provider
      value={{
        showFilter,
        setShowFilter,
        inventory,
        filteredInventory,
        searchInventory,
        setSearchInventory,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
