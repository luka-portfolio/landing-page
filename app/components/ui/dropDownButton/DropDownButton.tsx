'use client'
import { useState } from 'react';
import styles from './DropDownButton.module.scss';

type props = {
  name: string;
  categories?: string[];
};

export default function Dropdown({ name, categories }: props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="relative inline-block text-left">
        {/* Dropdown button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`
            inline-flex justify-center w-full
            rounded-md border border-gray-300
            px-4 py-2 bg-white text-sm
            font-medium text-black hover:bg-gray-50
            cursor-pointer
            ${styles.button}
          `}
        >
          {name}
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className={`
              origin-top-right absolute right-0 mt-2
              w-56 rounded-md
              ${styles.menu}
            `}
          >
            <div className="py-1">
              {categories?.map((category, index) => (
                <a
                  key={index}
                  href={`categories/${category}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
