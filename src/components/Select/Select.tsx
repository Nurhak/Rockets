import { memo } from 'react';

function Select<T extends number>({
  children,
  onChange,
  value,
  ...props
}: {
  children: React.ReactNode;
  onChange: (value: T) => void;
  value: T;
  [key: string]: any;
}) {
  return (
    <select
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className="w-full min-w-max bg-gray-800 text-white rounded-md border border-gray-700 py-2 px-3"
      onChange={(e) => onChange(e.target.value as unknown as T)}
      value={value}
    >
      {children}
    </select>
  );
}

export default memo(Select);
