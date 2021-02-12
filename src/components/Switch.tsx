import React, { useState } from 'react';

interface Props {
  initialState?: boolean;
  onSwitchOn?: () => void;
  onSwitchOff?: () => void;
}

const Switch = (props: Props) => {
  const [active, setActive] = useState<boolean>(props.initialState || false);

  return (
    <div
      className={`w-10 h-18 p-1 flex items-center ${
        active ? 'bg-teal-300' : 'bg-gray-200'
      } rounded-full`}
      onClick={() => {
        if (!active) {
          props.onSwitchOn!();
        } else {
          props.onSwitchOff!();
        }
        setActive(!active);
      }}
    >
      <div
        className={`transform ${
          active ? 'translate-x-4' : ''
        } bg-white shadow-md w-4 h-4 rounded-full duration-150 ease-in-out`}
      ></div>
    </div>
  );
};

export default Switch;
