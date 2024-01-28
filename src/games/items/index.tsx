import { useState } from "react";

export default function useItems() {
  const [items, setItems] = useState<string[]>();

  function handleItem(item: string) {
    alert("item added" + item);
    if(items?.some((it) => it === item)){
        setItems([...item, item])
    }
  }

  return {
    handleItem,
    items,
  };
}
