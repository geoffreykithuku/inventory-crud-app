import { createContext, useState } from "react";
import items from "../data/items.json";
import categories from "../data/categories.json";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState(items);
  const [category, setCategory] = useState(categories);

    const resetProducts = () => {
        setCategory(categories);
         setProducts(items);
    }

  return (
    <InventoryContext.Provider
      value={{ resetProducts, category, setCategory, products, setProducts }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
