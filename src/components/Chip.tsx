import React, { useEffect, useState } from 'react';
import useSpring from 'react-use/lib/useSpring';
import Cross from '@/svg/cross.svg';

interface Props {
  name: string;
  onClose?: () => void;
}

const Chip: React.FC<Props> = (props: Props) => {
  const [target, setTarget] = useState<number>(0);
  const value = useSpring(target);

  useEffect(() => {
    setTarget(1);
  }, []);

  return (
    <div
      className={`flex items-center rounded-full p-1 bg-teal-400 font-medium text-white text-sm border-blue-500`}
      style={{ transform: `scale(${value}) rotate(${(1 - value) * -30}deg)` }}
    >
      <div className="px-1 text-xs select-none">{props.name}</div>
      <div className="w-4 h-4 cursor-pointer" onClick={props.onClose}>
        <img
          className="w-4 h-4 text-white"
          src={Cross}
          style={{
            filter:
              'invert(99%) sepia(10%) saturate(2%) hue-rotate(98deg) brightness(104%) contrast(101%)',
          }}
          alt="chip-close-button"
        />
      </div>
    </div>
  );
};

export default Chip;
