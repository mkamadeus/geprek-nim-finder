import React from 'react';
import Cross from '@/svg/cross.svg';

interface Props {
  name: string;
  onClose?: () => void;
}

const Chip = (props: Props) => {
  return (
    <div className="flex items-center rounded-full p-1 bg-teal-400 font-medium text-white text-sm border-blue-500 ">
      <div className="px-1 text-xs">{props.name}</div>
      <div className="w-4 h-4" onClick={props.onClose}>
        <img
          className="w-4 h-4 text-white"
          src={Cross}
          style={{
            filter:
              'invert(99%) sepia(10%) saturate(2%) hue-rotate(98deg) brightness(104%) contrast(101%)',
          }}
        />
      </div>
    </div>
  );
};

export default Chip;
