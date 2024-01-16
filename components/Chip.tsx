import React from 'react';

interface ChipProps {
  label: string;
  onDelete: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
  return (
    <div className="border border-gray-300 rounded-full px-3 py-1 flex items-center bg-gray-100">
      <span className="mr-2">{label}</span>
      <button onClick={onDelete} className="text-red-500">
        x
      </button>
    </div>
  );
};

export default Chip;

