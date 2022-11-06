import { describe, it } from 'vitest';
import { getReq, postReq } from './fetch';

describe('fetch', () => {
  it('should return 200', async () => {
    const res = await getReq('/');
    expect(res).toEqual({ message: 'Hello world!' });
  });

  it('should return 200 with sent body', async () => {
    const res = await postReq('/', { message: 'Hello world!' });
    expect(res).toEqual({ body: { message: 'Hello world!' } });
  });
});
