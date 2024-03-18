'use client';

import { setCookie } from 'cookies-next';
import { useState } from 'react';

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4, 5], currentTab = 1 }: Props) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (selectedTab: number) => {
    setSelected(selectedTab);
    setCookie('currentTab', selectedTab.toString());
  };

  return (
    <div
      className="grid w-full space-x-2 rounded-xl bg-gray-200 p-2"
      style={{
        gridTemplateColumns: `repeat(${tabOptions.length}, 1fr)`,
      }}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === tab}
            onChange={() => {}}
            type="radio"
            id={tab.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="block cursor-pointer select-none rounded-xl p-2 text-center transition-all peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            Tab {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
