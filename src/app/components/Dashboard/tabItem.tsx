// components/Sidebar.js
import { ITabs } from '@/app/interface/dashboard';
import React from 'react';

interface Props {
  activeTab: ITabs;
  setActiveTab: (val: ITabs) => void;
  tab: ITabs;
}
const TabItem: React.FC<Props> = ({ activeTab, setActiveTab, tab }) => {
  return (
    <button type="button" onClick={() => {
      setActiveTab(tab);
    }} key={tab.id} className={`relative flex items-center border-b px-3 py-3 gap-2.5 ${activeTab.id === tab.id
      ? 'border-ryzeoBlue'
      : 'border-transparent'
      }`}>
      <span className={`${activeTab.id === tab.id
        ? 'tabIsActive'
        : ''
        } `}>{tab.svg}</span>
      <p
        className={`font-poppins font-medium capitalize text-sm  ${activeTab.id === tab.id
          ? 'text-ryzeoBlue'
          : 'text-textGrey'
          } `}
      >
        {tab.name}
      </p>
    </button>
  );
};
export default TabItem;
