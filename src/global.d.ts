export {};

declare global {
  interface Window {
    gtag: (...args: [string, string, Record<string, unknown>]) => void;
  }
}
