import { memo } from 'react';

function CustomDatePicker({
  value,
  onChange,
  label,
  ...props
}: {
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
  [key: string]: any;
}) {
  return (
    <div className="flex relative items-center justify-center gap-2">
      <label htmlFor="date" className="text-white text-lg min-w-max">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="date"
        value={value?.toISOString().split('T')[0]}
        onChange={(e) => {
          onChange?.(new Date(e.target.value));
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

CustomDatePicker.defaultProps = {
  label: 'Select date',
  value: undefined,
  onChange: undefined,
};

CustomDatePicker.displayName = 'DateRangePicker';

export default memo(CustomDatePicker);
