
import React from 'react';
import { Option } from '../types';

interface OptionsSelectorProps {
  options: Option[];
  onSelect: (payload: string) => void;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({ options, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-start">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option.payload)}
          className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 border border-blue-300 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 dark:bg-blue-900/50 dark:text-blue-200 dark:border-blue-700 dark:hover:bg-blue-900/80"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default OptionsSelector;
