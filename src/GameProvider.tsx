import React, { createContext, useContext, useState, ReactNode } from "react";

interface GameContextProps {
  items: string[];
  addItem: (item: string) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useItem = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useAuth must be used within an GameProvider");
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    if (items.some((it) => it === item)) {
    } else {
      setItems([...items, item]);
    }
  };

  const contextValue: GameContextProps = {
    items,
    addItem,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
