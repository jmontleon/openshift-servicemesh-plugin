// Polyfill TextEncoder/TextDecoder for jsdom environment
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill Fetch API globals for jsdom environment
if (typeof global.Request === 'undefined') {
  global.Request = class Request {
    constructor(public url: string, public init?: any) {}
  } as any;
}
if (typeof global.Response === 'undefined') {
  global.Response = class Response {
    constructor(public body?: any, public init?: any) {}
  } as any;
}
if (typeof global.Headers === 'undefined') {
  global.Headers = class Headers {
    constructor(public init?: any) {}
  } as any;
}
if (typeof global.fetch === 'undefined') {
  global.fetch = (() => Promise.resolve(new (global as any).Response())) as any;
}
