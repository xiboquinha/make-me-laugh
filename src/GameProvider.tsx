import React, { createContext, useContext, useState, ReactNode } from "react";

interface GameContextProps {
  items: string[];
  happiness: number;
  handleHappiness: (item: number) => void;
  addItem: (points: string, clean?: boolean) => void;
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
  const [happiness, setHappiness] = useState(0);

  const addItem = (item: string, clear?: boolean) => {
    if (items.some((it) => it === item)) {
    } else {
      setItems([...items, item]);
    }

    if (clear) {
      setItems([]);
    }
  };

  function handleHappiness(point: number) {
    setHappiness(point);
  }

  const contextValue: GameContextProps = {
    items,
    addItem,
    handleHappiness,
    happiness,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
