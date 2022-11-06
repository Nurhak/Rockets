/* eslint-disable no-console */
export enum LogType {
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
}

interface Log {
  message: unknown;
  timestamp: string;
}

class Logger {
  private logs: object[];

  private _logArraySizeLimit = 100;

  constructor() {
    this.logs = [];
  }

  get count(): number {
    return this.logs.length;
  }

  get logArraySizeLimit(): number {
    return this._logArraySizeLimit;
  }

  private log(...message: Array<unknown>): void;
  private log(type: LogType = LogType.INFO, ...message: Array<unknown>): void {
    const timestamp: string = new Date().toISOString();
    this.appendLog({ message, timestamp });
    switch (type) {
      case LogType.INFO:
        if (import.meta.env.MODE !== 'production') {
          console.log(`[${timestamp}] INFO:`, message);
        }
        break;
      case LogType.WARN:
        console.warn(`[${timestamp}] WARN:`, message);
        break;
      case LogType.ERROR:
        console.error(`[${timestamp}] ERROR:`, message);
        break;
      default:
        if (import.meta.env.MODE !== 'production') {
          console.log(`[${timestamp}] INFO:`, message);
        }
        break;
    }
  }

  error(...message: Array<unknown>): void {
    this.log(LogType.ERROR, ...message);
  }

  warn(...message: Array<unknown>): void {
    this.log(LogType.WARN, ...message);
  }

  info(...message: Array<unknown>): void {
    this.log(LogType.INFO, ...message);
  }

  private appendLog(log: Log): void {
    if (this.logs.length >= this._logArraySizeLimit) {
      this.logs.shift();
    }
    this.logs.push(log);
  }
}

const logger = new Logger();
Object.freeze(logger);
export default logger;
