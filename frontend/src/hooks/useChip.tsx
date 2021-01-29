import { useState } from 'react';

interface Chip {
  name: string;
}

export const useChip = () => {
  const [chipArray, setChipArray] = useState<Chip[]>([]);

  const removeChip = (index: number) => {
    const tmpArr = chipArray.filter((_, i) => i !== index);
    setChipArray([...tmpArr]);
  };

  const addChip = (name: string) => {
    chipArray.push({ name });
    setChipArray([...chipArray]);
  };

  return { chipArray, addChip, removeChip };
};
