import { memo } from 'react';

function Footer() {
  return (
    <footer className="z-50 p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved.
      </span>
    </footer>
  );
}

export default memo(Footer);
