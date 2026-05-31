import { TextEncoder, TextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  (global as any).TextDecoder = TextDecoder;
}

// Polyfill Request/Response/Headers for react-router-dom-v5-compat / @remix-run/router
if (typeof (global as any).Request === 'undefined') {
  (global as any).Request = class Request {
    url: string;
    method: string;
    headers: Record<string, string>;
    signal: any;
    constructor(url: string, init?: any) {
      this.url = url;
      this.method = init?.method || 'GET';
      this.headers = init?.headers || {};
      this.signal = init?.signal || null;
    }
  };
}
if (typeof (global as any).Response === 'undefined') {
  (global as any).Response = class Response {
    body: any;
    status: number;
    headers: Record<string, string>;
    constructor(body?: any, init?: any) {
      this.body = body;
      this.status = init?.status || 200;
      this.headers = init?.headers || {};
    }
  };
}
if (typeof (global as any).Headers === 'undefined') {
  (global as any).Headers = class Headers {
    private map: Record<string, string> = {};
    constructor(init?: Record<string, string>) {
      if (init) Object.assign(this.map, init);
    }
    get(name: string) { return this.map[name.toLowerCase()]; }
    set(name: string, value: string) { this.map[name.toLowerCase()] = value; }
  };
}
