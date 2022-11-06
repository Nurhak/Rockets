/* eslint-disable no-console */
import { describe, it, vi } from 'vitest';
import logger from './logger';

describe('logger', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    const now = new Date('2021-01-01T00:00:00.000Z');
    vi.setSystemTime(now);
    console.log = vi.fn();
    console.warn = vi.fn();
    console.error = vi.fn();
  });

  it('should log to console as info', () => {
    logger.info('test');
    expect(logger.count).toBe(1);
    expect(console.log).toHaveBeenCalledWith(
      '[2021-01-01T00:00:00.000Z] INFO:',
      ['test']
    );
  });

  it('should log to console as warn', () => {
    logger.warn('test');
    expect(logger.count).toBe(2);
    expect(console.warn).toHaveBeenCalledWith(
      '[2021-01-01T00:00:00.000Z] WARN:',
      ['test']
    );
  });

  it('should log to console as error', () => {
    logger.error('test');
    expect(logger.count).toBe(3);
    expect(console.error).toHaveBeenCalledWith(
      '[2021-01-01T00:00:00.000Z] ERROR:',
      ['test']
    );
  });

  it('should log to console as info with multiple arguments', () => {
    logger.info('test', 'test');
    expect(logger.count).toBe(4);
    expect(console.log).toHaveBeenCalledWith(
      '[2021-01-01T00:00:00.000Z] INFO:',
      ['test', 'test']
    );
  });

  afterEach(() => {
    vi.useRealTimers();
  });
});

describe('logger', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log');
    import.meta.env.MODE = 'production';
  });

  it('should not trigger console.log on production', () => {
    logger.info('test');
    expect(console.log).not.toHaveBeenCalled();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
