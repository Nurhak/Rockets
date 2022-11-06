import { useQuery } from '@tanstack/react-query';
import { Launch } from '@/data/Launch';
import { Response } from '@/data/Response';
import { getReq } from '@/lib/fetch';

export const useLaunches = ({
  limit = 10,
  offset = 0,
  from = new Date().toISOString(),
  to = new Date().toISOString(),
  status,
  onSuccess,
  onError,
}: {
  limit?: number;
  offset?: number;
  from?: string;
  to?: string;
  status?: number;
  onSuccess?: (data: Response<Launch>) => void;
  onError?: (error: Error) => void;
}) => {
  return useQuery(
    ['launches', limit, offset, from, to, status],
    () =>
      getReq<Response<Launch>>('/launch', {
        limit,
        offset,
        status,
        window_start__gte: from,
        window_end__lte: to,
      }),
    {
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1,
      refetchOnWindowFocus: false,
      onSuccess,
      onError,
    }
  );
};
