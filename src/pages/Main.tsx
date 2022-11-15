import { toast } from 'react-toastify';
import { useState } from 'react';
import GoogleMap from '@/components/Map/Map';
import withMainLayout from '@/layouts/withMainLayout';
import { useLaunches } from '@/hooks/useLaunches';
import logger from '@/lib/logger';
import { Launch } from '@/data/Launch';
import CustomMarker from '@/components/Map/CustomMarker';
import DatePicker from '@/components/DatePicker/CustomDatePicker';
import Select from '@/components/Select/Select';

const AmsterdamCoordinates = {
  lat: 52.370216,
  lng: 4.895168,
};

function Main() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(
    new Date(new Date().setMonth(new Date().getMonth() + 3))
  );
  const [status, setStatus] = useState<number | null>(null);
  const [statusOptions, setStatusOptions] = useState<
    Array<Pick<Launch, 'status'>>
  >([]);

  const { data: launches } = useLaunches({
    limit: 150,
    offset: 0,
    from: startDate.toISOString(),
    // After 3 months
    to: endDate.toISOString(),
    onError: (error) => {
      logger.error(error);
      toast.error('Failed to fetch launches');
    },
  });

  return (
    <div className="w-full h-full relative">
      <div className="w-full bg-gray-800 pb-6 flex gap-5 items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="status" className="text-white">
            Status:
          </label>
          <div className="w-40">
            <Select
              className="w-44"
              id="status"
              value={status ?? 0}
              onChange={(val: number) => {
                setStatus(val);
              }}
            >
              <option value={0}>All</option>
            </Select>
          </div>
        </div>
        <div className="flex gap-5">
          <DatePicker
            label="Start date"
            id="from-date"
            value={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
          />
          <DatePicker
            label="End date"
            id="end-date"
            value={endDate}
            onChange={(date) => {
              setEndDate(date);
            }}
          />
        </div>
      </div>
      <GoogleMap center={AmsterdamCoordinates} zoom={3}>
        {launches?.results.map((launch: Launch) => (
          <CustomMarker
            key={launch.id}
            lat={parseFloat(launch.pad.latitude)}
            long={parseFloat(launch.pad.longitude)}
          >
            <div className="flex flex-col gap-2">
              <div className="text-lg font-bold">{launch.name}</div>
              <div className="text-sm">
                {`${new Date(launch.net).toLocaleDateString()} ${new Date(
                  launch.net
                ).toLocaleTimeString()}`}
              </div>
              <div className="text-sm">{launch.pad.name}</div>
              <div className="text-sm">{launch.pad.location.name}</div>
              <div className="text-sm">
                {launch.launch_service_provider.name}
              </div>
            </div>
          </CustomMarker>
        ))}
      </GoogleMap>
    </div>
  );
}

Main.displayName = 'Launch Dashboard';

export default withMainLayout(Main);
