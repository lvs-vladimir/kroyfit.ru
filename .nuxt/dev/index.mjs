import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, createError, sendRedirect, proxyRequest, getRequestHeader, setResponseHeaders, setResponseStatus, send, getRequestHeaders, setResponseHeader, appendResponseHeader, getRequestURL, getResponseHeader, removeResponseHeader, getQuery as getQuery$1, readBody, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, getResponseStatus, getRouterParam, setHeader, getResponseStatusText } from 'file:///root/kroyfit/node_modules/h3/dist/index.mjs';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { parentPort, threadId } from 'node:worker_threads';
import { escapeHtml } from 'file:///root/kroyfit/node_modules/@vue/shared/dist/shared.cjs.js';
import { sql, eq, desc, count } from 'file:///root/kroyfit/node_modules/drizzle-orm/index.js';
import nodemailer from 'file:///root/kroyfit/node_modules/nodemailer/lib/nodemailer.js';
import { promises, readFileSync, writeFileSync } from 'node:fs';
import { drizzle } from 'file:///root/kroyfit/node_modules/drizzle-orm/better-sqlite3/index.js';
import Database from 'file:///root/kroyfit/node_modules/better-sqlite3/lib/index.js';
import { sqliteTable, text, integer } from 'file:///root/kroyfit/node_modules/drizzle-orm/sqlite-core/index.js';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file:///root/kroyfit/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withTrailingSlash, decodePath, withLeadingSlash, withoutTrailingSlash, joinRelativeURL } from 'file:///root/kroyfit/node_modules/ufo/dist/index.mjs';
import destr, { destr as destr$1 } from 'file:///root/kroyfit/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///root/kroyfit/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file:///root/kroyfit/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file:///root/kroyfit/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///root/kroyfit/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///root/kroyfit/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file:///root/kroyfit/node_modules/ohash/dist/index.mjs';
import { klona } from 'file:///root/kroyfit/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///root/kroyfit/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///root/kroyfit/node_modules/scule/dist/index.mjs';
import { getContext } from 'file:///root/kroyfit/node_modules/unctx/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file:///root/kroyfit/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file:///root/kroyfit/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file:///root/kroyfit/node_modules/youch-core/build/index.js';
import { Youch } from 'file:///root/kroyfit/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file:///root/kroyfit/node_modules/source-map/source-map.js';
import { AsyncLocalStorage } from 'node:async_hooks';
import { stringify, uneval } from 'file:///root/kroyfit/node_modules/devalue/index.js';
import { captureRawStackTrace, parseRawStackTrace } from 'file:///root/kroyfit/node_modules/errx/dist/index.js';
import { isVNode, isRef, toValue } from 'file:///root/kroyfit/node_modules/vue/index.mjs';
import _wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw from 'file:///root/kroyfit/node_modules/@nuxt/vite-builder/dist/fix-stacktrace.mjs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file:///root/kroyfit/node_modules/pathe/dist/index.mjs';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file:///root/kroyfit/node_modules/unhead/dist/server.mjs';
import { renderToString } from 'file:///root/kroyfit/node_modules/vue/server-renderer/index.mjs';
import { walkResolver } from 'file:///root/kroyfit/node_modules/unhead/dist/utils.mjs';

const serverAssets = [{"baseName":"server","dir":"/root/kroyfit/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/root/kroyfit","watchOptions":{"ignored":[null]}}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/root/kroyfit/server","watchOptions":{"ignored":[null]}}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/root/kroyfit/.nuxt"}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/root/kroyfit/.nuxt/cache"}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/root/kroyfit/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function isPathInScope(pathname, base) {
  let canonical;
  try {
    const pre = pathname.replace(/%2f/gi, "/").replace(/%5c/gi, "\\");
    canonical = new URL(pre, "http://_").pathname;
  } catch {
    return false;
  }
  return !base || canonical === base || canonical.startsWith(base + "/");
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          if (!isPathInScope(event.path.split("?")[0], strpBase)) {
            throw createError({ statusCode: 400 });
          }
          targetPath = withoutBase(targetPath, strpBase);
        } else if (targetPath.startsWith("//")) {
          targetPath = targetPath.replace(/^\/+/, "/");
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	// If the client specifically requests HTML, then avoid classifying as JSON.
	if (hasReqHeader(event, "accept", "text/html")) {
		return false;
	}
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

const iframeStorageBridge = (nonce) => `
(function () {
  const NONCE = ${JSON.stringify(nonce)};
  const memoryStore = Object.create(null);

  const post = (type, payload) => {
    window.parent.postMessage({ type, nonce: NONCE, ...payload }, '*');
  };

  const isValid = (data) => data && data.nonce === NONCE;

  const mockStorage = {
    getItem(key) {
      return Object.hasOwn(memoryStore, key)
        ? memoryStore[key]
        : null;
    },
    setItem(key, value) {
      const v = String(value);
      memoryStore[key] = v;
      post('storage-set', { key, value: v });
    },
    removeItem(key) {
      delete memoryStore[key];
      post('storage-remove', { key });
    },
    clear() {
      for (const key of Object.keys(memoryStore))
        delete memoryStore[key];
      post('storage-clear', {});
    },
    key(index) {
      const keys = Object.keys(memoryStore);
      return keys[index] ?? null;
    },
    get length() {
      return Object.keys(memoryStore).length;
    }
  };

  const defineLocalStorage = () => {
    try {
      Object.defineProperty(window, 'localStorage', {
        value: mockStorage,
        writable: false,
        configurable: true
      });
    } catch {
      window.localStorage = mockStorage;
    }
  };

  defineLocalStorage();

  window.addEventListener('message', (event) => {
    const data = event.data;
    if (!isValid(data) || data.type !== 'storage-sync-data') return;

    const incoming = data.data || {};
    for (const key of Object.keys(incoming))
      memoryStore[key] = incoming[key];

    if (typeof window.initTheme === 'function')
      window.initTheme();
    window.dispatchEvent(new Event('storage-ready'));
  });

  // Clipboard API is unavailable in data: URL iframe, so we use postMessage
  document.addEventListener('DOMContentLoaded', function() {
    window.copyErrorMessage = function(button) {
      post('clipboard-copy', { text: button.dataset.errorText });
      button.classList.add('copied');
      setTimeout(function() { button.classList.remove('copied'); }, 2000);
    };
  });

  post('storage-sync-request', {});
})();
`;
const parentStorageBridge = (nonce) => `
(function () {
  const host = document.querySelector('nuxt-error-overlay');
  if (!host) return;

  const NONCE = ${JSON.stringify(nonce)};
  const isValid = (data) => data && data.nonce === NONCE;

  // Handle clipboard copy from iframe
  window.addEventListener('message', function(e) {
    if (isValid(e) && e.data.type === 'clipboard-copy') {
      navigator.clipboard.writeText(e.data.text).catch(function() {});
    }
  });

  const collectLocalStorage = () => {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k != null) all[k] = localStorage.getItem(k);
    }
    return all;
  };

  const attachWhenReady = () => {
    const root = host.shadowRoot;
    if (!root)
      return false;
    const iframe = root.getElementById('frame');
    if (!iframe || !iframe.contentWindow)
      return false;

    const handlers = {
      'storage-set': (d) => localStorage.setItem(d.key, d.value),
      'storage-remove': (d) => localStorage.removeItem(d.key),
      'storage-clear': () => localStorage.clear(),
      'storage-sync-request': () => {
        iframe.contentWindow.postMessage({
          type: 'storage-sync-data',
          data: collectLocalStorage(),
          nonce: NONCE
        }, '*');
      }
    };

    window.addEventListener('message', (event) => {
      const data = event.data;
      if (!isValid(data)) return;
      const fn = handlers[data.type];
      if (fn) fn(data);
    });

    return true;
  };

  if (attachWhenReady())
    return;

  const obs = new MutationObserver(() => {
    if (attachWhenReady())
      obs.disconnect();
  });

  obs.observe(host, { childList: true, subtree: true });
})();
`;
const errorCSS = `
:host {
  --preview-width: 240px;
  --preview-height: 180px;
  --base-width: 1200px;
  --base-height: 900px;
  --z-base: 999999998;
  --error-pip-left: auto;
  --error-pip-top: auto;
  --error-pip-right: 5px;
  --error-pip-bottom: 5px;
  --error-pip-origin: bottom right;
  --app-preview-left: auto;
  --app-preview-top: auto;
  --app-preview-right: 5px;
  --app-preview-bottom: 5px;
  all: initial;
  display: contents;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
#frame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  border: none;
  z-index: var(--z-base);
}
#frame[inert] {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: var(--error-pip-right);
  bottom: var(--error-pip-bottom);
  width: var(--base-width);
  height: var(--base-height);
  transform: scale(calc(240 / 1200));
  transform-origin: var(--error-pip-origin);
  overflow: hidden;
  border-radius: calc(1200 * 8px / 240);
}
#preview {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: var(--app-preview-right);
  bottom: var(--app-preview-bottom);
  width: var(--preview-width);
  height: var(--preview-height);
  overflow: hidden;
  border-radius: 6px;
  pointer-events: none;
  z-index: var(--z-base);
  background: white;
  display: none;
}
#preview iframe {
  transform-origin: var(--error-pip-origin);
}
#frame:not([inert]) + #preview {
  display: block;
}
#toggle {
  position: fixed;
  left: var(--app-preview-left);
  top: var(--app-preview-top);
  right: calc(var(--app-preview-right) - 3px);
  bottom: calc(var(--app-preview-bottom) - 3px);
  width: var(--preview-width);
  height: var(--preview-height);
  background: none;
  border: 3px solid #00DC82;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s, box-shadow 0.2s;
  z-index: calc(var(--z-base) + 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
#toggle:hover,
#toggle:focus {
  opacity: 1;
  box-shadow: 0 0 20px rgba(0, 220, 130, 0.6);
}
#toggle:focus-visible {
  outline: 3px solid #00DC82;
  outline-offset: 0;
  box-shadow: 0 0 24px rgba(0, 220, 130, 0.8);
}
#frame[inert] ~ #toggle {
  left: var(--error-pip-left);
  top: var(--error-pip-top);
  right: calc(var(--error-pip-right) - 3px);
  bottom: calc(var(--error-pip-bottom) - 3px);
  cursor: grab;
}
:host(.dragging) #frame[inert] ~ #toggle {
  cursor: grabbing;
}
#frame:not([inert]) ~ #toggle,
#frame:not([inert]) + #preview {
  cursor: grab;
}
:host(.dragging-preview) #frame:not([inert]) ~ #toggle,
:host(.dragging-preview) #frame:not([inert]) + #preview {
  cursor: grabbing;
}

#pip-close {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
}
#pip-close:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}

#pip-restore {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 8px 14px;
  border-radius: 999px;
  border: 2px solid #00DC82;
  background: #111;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  z-index: calc(var(--z-base) + 2);
  cursor: grab;
}
#pip-restore:focus-visible {
  outline: 2px solid #00DC82;
  outline-offset: 2px;
}
:host(.dragging-restore) #pip-restore {
  cursor: grabbing;
}

#frame[hidden],
#toggle[hidden],
#preview[hidden],
#pip-restore[hidden],
#pip-close[hidden] {
  display: none !important;
}

@media (prefers-reduced-motion: reduce) {
  #toggle {
    transition: none;
  }
}
`;
function webComponentScript(base64HTML, startMinimized) {
	return `
(function () {
  try {
    // =========================
    // Host + Shadow
    // =========================
    const host = document.querySelector('nuxt-error-overlay');
    if (!host)
      return;
    const shadow = host.attachShadow({ mode: 'open' });

    // =========================
    // DOM helpers
    // =========================
    const el = (tag) => document.createElement(tag);
    const on = (node, type, fn, opts) => node.addEventListener(type, fn, opts);
    const hide = (node, v) => node.toggleAttribute('hidden', !!v);
    const setVar = (name, value) => host.style.setProperty(name, value);
    const unsetVar = (name) => host.style.removeProperty(name);

    // =========================
    // Create DOM
    // =========================
    const style = el('style');
    style.textContent = ${JSON.stringify(errorCSS)};

    const iframe = el('iframe');
    iframe.id = 'frame';
    iframe.src = 'data:text/html;base64,${base64HTML}';
    iframe.title = 'Detailed error stack trace';
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-top-navigation-by-user-activation');

    const preview = el('div');
    preview.id = 'preview';

    const toggle = el('div');
    toggle.id = 'toggle';
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.innerHTML = '<span class="sr-only">Toggle detailed error view</span>';

    const liveRegion = el('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';

    const pipCloseButton = el('button');
    pipCloseButton.id = 'pip-close';
    pipCloseButton.setAttribute('type', 'button');
    pipCloseButton.setAttribute('aria-label', 'Hide error preview overlay');
    pipCloseButton.innerHTML = '&times;';
    pipCloseButton.hidden = true;
    toggle.appendChild(pipCloseButton);

    const pipRestoreButton = el('button');
    pipRestoreButton.id = 'pip-restore';
    pipRestoreButton.setAttribute('type', 'button');
    pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
    pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
    pipRestoreButton.hidden = true;

    // Order matters: #frame + #preview adjacency
    shadow.appendChild(style);
    shadow.appendChild(liveRegion);
    shadow.appendChild(iframe);
    shadow.appendChild(preview);
    shadow.appendChild(toggle);
    shadow.appendChild(pipRestoreButton);

    // =========================
    // Constants / keys
    // =========================
    const POS_KEYS = {
      position: 'nuxt-error-overlay:position',
      hiddenPretty: 'nuxt-error-overlay:error-pip:hidden',
      hiddenPreview: 'nuxt-error-overlay:app-preview:hidden'
    };

    const CSS_VARS = {
      pip: {
        left: '--error-pip-left',
        top: '--error-pip-top',
        right: '--error-pip-right',
        bottom: '--error-pip-bottom'
      },
      preview: {
        left: '--app-preview-left',
        top: '--app-preview-top',
        right: '--app-preview-right',
        bottom: '--app-preview-bottom'
      }
    };

    const MIN_GAP = 5;
    const DRAG_THRESHOLD = 2;

    // =========================
    // Local storage safe access + state
    // =========================
    let storageReady = true;
    let isPrettyHidden = false;
    let isPreviewHidden = false;

    const safeGet = (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    };

    const safeSet = (k, v) => {
      if (!storageReady) 
        return;
      try {
        localStorage.setItem(k, v);
      } catch {}
    };

    // =========================
    // Sizing helpers
    // =========================
    const vvSize = () => {
      const v = window.visualViewport;
      return v ? { w: v.width, h: v.height } : { w: window.innerWidth, h: window.innerHeight };
    };

    const previewSize = () => {
      const styles = getComputedStyle(host);
      const w = parseFloat(styles.getPropertyValue('--preview-width')) || 240;
      const h = parseFloat(styles.getPropertyValue('--preview-height')) || 180;
      return { w, h };
    };

    const sizeForTarget = (target) => {
      if (!target)
        return previewSize();
      const rect = target.getBoundingClientRect();
      if (rect.width && rect.height)
        return { w: rect.width, h: rect.height };
      return previewSize();
    };

    // =========================
    // Dock model + offset/alignment calculations
    // =========================
    const dock = { edge: null, offset: null, align: null, gap: null };

    const maxOffsetFor = (edge, size) => {
      const vv = vvSize();
      if (edge === 'left' || edge === 'right')
        return Math.max(MIN_GAP, vv.h - size.h - MIN_GAP);
      return Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
    };

    const clampOffset = (edge, value, size) => {
      const max = maxOffsetFor(edge, size);
      return Math.min(Math.max(value, MIN_GAP), max);
    };

    const updateDockAlignment = (size) => {
      if (!dock.edge || dock.offset == null)
        return;
      const max = maxOffsetFor(dock.edge, size);
      if (dock.offset <= max / 2) {
        dock.align = 'start';
        dock.gap = dock.offset;
      } else {
        dock.align = 'end';
        dock.gap = Math.max(0, max - dock.offset);
      }
    };

    const appliedOffsetFor = (size) => {
      if (!dock.edge || dock.offset == null)
        return null;
      const max = maxOffsetFor(dock.edge, size);

      if (dock.align === 'end' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, max - dock.gap, size);
      }
      if (dock.align === 'start' && typeof dock.gap === 'number') {
        return clampOffset(dock.edge, dock.gap, size);
      }
      return clampOffset(dock.edge, dock.offset, size);
    };

    const nearestEdgeAt = (x, y) => {
      const { w, h } = vvSize();
      const d = { left: x, right: w - x, top: y, bottom: h - y };
      return Object.keys(d).reduce((a, b) => (d[a] < d[b] ? a : b));
    };

    const cornerDefaultDock = () => {
      const vv = vvSize();
      const size = previewSize();
      const offset = Math.max(MIN_GAP, vv.w - size.w - MIN_GAP);
      return { edge: 'bottom', offset };
    };

    const currentTransformOrigin = () => {
      if (!dock.edge) return null;
      if (dock.edge === 'left' || dock.edge === 'top')
        return 'top left';
      if (dock.edge === 'right')
        return 'top right';
      return 'bottom left';
    };

    // =========================
    // Persist / load dock
    // =========================
    const loadDock = () => {
      const raw = safeGet(POS_KEYS.position);
      if (!raw)
        return;
      try {
        const parsed = JSON.parse(raw);
        const { edge, offset, align, gap } = parsed || {};
        if (!['left', 'right', 'top', 'bottom'].includes(edge))
          return;
        if (typeof offset !== 'number')
          return;

        dock.edge = edge;
        dock.offset = clampOffset(edge, offset, previewSize());
        dock.align = align === 'start' || align === 'end' ? align : null;
        dock.gap = typeof gap === 'number' ? gap : null;

        if (!dock.align || dock.gap == null)
          updateDockAlignment(previewSize());
      } catch {}
    };

    const persistDock = () => {
      if (!dock.edge || dock.offset == null)
        return; 
      safeSet(POS_KEYS.position, JSON.stringify({
        edge: dock.edge,
        offset: dock.offset,
        align: dock.align,
        gap: dock.gap
      }));
    };

    // =========================
    // Apply dock
    // =========================
    const dockToVars = (vars) => ({
      set: (side, v) => host.style.setProperty(vars[side], v),
      clear: (side) => host.style.removeProperty(vars[side])
    });

    const dockToEl = (node) => ({
      set: (side, v) => { node.style[side] = v; },
      clear: (side) => { node.style[side] = ''; }
    });

    const applyDock = (target, size, opts) => {
      if (!dock.edge || dock.offset == null) {
        target.clear('left');
        target.clear('top');
        target.clear('right');
        target.clear('bottom');
        return;
      }

      target.set('left', 'auto');
      target.set('top', 'auto');
      target.set('right', 'auto');
      target.set('bottom', 'auto');

      const applied = appliedOffsetFor(size);

      if (dock.edge === 'left') {
        target.set('left', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'right') {
        target.set('right', MIN_GAP + 'px');
        target.set('top', applied + 'px');
      } else if (dock.edge === 'top') {
        target.set('top', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      } else {
        target.set('bottom', MIN_GAP + 'px');
        target.set('left', applied + 'px');
      }

      if (!opts || opts.persist !== false)
        persistDock();
    };

    const applyDockAll = (opts) => {
      applyDock(dockToVars(CSS_VARS.pip), previewSize(), opts);
      applyDock(dockToVars(CSS_VARS.preview), previewSize(), opts);
      applyDock(dockToEl(pipRestoreButton), sizeForTarget(pipRestoreButton), opts);
    };

    const repaintToDock = () => {
      if (!dock.edge || dock.offset == null)
        return;
      const origin = currentTransformOrigin();
      if (origin)
        setVar('--error-pip-origin', origin);
      else 
        unsetVar('--error-pip-origin');
      applyDockAll({ persist: false });
    };

    // =========================
    // Hidden state + UI
    // =========================
    const loadHidden = () => {
      const rawPretty = safeGet(POS_KEYS.hiddenPretty);
      if (rawPretty != null)
        isPrettyHidden = rawPretty === '1' || rawPretty === 'true';
      const rawPreview = safeGet(POS_KEYS.hiddenPreview);
      if (rawPreview != null)
        isPreviewHidden = rawPreview === '1' || rawPreview === 'true';
    };

    const setPrettyHidden = (v) => {
      isPrettyHidden = !!v;
      safeSet(POS_KEYS.hiddenPretty, isPrettyHidden ? '1' : '0');
      updateUI();
    };

    const setPreviewHidden = (v) => {
      isPreviewHidden = !!v;
      safeSet(POS_KEYS.hiddenPreview, isPreviewHidden ? '1' : '0');
      updateUI();
    };

    const isMinimized = () => iframe.hasAttribute('inert');

    const setMinimized = (v) => {
      if (v) {
        iframe.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        iframe.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
      }
    };

    const setRestoreLabel = (kind) => {
      if (kind === 'pretty') {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error overlay</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error overlay');
      } else {
        pipRestoreButton.innerHTML = '<span aria-hidden="true">⟲</span><span>Show error page</span>';
        pipRestoreButton.setAttribute('aria-label', 'Show error page');
      }
    };

    const updateUI = () => {
      const minimized = isMinimized();
      const showPiP = minimized && !isPrettyHidden;
      const showPreview = !minimized && !isPreviewHidden;
      const pipHiddenByUser = minimized && isPrettyHidden;
      const previewHiddenByUser = !minimized && isPreviewHidden;
      const showToggle = minimized ? showPiP : showPreview;
      const showRestore = pipHiddenByUser || previewHiddenByUser;

      hide(iframe, pipHiddenByUser);
      hide(preview, !showPreview);
      hide(toggle, !showToggle);
      hide(pipCloseButton, !showToggle);
      hide(pipRestoreButton, !showRestore);

      pipCloseButton.setAttribute('aria-label', minimized ? 'Hide error overlay' : 'Hide error page preview');

      if (pipHiddenByUser)
        setRestoreLabel('pretty');
      else if (previewHiddenByUser)
        setRestoreLabel('preview');

      host.classList.toggle('pip-hidden', isPrettyHidden);
      host.classList.toggle('preview-hidden', isPreviewHidden);
    };

    // =========================
    // Preview snapshot
    // =========================
    const updatePreview = () => {
      try {
        let previewIframe = preview.querySelector('iframe');
        if (!previewIframe) {
          previewIframe = el('iframe');
          previewIframe.style.cssText = 'width: 1200px; height: 900px; transform: scale(0.2); transform-origin: top left; border: none;';
          previewIframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
          preview.appendChild(previewIframe);
        }

        const doctype = document.doctype ? '<!DOCTYPE ' + document.doctype.name + '>' : '';
        const cleanedHTML = document.documentElement.outerHTML
          .replace(/<nuxt-error-overlay[^>]*>.*?<\\/nuxt-error-overlay>/gs, '')
          .replace(/<script[^>]*>.*?<\\/script>/gs, '');

        const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(doctype + cleanedHTML);
        iframeDoc.close();
      } catch (err) {
        console.error('Failed to update preview:', err);
      }
    };

    // =========================
    // View toggling
    // =========================
    const toggleView = () => {
      if (isMinimized()) {
        updatePreview();
        setMinimized(false);
        liveRegion.textContent = 'Showing detailed error view';
        setTimeout(() => { 
          try { 
            iframe.contentWindow.focus();
          } catch {}
        }, 100);
      } else {
        setMinimized(true);
        liveRegion.textContent = 'Showing error page';
        repaintToDock();
        void iframe.offsetWidth;
      }
      updateUI();
    };

    // =========================
    // Dragging (unified, rAF throttled)
    // =========================
    let drag = null;
    let rafId = null;
    let suppressToggleClick = false;
    let suppressRestoreClick = false;

    const beginDrag = (e) => {
      if (drag) 
        return;

      if (!dock.edge || dock.offset == null) {
        const def = cornerDefaultDock();
        dock.edge = def.edge;
        dock.offset = def.offset;
        updateDockAlignment(previewSize());
      }

      const isRestoreTarget = e.currentTarget === pipRestoreButton;

      drag = {
        kind: isRestoreTarget ? 'restore' : (isMinimized() ? 'pip' : 'preview'),
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        lastX: e.clientX,
        lastY: e.clientY,
        moved: false,
        target: e.currentTarget
      };

      drag.target.setPointerCapture(e.pointerId);

      if (drag.kind === 'restore')
        host.classList.add('dragging-restore');
      else 
        host.classList.add(drag.kind === 'pip' ? 'dragging' : 'dragging-preview');

      e.preventDefault();
    };

    const moveDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      
      const dx = drag.lastX - drag.startX;
      const dy = drag.lastY - drag.startY;

      if (!drag.moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
        drag.moved = true;
      }

      if (!drag.moved)
        return;
      if (rafId)
        return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const edge = nearestEdgeAt(drag.lastX, drag.lastY);
        const size = sizeForTarget(drag.target);

        let offset;
        if (edge === 'left' || edge === 'right') {
          const top = drag.lastY - (size.h / 2);
          offset = clampOffset(edge, Math.round(top), size);
        } else {
          const left = drag.lastX - (size.w / 2);
          offset = clampOffset(edge, Math.round(left), size);
        }

        dock.edge = edge;
        dock.offset = offset;
        updateDockAlignment(size);

        const origin = currentTransformOrigin();
        setVar('--error-pip-origin', origin || 'bottom right');

        applyDockAll({ persist: false });
      });
    };

    const endDrag = (e) => {
      if (!drag || drag.pointerId !== e.pointerId)
        return;

      const endedKind = drag.kind;
      drag.target.releasePointerCapture(e.pointerId);

      if (endedKind === 'restore')
        host.classList.remove('dragging-restore');
      else 
        host.classList.remove(endedKind === 'pip' ? 'dragging' : 'dragging-preview');

      const didMove = drag.moved;
      drag = null;

      if (didMove) {
        persistDock();
        if (endedKind === 'restore')
          suppressRestoreClick = true;
        else 
          suppressToggleClick = true;
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const bindDragTarget = (node) => {
      on(node, 'pointerdown', beginDrag);
      on(node, 'pointermove', moveDrag);
      on(node, 'pointerup', endDrag);
      on(node, 'pointercancel', endDrag);
    };

    bindDragTarget(toggle);
    bindDragTarget(pipRestoreButton);

    // =========================
    // Events (toggle / close / restore)
    // =========================
    on(toggle, 'click', (e) => {
      if (suppressToggleClick) {
        e.preventDefault();
        suppressToggleClick = false;
        return;
      }
      toggleView();
    });

    on(toggle, 'keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleView();
      }
    });

    on(pipCloseButton, 'click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized())
        setPrettyHidden(true);
      else
        setPreviewHidden(true);
    });

    on(pipCloseButton, 'pointerdown', (e) => {
      e.stopPropagation();
    });

    on(pipRestoreButton, 'click', (e) => {
      if (suppressRestoreClick) {
        e.preventDefault();
        suppressRestoreClick = false;
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      if (isMinimized()) 
        setPrettyHidden(false);
      else 
        setPreviewHidden(false);
    });

    // =========================
    // Lifecycle: load / sync / repaint
    // =========================
    const loadState = () => {
      loadDock();
      loadHidden();

      if (isPrettyHidden && !isMinimized())
        setMinimized(true);

      updateUI();
      repaintToDock();
    };

    loadState();

    on(window, 'storage-ready', () => {
      storageReady = true;
      loadState();
    });

    const onViewportChange = () => repaintToDock();

    on(window, 'resize', onViewportChange);

    if (window.visualViewport) {
      on(window.visualViewport, 'resize', onViewportChange);
      on(window.visualViewport, 'scroll', onViewportChange);
    }

    // initial preview
    setTimeout(updatePreview, 100);

    // initial minimized option
    if (${startMinimized}) {
      setMinimized(true);
      repaintToDock();
      void iframe.offsetWidth;
      updateUI();
    }
  } catch (err) {
    console.error('Failed to initialize Nuxt error overlay:', err);
  }
})();
`;
}
function generateErrorOverlayHTML(html, options) {
	const nonce = Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
	const errorPage = html.replace("<head>", `<head><script>${iframeStorageBridge(nonce)}<\/script>`);
	const base64HTML = Buffer.from(errorPage, "utf8").toString("base64");
	return `
    <script>${parentStorageBridge(nonce)}<\/script>
    <nuxt-error-overlay></nuxt-error-overlay>
    <script>${webComponentScript(base64HTML, options?.startMinimized ?? false)}<\/script>
  `;
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled || isJsonRequest(event)) {
		// let Nitro handle JSON errors
		return;
	}
	// invoke default Nitro error handler (which will log appropriately if required)
	const defaultRes = await defaultHandler(error, event, { json: true });
	// let Nitro handle redirect if appropriate
	const status = error.status || error.statusCode || 500;
	if (status === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) {
		// normalize to string format expected by nuxt `error.vue`
		defaultRes.body.stack = defaultRes.body.stack.join("\n");
	}
	const errorObject = defaultRes.body;
	// remove proto/hostname/port from URL
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	// add default server message (keep sanitized for unhandled errors)
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	// we will be rendering this error internally so we can pass along the error.data safely
	errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	// Access request headers
	const reqHeaders = getRequestHeaders(event);
	// Detect to avoid recursion in SSR rendering of errors
	const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
	// HTML response (via SSR)
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject), {
		headers: {
			...reqHeaders,
			"x-nuxt-error": "true"
		},
		redirect: "manual"
	}).catch(() => null);
	if (event.handled) {
		return;
	}
	// Fallback to static rendered error page
	if (!res) {
		const { template } = await Promise.resolve().then(function () { return error500; });
		{
			// TODO: Support `message` in template
			errorObject.description = errorObject.message;
		}
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		return send(event, template(errorObject));
	}
	const html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === "set-cookie") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (!globalThis._importMeta_.test && typeof html === "string") {
		const prettyResponse = await defaultHandler(error, event, { json: false });
		if (typeof prettyResponse.body === "string") {
			return send(event, html.replace("</body>", `${generateErrorOverlayHTML(prettyResponse.body, { startMinimized: 300 <= status && status < 500 })}</body>`));
		}
	}
	return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const parsed = await new ErrorParser().defineSourceLoader(sourceLoader).parse(error);
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
async function sourceLoader(frame) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const rawSourceMap = await readFile(`${frame.fileName}.map`, "utf8").catch(() => {
    });
    if (rawSourceMap) {
      const consumer = await new SourceMapConsumer(rawSourceMap);
      const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: frame.columnNumber });
      if (originalPosition.source && originalPosition.line) {
        frame.fileName = resolve(dirname(frame.fileName), originalPosition.source);
        frame.lineNumber = originalPosition.line;
        frame.columnNumber = originalPosition.column || 0;
      }
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const rootDir = "/root/kroyfit";

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Курсы кройки и шитья в Барнауле. Методика точного кроя по Злачевской. С 2014 года."},{"name":"theme-color","content":"#6366F1"}],"link":[{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap"}],"style":[],"script":[{"src":"https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js","nonce":"csp_nonce"}],"noscript":[],"title":"Генетика Кроя — Курсы кройки и шитья в Барнауле"};

const appRootTag = "div";

const appRootAttrs = {"id":"__nuxt"};

const appTeleportTag = "div";

const appTeleportAttrs = {"id":"teleports"};

const appSpaLoaderTag = "div";

const appSpaLoaderAttrs = {"id":"__nuxt-loader"};

const appId = "nuxt-app";

const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : undefined,
	URL: (data) => data instanceof URL ? data.toString() : undefined
};
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
const _kNsZR7qOcpCeXvwWm76t5I85TVETB6l0hPxdRpQqKsE = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) {
			return;
		}
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) {
				continue;
			}
			if (EXCLUDE_TRACE_RE.test(entry.source)) {
				continue;
			}
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		// retain log to be include in the next render
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	// Pass any logs to the client
	nitroApp.hooks.hook("render:html", (htmlContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) {
			return;
		}
		try {
			const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
			htmlContext.bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId}">${stringify(ctx.logs, reducers)}<\/script>`);
		} catch (e) {
			const shortError = e instanceof Error && "toString" in e ? ` Received \`${e.toString()}\`.` : "";
			console.warn(`[nuxt] Failed to stringify dev server logs.${shortError} You can define your own reducer/reviver for rich types following the instructions in https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload.`);
		}
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

const plugins = [
  _kNsZR7qOcpCeXvwWm76t5I85TVETB6l0hPxdRpQqKsE,
_wH6JrtIxmaSoA8lCPWFnE9z4lQeXW6H5z3l5aymEQw
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _ocHbsM = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const VueResolver = (_, value) => {
  return isRef(value) ? toValue(value) : value;
};

const headSymbol = "usehead";
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  const plugin = {
    install(app) {
      app.config.globalProperties.$unhead = head;
      app.config.globalProperties.$head = head;
      app.provide(headSymbol, head);
    }
  };
  return plugin.install;
}

// @__NO_SIDE_EFFECTS__
function resolveUnrefHeadInput(input) {
  return walkResolver(input, VueResolver);
}

const NUXT_PAYLOAD_INLINE = false;
const NUXT_RUNTIME_PAYLOAD_EXTRACTION = false;

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const unheadOptions = {
  disableDefaults: true,
};

function createSSRContext(event) {
	const ssrContext = {
		url: event.path,
		event,
		runtimeConfig: useRuntimeConfig(event),
		noSSR: event.context.nuxt?.noSSR || (false),
		head: createHead(unheadOptions),
		error: false,
		nuxt: undefined,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		modules: new Set()
	};
	return ssrContext;
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

function buildAssetsDir() {
	// TODO: support passing event to `useRuntimeConfig`
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	// TODO: support passing event to `useRuntimeConfig`
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
// @ts-expect-error file will be produced after app build
const getServerEntry = () => import('file:///root/kroyfit/.nuxt//dist/server/server.mjs').then((r) => r.default || r);
// @ts-expect-error file will be produced after app build
const getClientManifest = () => import('file:///root/kroyfit/.nuxt//dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
// -- SSR Renderer --
const getSSRRenderer = lazyCachedFunction(async () => {
	// Load server bundle
	const createSSRApp = await getServerEntry();
	if (!createSSRApp) {
		throw new Error("Server bundle is not available");
	}
	// Load precomputed dependencies
	const precomputed = undefined ;
	// Create renderer
	const renderer = createRenderer(createSSRApp, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: renderToString$1,
		buildAssetsURL
	});
	async function renderToString$1(input, context) {
		const html = await renderToString(input, context);
		// In development with vite-node, the manifest is on-demand and will be available after rendering
		// eslint-disable-next-line no-restricted-globals
		if (process.env.NUXT_VITE_NODE_OPTIONS) {
			renderer.rendererContext.updateManifest(await getClientManifest());
		}
		return APP_ROOT_OPEN_TAG + html + APP_ROOT_CLOSE_TAG;
	}
	return renderer;
});
// -- SPA Renderer --
const getSPARenderer = lazyCachedFunction(async () => {
	const precomputed = undefined ;
	// @ts-expect-error virtual file
	const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "").then((r) => {
		{
			const APP_SPA_LOADER_OPEN_TAG = `<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
			const APP_SPA_LOADER_CLOSE_TAG = `</${appSpaLoaderTag}>`;
			const appTemplate = APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG;
			const loaderTemplate = r ? APP_SPA_LOADER_OPEN_TAG + r + APP_SPA_LOADER_CLOSE_TAG : "";
			return appTemplate + loaderTemplate;
		}
	});
	// Create SPA renderer and cache the result for all requests
	const renderer = createRenderer(() => () => {}, {
		precomputed,
		manifest: await getClientManifest() ,
		renderToString: () => spaTemplate,
		buildAssetsURL
	});
	const result = await renderer.renderToString({});
	const renderToString = (ssrContext) => {
		const config = useRuntimeConfig(ssrContext.event);
		ssrContext.modules ||= new Set();
		ssrContext.payload.serverRendered = false;
		ssrContext.config = {
			public: config.public,
			app: config.app
		};
		return Promise.resolve(result);
	};
	return {
		rendererContext: renderer.rendererContext,
		renderToString
	};
});
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) {
			res = fn().catch((err) => {
				res = null;
				throw err;
			});
		}
		return res;
	};
}
function getRenderer(ssrContext) {
	return ssrContext.noSSR ? getSPARenderer() : getSSRRenderer();
}
// @ts-expect-error file will be produced after app build
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

async function renderInlineStyles(usedModules) {
	const styleMap = await getSSRStyles();
	const inlinedStyles = new Set();
	for (const mod of usedModules) {
		if (mod in styleMap && styleMap[mod]) {
			for (const style of await styleMap[mod]()) {
				inlinedStyles.add(style);
			}
		}
	}
	return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}

// @ts-expect-error virtual file
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	const match = body.match(ROOT_NODE_REGEX);
	return match?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) {
		return undefined;
	}
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) {
		response[name] = {
			...slot,
			fallback: ssrContext.teleports?.[`island-fallback=${name}`]
		};
	}
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) {
		return undefined;
	}
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		// remove teleport anchor to avoid hydration issues
		const html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) {
				continue;
			}
			slots[slot] = value;
		}
	}
	return slots;
}
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) {
		return html;
	}
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-component="${clientId}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) {
				continue;
			}
			html = html.replace(new RegExp(` data-island-uid="${uid}" data-island-slot="${slot}"[^>]*>`), (full) => {
				return full + teleports[key];
			});
		}
	}
	return html;
}

const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	const nitroApp = useNitroApp();
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(event),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	// Render app
	const renderer = await getSSRRenderer();
	const renderResult = await renderer.renderToString(ssrContext).catch(async (err) => {
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	// Handle errors
	if (ssrContext.payload?.error) {
		throw ssrContext.payload.error;
	}
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		for (const resource of Object.values(styles)) {
			// Do not add links to resources that are inlined (vite v5+)
			if ("inline" in getQuery(resource.file)) {
				continue;
			}
			// Add CSS links in <head> for CSS files
			// - in dev mode when rendering an island and the file has scoped styles and is not a page
			if (resource.file.includes("scoped") && !resource.file.includes("pages/")) {
				link.push({
					rel: "stylesheet",
					href: renderer.rendererContext.buildAssetsURL(resource.file),
					crossorigin: ""
				});
			}
		}
		if (link.length) {
			ssrContext.head.push({ link }, { mode: "server" });
		}
	}
	const islandHead = {};
	for (const entry of ssrContext.head.entries.values()) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		for (const [key, value] of Object.entries(resolveUnrefHeadInput(entry.input))) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) {
				currentValue.push(...value);
			} else {
				islandHead[key] = value;
			}
		}
	}
	const islandResponse = {
		id: islandContext.id,
		head: islandHead,
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await nitroApp.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
});
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function getIslandContext(event) {
	let url = event.path || "";
	if (!url.startsWith(ISLAND_PATH_PREFIX)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island request path"
		});
	}
	const componentParts = url.substring(ISLAND_PATH_PREFIX.length).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : undefined;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) {
		throw createError({
			statusCode: 400,
			statusMessage: "Invalid island component name"
		});
	}
	const context = event.method === "GET" ? getQuery$1(event) : await readBody(event);
	// Only extract known context fields to prevent arbitrary data injection
	return {
		url: typeof context?.url === "string" ? context.url : "/",
		id: hashId,
		name: componentName,
		props: destr$1(context.props) || {},
		slots: {},
		components: {}
	};
}

const _lazy_czidWe = () => Promise.resolve().then(function () { return admins_get$1; });
const _lazy_A8X4T2 = () => Promise.resolve().then(function () { return login_post$1; });
const _lazy_EE5Nrq = () => Promise.resolve().then(function () { return profile_get$1; });
const _lazy_1d2OBt = () => Promise.resolve().then(function () { return profile_post$1; });
const _lazy_DzDfvp = () => Promise.resolve().then(function () { return recent_get$1; });
const _lazy_AUXaMQ = () => Promise.resolve().then(function () { return roles_get$1; });
const _lazy_v2SzUE = () => Promise.resolve().then(function () { return settings_post$1; });
const _lazy_GxDtRk = () => Promise.resolve().then(function () { return all_get$1; });
const _lazy_DCkUpC = () => Promise.resolve().then(function () { return vkGroups_post$1; });
const _lazy_3rED2L = () => Promise.resolve().then(function () { return courses_get$3; });
const _lazy_Q30N3U = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_iLABVq = () => Promise.resolve().then(function () { return _slug__get$1; });
const _lazy_Bbdfzr = () => Promise.resolve().then(function () { return send_post$1; });
const _lazy_fgLKdS = () => Promise.resolve().then(function () { return create_post$1; });
const _lazy_Zk_xh4 = () => Promise.resolve().then(function () { return webhook_post$1; });
const _lazy_Ec4NS6 = () => Promise.resolve().then(function () { return plan$1; });
const _lazy_78NPLW = () => Promise.resolve().then(function () { return siteInfo_get$1; });
const _lazy_o4Lo7s = () => Promise.resolve().then(function () { return courses_get$1; });
const _lazy_EkXGHc = () => Promise.resolve().then(function () { return users_get$1; });
const _lazy_sscpne = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_nu2Mqm = () => Promise.resolve().then(function () { return index_post$1; });
const _lazy_cppSKU = () => Promise.resolve().then(function () { return invite_post$1; });
const _lazy_j44pum = () => Promise.resolve().then(function () { return resolveId_post$1; });
const _lazy_0xU0gg = () => Promise.resolve().then(function () { return testConnection_post$1; });
const _lazy_lOgpbR = () => Promise.resolve().then(function () { return sitemap_xml$1; });
const _lazy_nqijRZ = () => Promise.resolve().then(function () { return renderer; });

const handlers = [
  { route: '', handler: _ocHbsM, lazy: false, middleware: true, method: undefined },
  { route: '/api/admin/admins', handler: _lazy_czidWe, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/login', handler: _lazy_A8X4T2, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/profile', handler: _lazy_EE5Nrq, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/profile', handler: _lazy_1d2OBt, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/purchases/recent', handler: _lazy_DzDfvp, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/roles', handler: _lazy_AUXaMQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/settings', handler: _lazy_v2SzUE, lazy: true, middleware: false, method: "post" },
  { route: '/api/admin/settings/all', handler: _lazy_GxDtRk, lazy: true, middleware: false, method: "get" },
  { route: '/api/admin/vk-groups', handler: _lazy_DCkUpC, lazy: true, middleware: false, method: "post" },
  { route: '/api/courses', handler: _lazy_3rED2L, lazy: true, middleware: false, method: "get" },
  { route: '/api/courses/:id', handler: _lazy_Q30N3U, lazy: true, middleware: false, method: "get" },
  { route: '/api/courses/:slug', handler: _lazy_iLABVq, lazy: true, middleware: false, method: "get" },
  { route: '/api/email/send', handler: _lazy_Bbdfzr, lazy: true, middleware: false, method: "post" },
  { route: '/api/payments/create', handler: _lazy_fgLKdS, lazy: true, middleware: false, method: "post" },
  { route: '/api/payments/webhook', handler: _lazy_Zk_xh4, lazy: true, middleware: false, method: "post" },
  { route: '/api/plan', handler: _lazy_Ec4NS6, lazy: true, middleware: false, method: undefined },
  { route: '/api/site-info', handler: _lazy_78NPLW, lazy: true, middleware: false, method: "get" },
  { route: '/api/user/courses', handler: _lazy_o4Lo7s, lazy: true, middleware: false, method: "get" },
  { route: '/api/users', handler: _lazy_EkXGHc, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/:id', handler: _lazy_sscpne, lazy: true, middleware: false, method: "get" },
  { route: '/api/users', handler: _lazy_nu2Mqm, lazy: true, middleware: false, method: "post" },
  { route: '/api/vk/invite', handler: _lazy_cppSKU, lazy: true, middleware: false, method: "post" },
  { route: '/api/vk/resolve-id', handler: _lazy_j44pum, lazy: true, middleware: false, method: "post" },
  { route: '/api/vk/test-connection', handler: _lazy_0xU0gg, lazy: true, middleware: false, method: "post" },
  { route: '/sitemap.xml', handler: _lazy_lOgpbR, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_nqijRZ, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_nqijRZ, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      listener = server.listen(useRandomPort ? 0 : getSocketAddress(), () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "localhost", port: address?.port }
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template$1 = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0\" name=\"viewport\"><script>!function(){const e=document.createElement(\"link\").relList;if(!(e&&e.supports&&e.supports(\"modulepreload\"))){for(const e of document.querySelectorAll('link[rel=\"modulepreload\"]'))r(e);new MutationObserver(e=>{for(const o of e)if(\"childList\"===o.type)for(const e of o.addedNodes)\"LINK\"===e.tagName&&\"modulepreload\"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),\"use-credentials\"===e.crossOrigin?r.credentials=\"include\":\"anonymous\"===e.crossOrigin?r.credentials=\"omit\":r.credentials=\"same-origin\",r}(e);fetch(e.href,r)}}();<\/script><style>*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:\"\"}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[80px\\]{font-size:80px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[\\#020420\\]{--un-text-opacity:1;color:rgb(2 4 32/var(--un-text-opacity))}.text-\\[\\#64748B\\]{--un-text-opacity:1;color:rgb(100 116 139/var(--un-text-opacity))}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-\\[\\#020420\\]{--un-bg-opacity:1;background-color:rgb(2 4 32/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(min-width:640px){.sm\\:text-\\[110px\\]{font-size:110px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-[#020420] dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-[#020420] tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-semibold leading-none mb-4 sm:text-[110px] tabular-nums text-[80px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-[#64748B] text-md\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const error500 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template$1
}, Symbol.toStringTag, { value: 'Module' }));

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles
}, Symbol.toStringTag, { value: 'Module' }));

const roles = sqliteTable("roles", {
  id: text("id").primaryKey(),
  name: text("name").notNull().unique(),
  description: text("description"),
  canViewDashboard: integer("can_view_dashboard", { mode: "boolean" }).default(false),
  canManageCourses: integer("can_manage_courses", { mode: "boolean" }).default(false),
  canManageUsers: integer("can_manage_users", { mode: "boolean" }).default(false),
  canManagePurchases: integer("can_manage_purchases", { mode: "boolean" }).default(false),
  canManageSettings: integer("can_manage_settings", { mode: "boolean" }).default(false),
  canManageAdmins: integer("can_manage_admins", { mode: "boolean" }).default(false),
  canEditPlan: integer("can_edit_plan", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const admins$1 = sqliteTable("admins", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  roleId: text("role_id").references(() => roles.id),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  vkId: text("vk_id").unique(),
  name: text("name").notNull(),
  email: text("email"),
  avatar: text("avatar"),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const courses$1 = sqliteTable("courses", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  fullDescription: text("full_description"),
  price: integer("price").notNull(),
  category: text("category").default("\u0411\u0430\u0437\u043E\u0432\u044B\u0439"),
  difficulty: text("difficulty").default("\u041D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0439"),
  duration: text("duration"),
  lessonsCount: integer("lessons_count").default(0),
  image: text("image"),
  isPublished: integer("is_published", { mode: "boolean" }).default(false),
  vkGroupId: text("vk_group_id"),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const purchases = sqliteTable("purchases", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  courseId: text("course_id").notNull().references(() => courses$1.id),
  amount: integer("amount").notNull(),
  status: text("status").default("pending"),
  paymentId: text("payment_id"),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const vkGroups = sqliteTable("vk_groups", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  vkId: text("vk_id").notNull(),
  courseSlug: text("course_slug").notNull(),
  token: text("token").notNull(),
  createdAt: text("created_at").default(sql`(datetime('now'))`)
});
const emailSettings = sqliteTable("email_settings", {
  id: integer("id").primaryKey(),
  smtpHost: text("smtp_host").notNull().default("smtp.gmail.com"),
  smtpPort: integer("smtp_port").notNull().default(587),
  smtpUser: text("smtp_user").notNull().default(""),
  smtpPass: text("smtp_pass").notNull().default(""),
  smtpFrom: text("smtp_from").notNull().default("noreply@kroyfit.ru"),
  enableWelcome: integer("enable_welcome").notNull().default(1),
  enablePurchase: integer("enable_purchase").notNull().default(1),
  enableVkGroup: integer("enable_vk_group").notNull().default(1),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`)
});
const seoSettings = sqliteTable("seo_settings", {
  id: integer("id").primaryKey(),
  title: text("title").notNull().default("\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F"),
  description: text("description").notNull().default("\u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F"),
  keywords: text("keywords").notNull().default("\u043A\u0440\u043E\u0439\u043A\u0430, \u0448\u0438\u0442\u044C\u0435, \u043A\u0443\u0440\u0441\u044B"),
  enableSitemap: integer("enable_sitemap").notNull().default(1),
  enableRobots: integer("enable_robots").notNull().default(1),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`)
});
const generalSettings = sqliteTable("general_settings", {
  id: integer("id").primaryKey(),
  siteName: text("site_name").notNull().default("\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F"),
  adminEmail: text("admin_email").notNull().default(""),
  updatedAt: text("updated_at").default(sql`(datetime('now'))`)
});

const schema = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  admins: admins$1,
  courses: courses$1,
  emailSettings: emailSettings,
  generalSettings: generalSettings,
  purchases: purchases,
  roles: roles,
  seoSettings: seoSettings,
  users: users,
  vkGroups: vkGroups
}, Symbol.toStringTag, { value: 'Module' }));

const DB_PATH = resolve(process.cwd(), "kroyfit.db");
console.log("\u{1F4C1} [DB] \u041F\u0443\u0442\u044C \u043A \u0411\u0414:", DB_PATH);
const sqlite = new Database(DB_PATH);
const db = drizzle(sqlite, { schema });

const admins_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/admins - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432");
  try {
    const adminsList = await db.select().from(admins$1);
    console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:", adminsList.length);
    return { success: true, admins: adminsList };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432"
    });
  }
});

const admins_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: admins_get
}, Symbol.toStringTag, { value: 'Module' }));

const admins = [
  {
    id: "1",
    email: "admin@kroyfit.ru",
    password: "admin123456",
    // В реальности должен быть хеш
    name: "Admin",
    role: "admin"
  }
];
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Email \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B"
    });
  }
  const admin = admins.find((a) => a.email === email && a.password === password);
  if (!admin) {
    throw createError({
      statusCode: 401,
      message: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430"
    });
  }
  const token = Buffer.from(`${admin.id}:${admin.email}:${Date.now()}`).toString("base64");
  return {
    token,
    user: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role
    }
  };
});

const login_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: login_post
}, Symbol.toStringTag, { value: 'Module' }));

const profile_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/profile - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430");
  try {
    const admin = await db.query.admins.findFirst({
      where: eq(admins$1.id, "1")
    });
    if (!admin) {
      console.error("\u274C [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
      throw createError({
        statusCode: 404,
        message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
    console.log("\u2705 [API] \u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", { email: admin.email, name: admin.name });
    return { success: true, admin };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
    });
  }
});

const profile_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: profile_get
}, Symbol.toStringTag, { value: 'Module' }));

const profile_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { adminId, email, name, password } = body;
  if (!adminId || !email || !name) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  try {
    const updateData = {
      email,
      name
    };
    if (password && password.length > 0) {
      updateData.password = password;
    }
    await db.update(admins$1).set(updateData).where(eq(admins$1.id, adminId));
    return { success: true, message: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D" };
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u044F"
    });
  }
});

const profile_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: profile_post
}, Symbol.toStringTag, { value: 'Module' }));

const recent_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/purchases/recent - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A");
  try {
    const recentPurchases = await db.select({
      id: purchases.id,
      userId: purchases.userId,
      userName: users.name,
      userEmail: users.email,
      courseId: purchases.courseId,
      courseTitle: courses$1.title,
      amount: purchases.amount,
      status: purchases.status,
      createdAt: purchases.createdAt
    }).from(purchases).leftJoin(users, eq(purchases.userId, users.id)).leftJoin(courses$1, eq(purchases.courseId, courses$1.id)).orderBy(desc(purchases.createdAt)).limit(10);
    console.log("\u2705 [API] \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u043E\u043A\u0443\u043F\u043E\u043A:", recentPurchases.length);
    return { success: true, purchases: recentPurchases };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043A\u0443\u043F\u043E\u043A:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043A\u0443\u043F\u043E\u043A"
    });
  }
});

const recent_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: recent_get
}, Symbol.toStringTag, { value: 'Module' }));

const roles_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/roles - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0440\u043E\u043B\u0435\u0439");
  try {
    const rolesList = await db.select().from(roles);
    console.log("\u2705 [API] \u0420\u043E\u043B\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:", rolesList.length);
    return { success: true, roles: rolesList };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u043E\u043B\u0435\u0439:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u043E\u043B\u0435\u0439"
    });
  }
});

const roles_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: roles_get
}, Symbol.toStringTag, { value: 'Module' }));

const settings_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { type, data } = body;
  console.log("\u{1F535} [API] /api/admin/settings - \u041F\u043E\u043B\u0443\u0447\u0435\u043D \u0437\u0430\u043F\u0440\u043E\u0441:", { type, data });
  if (!type || !data) {
    console.error("\u274C [API] \u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B");
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  try {
    if (type === "profile") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430...");
      const { adminId, email, name, password } = data;
      console.log("\u{1F4DD} [API] \u0414\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F:", { adminId, email, name, hasPassword: !!password });
      const updateData = { email, name };
      if (password && password.length > 0) {
        updateData.password = password;
      }
      console.log("\u{1F504} [API] \u0412\u044B\u043F\u043E\u043B\u043D\u044F\u044E UPDATE \u0432 \u0411\u0414...");
      const result = await db.update(admins$1).set(updateData).where(eq(admins$1.id, adminId));
      console.log("\u2705 [API] UPDATE \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D \u0443\u0441\u043F\u0435\u0448\u043D\u043E:", result);
      return { success: true, message: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D" };
    }
    if (type === "role") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u043E\u043B\u0438...");
      const { id, name, description, permissions } = data;
      const perms = permissions || {};
      if (id) {
        console.log("\u{1F504} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0440\u043E\u043B\u0438:", id);
        await db.update(roles).set({
          name,
          description,
          canViewDashboard: perms.canViewDashboard ? 1 : 0,
          canManageCourses: perms.canManageCourses ? 1 : 0,
          canManageUsers: perms.canManageUsers ? 1 : 0,
          canManagePurchases: perms.canManagePurchases ? 1 : 0,
          canManageSettings: perms.canManageSettings ? 1 : 0,
          canManageAdmins: perms.canManageAdmins ? 1 : 0,
          canEditPlan: perms.canEditPlan ? 1 : 0
        }).where(eq(roles.id, id));
        console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430");
        return { success: true, message: "\u0420\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430", id };
      } else {
        console.log("\u2795 [API] \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0440\u043E\u043B\u0438");
        const newId = crypto.randomUUID();
        await db.insert(roles).values({
          id: newId,
          name,
          description,
          canViewDashboard: perms.canViewDashboard ? 1 : 0,
          canManageCourses: perms.canManageCourses ? 1 : 0,
          canManageUsers: perms.canManageUsers ? 1 : 0,
          canManagePurchases: perms.canManagePurchases ? 1 : 0,
          canManageSettings: perms.canManageSettings ? 1 : 0,
          canManageAdmins: perms.canManageAdmins ? 1 : 0,
          canEditPlan: perms.canEditPlan ? 1 : 0
        });
        console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D\u0430:", newId);
        return { success: true, message: "\u0420\u043E\u043B\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430", id: newId };
      }
    }
    if (type === "role-delete") {
      console.log("\u{1F5D1}\uFE0F [API] \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0440\u043E\u043B\u0438:", data.id);
      await db.delete(roles).where(eq(roles.id, data.id));
      console.log("\u2705 [API] \u0420\u043E\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430");
      return { success: true, message: "\u0420\u043E\u043B\u044C \u0443\u0434\u0430\u043B\u0435\u043D\u0430" };
    }
    if (type === "admin") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430...");
      const { id, email, name, roleId, isActive } = data;
      if (id) {
        console.log("\u{1F504} [API] \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:", id);
        await db.update(admins$1).set({
          email,
          name,
          roleId,
          isActive: isActive ? 1 : 0
        }).where(eq(admins$1.id, id));
        console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D");
      } else {
        console.log("\u2795 [API] \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430");
        const newId = crypto.randomUUID();
        await db.insert(admins$1).values({
          id: newId,
          email,
          name,
          password: "temp_password",
          roleId,
          isActive: isActive ? 1 : 0
        });
        console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0437\u0434\u0430\u043D:", newId);
        return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D", id: newId };
      }
      return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D" };
    }
    if (type === "admin-delete") {
      console.log("\u{1F5D1}\uFE0F [API] \u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430:", data.id);
      await db.delete(admins$1).where(eq(admins$1.id, data.id));
      console.log("\u2705 [API] \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0443\u0434\u0430\u043B\u0435\u043D");
      return { success: true, message: "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u0443\u0434\u0430\u043B\u0435\u043D" };
    }
    if (type === "email") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 email \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A...");
      const { smtpHost, smtpPort, smtpUser, smtpPass, smtpFrom, enableWelcome, enablePurchase, enableVkGroup } = data;
      await db.update(emailSettings).set({
        smtpHost,
        smtpPort,
        smtpUser,
        smtpPass,
        smtpFrom,
        enableWelcome: enableWelcome ? 1 : 0,
        enablePurchase: enablePurchase ? 1 : 0,
        enableVkGroup: enableVkGroup ? 1 : 0
      }).where(eq(emailSettings.id, 1));
      console.log("\u2705 [API] Email \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
      return { success: true, message: "Email \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B" };
    }
    if (type === "seo") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 SEO \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A...");
      const { title, description, keywords, enableSitemap, enableRobots } = data;
      await db.update(seoSettings).set({
        title,
        description,
        keywords,
        enableSitemap: enableSitemap ? 1 : 0,
        enableRobots: enableRobots ? 1 : 0
      }).where(eq(seoSettings.id, 1));
      console.log("\u2705 [API] SEO \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
      return { success: true, message: "SEO \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B" };
    }
    if (type === "general") {
      console.log("\u{1F7E1} [API] \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0431\u0449\u0438\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A...");
      const { siteName, adminEmail } = data;
      await db.update(generalSettings).set({
        siteName,
        adminEmail
      }).where(eq(generalSettings.id, 1));
      console.log("\u2705 [API] \u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B");
      return { success: true, message: "\u041E\u0431\u0449\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B" };
    }
    console.error("\u274C [API] \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F:", type);
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F"
    });
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"
    });
  }
});

const settings_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: settings_post
}, Symbol.toStringTag, { value: 'Module' }));

const all_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/admin/settings/all - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0445 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A");
  try {
    const vk = await db.select().from(vkGroups);
    const email = await db.select().from(emailSettings);
    const seo = await db.select().from(seoSettings);
    const general = await db.select().from(generalSettings);
    console.log("\u2705 [API] \u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B:", {
      vkGroups: vk.length,
      email: email.length,
      seo: seo.length,
      general: general.length
    });
    return {
      success: true,
      vkGroups: vk,
      email: email[0] || null,
      seo: seo[0] || null,
      general: general[0] || null
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A"
    });
  }
});

const all_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: all_get
}, Symbol.toStringTag, { value: 'Module' }));

const vkGroups_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { action, data } = body;
  console.log("\u{1F535} [API] /api/admin/vk-groups - \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435:", action);
  try {
    if (action === "create") {
      const { name, vkId, courseSlug, token } = data;
      const id = crypto.randomUUID();
      await db.insert(vkGroups).values({ id, name, vkId, courseSlug, token });
      console.log("\u2705 [API] VK \u0433\u0440\u0443\u043F\u043F\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430:", id);
      return { success: true, group: { id, name, vkId, courseSlug, token } };
    }
    if (action === "update") {
      const { id, name, vkId, courseSlug, token } = data;
      await db.update(vkGroups).set({ name, vkId, courseSlug, token }).where(eq(vkGroups.id, id));
      console.log("\u2705 [API] VK \u0433\u0440\u0443\u043F\u043F\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430:", id);
      return { success: true };
    }
    if (action === "delete") {
      const { id } = data;
      await db.delete(vkGroups).where(eq(vkGroups.id, id));
      console.log("\u2705 [API] VK \u0433\u0440\u0443\u043F\u043F\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430:", id);
      return { success: true };
    }
    console.error("\u274C [API] \u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:", action);
    throw createError({ statusCode: 400, message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435" });
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430:", e);
    throw createError({ statusCode: 500, message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 VK \u0433\u0440\u0443\u043F\u043F\u043E\u0439" });
  }
});

const vkGroups_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: vkGroups_post
}, Symbol.toStringTag, { value: 'Module' }));

const courses_get$2 = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/courses - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0443\u0440\u0441\u043E\u0432");
  try {
    const coursesList = await db.select().from(courses$1);
    console.log("\u2705 [API] \u041A\u0443\u0440\u0441\u043E\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E:", coursesList.length);
    return { success: true, courses: coursesList };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043A\u0443\u0440\u0441\u043E\u0432"
    });
  }
});

const courses_get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: courses_get$2
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get$2 = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: "ID \u043A\u0443\u0440\u0441\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D" });
  }
  console.log("\u{1F535} [API] GET /api/courses/:id - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430:", id);
  try {
    const [course] = await db.select().from(courses$1).where(eq(courses$1.id, id)).limit(1);
    if (!course) {
      throw createError({ statusCode: 404, message: "\u041A\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
    }
    console.log("\u2705 [API] \u041A\u0443\u0440\u0441 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", course.title);
    return { success: true, course };
  } catch (e) {
    if (e.statusCode) throw e;
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u0430:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u0430"
    });
  }
});

const _id__get$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get$2
}, Symbol.toStringTag, { value: 'Module' }));

const courses = [
  {
    id: "1",
    title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0448\u0438\u0432\u0430 \u043E\u0434\u0435\u0436\u0434\u044B",
    slug: "tekhnologiya-poshiva",
    category: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043A\u0443\u0440\u0441",
    price: 15e3,
    priceDisplay: "\u043E\u0442 15 000 \u20BD",
    description: "\u041E\u0441\u043D\u043E\u0432\u044B \u0448\u0438\u0442\u044C\u044F \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445. \u041F\u043E\u0448\u0430\u0433\u043E\u0432\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u043E\u0442 \u0432\u044B\u0431\u043E\u0440\u0430 \u0442\u043A\u0430\u043D\u0438 \u0434\u043E \u0433\u043E\u0442\u043E\u0432\u043E\u0433\u043E \u0438\u0437\u0434\u0435\u043B\u0438\u044F.",
    fullDescription: `\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043A\u0443\u0440\u0441 \xAB\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0448\u0438\u0432\u0430 \u043E\u0434\u0435\u0436\u0434\u044B\xBB \u2014 \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0442\u0430\u0440\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043D\u0430\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0448\u0438\u0442\u044C.

\u0412\u044B \u043D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C \u0448\u0438\u0442\u044C \u044E\u0431\u043A\u0443, \u0431\u0440\u044E\u043A\u0438 \u0438 \u043F\u043B\u0430\u0442\u044C\u0435 \u043F\u043E\u0448\u0430\u0433\u043E\u0432\u043E \u2014 \u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u043A \u0441\u043B\u043E\u0436\u043D\u043E\u043C\u0443.

**\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043A\u0443\u0440\u0441\u0430:**
- \u0412\u044B\u0431\u043E\u0440 \u0442\u043A\u0430\u043D\u0435\u0439 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432
- \u0420\u0430\u0441\u043A\u0440\u043E\u0439 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0434\u0435\u0442\u0430\u043B\u0435\u0439
- \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u0437\u0434\u0435\u043B\u0438\u0439
- \u0421\u0431\u043E\u0440\u043A\u0430 \u0438 \u043E\u043A\u043E\u043D\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0442\u0434\u0435\u043B\u043A\u0430

**\u0427\u0442\u043E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435:**
- \u041F\u043E\u0448\u0430\u0433\u043E\u0432\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438
- \u0412\u0438\u0434\u0435\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B
- \u0414\u043E\u0441\u0442\u0443\u043F \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0447\u0430\u0442
- \u041F\u043E\u043C\u043E\u0449\u044C \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F

\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443 \u0432\u0430\u0441 \u043D\u0430\u0432\u0441\u0435\u0433\u0434\u0430.`,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    includes: ["\u042E\u0431\u043A\u0430", "\u0411\u0440\u044E\u043A\u0438", "\u041F\u043B\u0430\u0442\u044C\u0435", "\u0412\u0438\u0434\u0435\u043E\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B", "\u0417\u0430\u043A\u0440\u044B\u0442\u044B\u0439 \u0447\u0430\u0442", "\u041F\u043E\u043C\u043E\u0449\u044C \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F"],
    duration: "2 \u043C\u0435\u0441\u044F\u0446\u0430",
    lessonsCount: 16,
    isPublished: true,
    createdAt: "2024-01-01"
  },
  {
    id: "2",
    title: "\u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    slug: "master-konstruirovaniya",
    category: "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u0443\u0440\u0441",
    price: 25e3,
    priceDisplay: "\u043E\u0442 25 000 \u20BD",
    description: "\u041C\u0435\u0442\u043E\u0434\u0438\u043A\u0430 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043A\u0440\u043E\u044F \u043F\u043E \u0417\u043B\u0430\u0447\u0435\u0432\u0441\u043A\u043E\u0439. \u041F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0438 \u2014 \u0434\u0438\u043F\u043B\u043E\u043C \u043E\u0442 \u0430\u0432\u0442\u043E\u0440\u0430 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438.",
    fullDescription: `\u041A\u0443\u0440\u0441 \xAB\u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F\xBB \u2014 \u0443\u0433\u043B\u0443\u0431\u043B\u0451\u043D\u043D\u043E\u0435 \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043A\u0440\u043E\u044F \u043F\u043E \u0417\u043B\u0430\u0447\u0435\u0432\u0441\u043A\u043E\u0439.

\u0412\u044B \u043D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C:
- \u0421\u0442\u0440\u043E\u0438\u0442\u044C \u0442\u043E\u0447\u043D\u044B\u0435 \u0432\u044B\u043A\u0440\u043E\u0439\u043A\u0438 \u043D\u0430 \u043B\u044E\u0431\u0443\u044E \u0444\u0438\u0433\u0443\u0440\u0443
- \u041C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0437\u0434\u0435\u043B\u0438\u044F
- \u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u043E\u0441\u0430\u0434\u043A\u0443

**\u041F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0438 \u043A\u0443\u0440\u0441\u0430 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0434\u0438\u043F\u043B\u043E\u043C** \u043E\u0442 \u0430\u0432\u0442\u043E\u0440\u0430 \u043C\u0435\u0442\u043E\u0434\u0438\u043A\u0438 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u043A\u0440\u043E\u044F \u043D\u0430 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0444\u0438\u0433\u0443\u0440\u044B \u0417\u043B\u0430\u0447\u0435\u0432\u0441\u043A\u043E\u0439 \u0413\u0430\u043B\u0438\u0438 \u041C\u0430\u043D\u0441\u0443\u0440\u043E\u0432\u043D\u044B.

\u042D\u0442\u043E \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u0439 \u0432\u0430\u0448\u0438 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E.`,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    includes: ["\u0422\u043E\u0447\u043D\u044B\u0435 \u0432\u044B\u043A\u0440\u043E\u0439\u043A\u0438", "\u041C\u043E\u0434\u0435\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435", "\u0418\u0434\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0441\u0430\u0434\u043A\u0430", "\u0414\u0438\u043F\u043B\u043E\u043C \u0417\u043B\u0430\u0447\u0435\u0432\u0441\u043A\u043E\u0439", "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"],
    duration: "3 \u043C\u0435\u0441\u044F\u0446\u0430",
    lessonsCount: 24,
    isPublished: true,
    createdAt: "2024-01-15"
  },
  {
    id: "3",
    title: "\u0414\u0430\u043C\u0441\u043A\u043E\u0435 \u0431\u0435\u043B\u044C\u0451",
    slug: "damskoe-bele",
    category: "\u0421\u043F\u0435\u0446\u043A\u0443\u0440\u0441",
    price: 12e3,
    priceDisplay: "\u043E\u0442 12 000 \u20BD",
    description: "\u041A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u043F\u043E\u0448\u0438\u0432 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0433\u043E \u0438 \u0443\u0434\u043E\u0431\u043D\u043E\u0433\u043E \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0431\u0435\u043B\u044C\u044F \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0441\u0430\u0434\u043A\u043E\u0439.",
    fullDescription: `\u041A\u0443\u0440\u0441 \xAB\u0414\u0430\u043C\u0441\u043A\u043E\u0435 \u0431\u0435\u043B\u044C\u0451\xBB \u2014 \u043D\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044C \u0448\u0438\u0442\u044C \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0435 \u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E\u0435 \u0431\u0435\u043B\u044C\u0451.

\u0412\u044B \u043E\u0441\u0432\u043E\u0438\u0442\u0435:
- \u041A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u044E\u0441\u0442\u0433\u0430\u043B\u044C\u0442\u0435\u0440\u043E\u0432
- \u041F\u043E\u0448\u0438\u0432 \u0442\u0440\u0443\u0441\u043E\u0432 \u0438 \u043F\u0430\u043D\u0442\u0438
- \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u0440\u0441\u0435\u0442\u043E\u0432
- \u0420\u0430\u0431\u043E\u0442\u0443 \u0441 \u043A\u0440\u0443\u0436\u0435\u0432\u043E\u043C \u0438 \u044D\u043B\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u043C\u0438 \u0442\u043A\u0430\u043D\u044F\u043C\u0438

\u041E\u0441\u043E\u0431\u043E\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0443\u0434\u0435\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0439 \u043F\u043E\u0441\u0430\u0434\u043A\u0435 \u0438 \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0443.`,
    image: "https://images.unsplash.com/photo-1617331721458-bd3bd1aa1dd8?w=800",
    includes: ["\u0411\u044E\u0441\u0442\u0433\u0430\u043B\u044C\u0442\u0435\u0440\u044B", "\u0422\u0440\u0443\u0441\u044B", "\u041A\u043E\u0440\u0441\u0435\u0442\u044B", "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u043E\u0441\u0430\u0434\u043A\u0430", "\u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u043A\u0440\u0443\u0436\u0435\u0432\u043E\u043C"],
    duration: "1.5 \u043C\u0435\u0441\u044F\u0446\u0430",
    lessonsCount: 12,
    isPublished: true,
    createdAt: "2024-02-01"
  }
];
const _slug__get = defineEventHandler((event) => {
  const slug = getRouterParam(event, "slug");
  const course = courses.find((c) => c.slug === slug);
  if (!course) {
    throw createError({
      statusCode: 404,
      statusMessage: "Course not found"
    });
  }
  return course;
});

const _slug__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _slug__get
}, Symbol.toStringTag, { value: 'Module' }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "noreply@kroyfit.ru",
      to,
      subject,
      html
    });
    console.log("Email \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 email:", error);
    return { success: false, error };
  }
}
function welcomeEmailTemplate(name) {
  return `
    <h2>\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0443 \u041A\u0440\u043E\u044F! \u{1F44B}</h2>
    <p>\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!</p>
    <p>\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E. \u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442.</p>
    <p><a href="https://kroyfit.ru/admin">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</a></p>
    <hr>
    <p>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0438 \u041A\u0440\u043E\u044F</p>
  `;
}
function purchaseEmailTemplate(name, courseName, amount) {
  return `
    <h2>\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443! \u{1F389}</h2>
    <p>\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!</p>
    <p>\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u043B\u0438 \u043A\u0443\u0440\u0441 <strong>${courseName}</strong></p>
    <p><strong>\u0421\u0443\u043C\u043C\u0430:</strong> ${amount} \u20BD</p>
    <p>\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043A\u0443\u0440\u0441\u0443 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D. \u0412\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u0443\u044E VK \u0433\u0440\u0443\u043F\u043F\u0443 \u043A\u0443\u0440\u0441\u0430.</p>
    <p><a href="https://kroyfit.ru/admin">\u041D\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435</a></p>
    <hr>
    <p>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0438 \u041A\u0440\u043E\u044F</p>
  `;
}
function vkGroupEmailTemplate(name, groupName) {
  return `
    <h2>\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 VK \u0433\u0440\u0443\u043F\u043F\u0443! \u{1F465}</h2>
    <p>\u041F\u0440\u0438\u0432\u0435\u0442, ${name}!</p>
    <p>\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u0437\u0430\u043A\u0440\u044B\u0442\u0443\u044E VK \u0433\u0440\u0443\u043F\u043F\u0443: <strong>${groupName}</strong></p>
    <p><a href="https://vk.com">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0412\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0435</a></p>
    <hr>
    <p>\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C,<br>\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0438 \u041A\u0440\u043E\u044F</p>
  `;
}

const send_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { type, to, name, courseName, amount } = body;
  if (!type || !to) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  let subject = "";
  let html = "";
  if (type === "welcome") {
    subject = "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0443 \u041A\u0440\u043E\u044F!";
    html = welcomeEmailTemplate(name || "\u0423\u0447\u0435\u043D\u0438\u043A");
  } else if (type === "purchase") {
    subject = `\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043A\u0443\u0440\u0441\u0430 "${courseName}"!`;
    html = purchaseEmailTemplate(name || "\u0423\u0447\u0435\u043D\u0438\u043A", courseName || "\u041A\u0443\u0440\u0441", amount || 0);
  } else {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0442\u0438\u043F email"
    });
  }
  try {
    const result = await sendEmail(to, subject, html);
    if (result.success) {
      return { success: true, message: "Email \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D", messageId: result.messageId };
    } else {
      throw createError({
        statusCode: 500,
        message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 email"
      });
    }
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 email"
    });
  }
});

const send_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: send_post
}, Symbol.toStringTag, { value: 'Module' }));

const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId, courseId, amount } = body;
  if (!userId || !courseId || !amount) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"
    });
  }
  try {
    const purchaseId = crypto.randomUUID();
    await db.insert(purchases).values({
      id: purchaseId,
      userId,
      courseId,
      amount,
      status: "pending"
    });
    return {
      success: true,
      purchaseId,
      message: "\u041F\u043B\u0430\u0442\u0435\u0436 \u0441\u043E\u0437\u0434\u0430\u043D (\u0442\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0440\u0435\u0436\u0438\u043C)"
      // paymentUrl: payment.confirmation.confirmation_url,
    };
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
    });
  }
});

const create_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: create_post
}, Symbol.toStringTag, { value: 'Module' }));

const webhook_post = defineEventHandler(async (event) => {
  var _a, _b;
  const body = await readBody(event);
  if (body.event === "payment.succeeded") {
    const { object } = body;
    const purchaseId = (_a = object.metadata) == null ? void 0 : _a.purchaseId;
    if (purchaseId) {
      try {
        const purchase = await db.query.purchases.findFirst({
          where: eq(purchases.id, purchaseId)
        });
        if (!purchase) {
          return { success: false, message: "\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" };
        }
        await db.update(purchases).set({ status: "paid", paymentId: object.id }).where(eq(purchases.id, purchaseId));
        const user = await db.query.users.findFirst({
          where: eq(users.id, purchase.userId)
        });
        const course = await db.query.courses.findFirst({
          where: eq(courses$1.id, purchase.courseId)
        });
        if (user && course) {
          if (user.email) {
            await sendEmail(
              user.email,
              `\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043A\u0443\u0440\u0441\u0430 "${course.title}"!`,
              purchaseEmailTemplate(user.name, course.title, purchase.amount)
            );
          }
          if (user.vkId && course.vkGroupId) {
            try {
              const vkGroup = await db.query.vkGroups.findFirst({
                where: eq(vkGroups.courseSlug, course.slug)
              });
              if (vkGroup && vkGroup.token) {
                const vkResponse = await fetch("https://api.vk.com/method/groups.invite", {
                  method: "POST",
                  body: new URLSearchParams({
                    group_id: vkGroup.vkId,
                    user_id: user.vkId,
                    access_token: vkGroup.token,
                    v: "5.131"
                  })
                });
                const vkData = await vkResponse.json();
                if (!vkData.error) {
                  console.log(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${user.vkId} \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 ${vkGroup.name}`);
                  if (user.email) {
                    await sendEmail(
                      user.email,
                      `\u0412\u044B \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 VK \u0433\u0440\u0443\u043F\u043F\u0443 "${vkGroup.name}"!`,
                      vkGroupEmailTemplate(user.name, vkGroup.name)
                    );
                  }
                } else {
                  console.error("\u041E\u0448\u0438\u0431\u043A\u0430 VK API:", vkData.error);
                }
              }
            } catch (vkError) {
              console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432 VK \u0433\u0440\u0443\u043F\u043F\u0443:", vkError);
            }
          }
        }
        console.log(`\u041F\u043B\u0430\u0442\u0435\u0436 ${object.id} \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D`);
        return { success: true, message: "\u041F\u043B\u0430\u0442\u0435\u0436 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D" };
      } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", e);
        throw createError({
          statusCode: 500,
          message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
        });
      }
    }
  }
  if (body.event === "payment.canceled") {
    const { object } = body;
    const purchaseId = (_b = object.metadata) == null ? void 0 : _b.purchaseId;
    if (purchaseId) {
      try {
        await db.update(purchases).set({ status: "cancelled" }).where(eq(purchases.id, purchaseId));
        console.log(`\u041F\u043B\u0430\u0442\u0435\u0436 ${object.id} \u043E\u0442\u043C\u0435\u043D\u0435\u043D`);
        return { success: true, message: "\u041F\u043B\u0430\u0442\u0435\u0436 \u043E\u0442\u043C\u0435\u043D\u0435\u043D" };
      } catch (e) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043C\u0435\u043D\u044B \u043F\u043B\u0430\u0442\u0435\u0436\u0430:", e);
      }
    }
  }
  return { success: true };
});

const webhook_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: webhook_post
}, Symbol.toStringTag, { value: 'Module' }));

const plan = defineEventHandler(async (event) => {
  const method = event.method;
  const planPath = join(process.cwd(), "PLAN.md");
  if (method === "GET") {
    try {
      const content = readFileSync(planPath, "utf-8");
      return { success: true, content };
    } catch (e) {
      throw createError({
        statusCode: 404,
        message: "PLAN.md \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"
      });
    }
  }
  if (method === "POST") {
    const body = await readBody(event);
    if (!body.content) {
      throw createError({
        statusCode: 400,
        message: "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D"
      });
    }
    try {
      writeFileSync(planPath, body.content, "utf-8");
      return { success: true, message: "\u041F\u043B\u0430\u043D \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D" };
    } catch (e) {
      throw createError({
        statusCode: 500,
        message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u0430"
      });
    }
  }
  throw createError({
    statusCode: 405,
    message: "\u041C\u0435\u0442\u043E\u0434 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F"
  });
});

const plan$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: plan
}, Symbol.toStringTag, { value: 'Module' }));

const siteInfo_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/site-info - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0441\u0430\u0439\u0442\u0435");
  try {
    const [general] = await db.select().from(generalSettings).limit(1);
    const [seo] = await db.select().from(seoSettings).limit(1);
    const coursesList = await db.select().from(courses$1);
    console.log("\u2705 [API] \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0441\u0430\u0439\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430");
    return {
      success: true,
      siteName: (general == null ? void 0 : general.siteName) || "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F",
      seo: {
        title: (seo == null ? void 0 : seo.title) || "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        description: (seo == null ? void 0 : seo.description) || "\u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        keywords: (seo == null ? void 0 : seo.keywords) || "\u043A\u0440\u043E\u0439\u043A\u0430, \u0448\u0438\u0442\u044C\u0435, \u043A\u0443\u0440\u0441\u044B"
      },
      courses: coursesList
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0441\u0430\u0439\u0442\u0435:", e);
    return {
      success: true,
      siteName: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F",
      seo: {
        title: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        description: "\u041A\u0443\u0440\u0441\u044B \u043A\u0440\u043E\u0439\u043A\u0438 \u0438 \u0448\u0438\u0442\u044C\u044F",
        keywords: "\u043A\u0440\u043E\u0439\u043A\u0430, \u0448\u0438\u0442\u044C\u0435, \u043A\u0443\u0440\u0441\u044B"
      },
      courses: []
    };
  }
});

const siteInfo_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: siteInfo_get
}, Symbol.toStringTag, { value: 'Module' }));

const courses_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/user/courses - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");
  const userId = "1";
  try {
    const userPurchases = await db.select({
      courseId: purchases.courseId
    }).from(purchases).where(eq(purchases.userId, userId));
    const courseIds = userPurchases.map((p) => p.courseId);
    if (courseIds.length === 0) {
      return { success: true, courses: [] };
    }
    const allCourses = await db.select().from(courses$1);
    const userCourses = allCourses.filter((c) => courseIds.includes(c.id));
    console.log("\u2705 [API] \u041A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E:", userCourses.length);
    return { success: true, courses: userCourses };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u043E\u0432"
    });
  }
});

const courses_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: courses_get
}, Symbol.toStringTag, { value: 'Module' }));

const users_get = defineEventHandler(async (event) => {
  console.log("\u{1F535} [API] GET /api/users - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
  try {
    const usersList = await db.select().from(users);
    const usersWithCourses = await Promise.all(
      usersList.map(async (user) => {
        var _a;
        const coursesCount = await db.select({ count: count() }).from(purchases).where(eq(purchases.userId, user.id));
        return {
          ...user,
          coursesCount: ((_a = coursesCount[0]) == null ? void 0 : _a.count) || 0
        };
      })
    );
    console.log("\u2705 [API] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E:", usersWithCourses.length);
    return { success: true, users: usersWithCourses };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"
    });
  }
});

const users_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: users_get
}, Symbol.toStringTag, { value: 'Module' }));

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: "ID \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D" });
  }
  console.log("\u{1F535} [API] GET /api/users/:id - \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", id);
  try {
    const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    if (!user) {
      throw createError({ statusCode: 404, message: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" });
    }
    console.log("\u2705 [API] \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D:", user.name);
    return user;
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
    });
  }
});

const _id__get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: _id__get
}, Symbol.toStringTag, { value: 'Module' }));

const index_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { vkId, name, email, avatar } = body;
  if (!name) {
    throw createError({
      statusCode: 400,
      message: "\u0418\u043C\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
    });
  }
  try {
    const id = crypto.randomUUID();
    await db.insert(users).values({
      id,
      vkId: vkId || null,
      name,
      email: email || null,
      avatar: avatar || null
    });
    return { success: true, message: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u043D", id };
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F:", e);
    throw createError({
      statusCode: 500,
      message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
    });
  }
});

const index_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: index_post
}, Symbol.toStringTag, { value: 'Module' }));

const invite_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { userId, courseSlug, vkId } = body;
  if (!userId || !courseSlug || !vkId) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B: userId, courseSlug, vkId"
    });
  }
  const groupSettings = await getGroupSettings(courseSlug);
  if (!groupSettings || !groupSettings.vkId || !groupSettings.token) {
    throw createError({
      statusCode: 404,
      message: "\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A \u0434\u043B\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043A\u0443\u0440\u0441\u0430 \u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D\u0430"
    });
  }
  try {
    const response = await $fetch("https://api.vk.com/method/groups.invite", {
      method: "POST",
      body: new URLSearchParams({
        group_id: groupSettings.vkId,
        user_id: vkId,
        access_token: groupSettings.token,
        v: "5.131"
      })
    });
    if (response.error) {
      throw new Error(response.error.error_msg || "\u041E\u0448\u0438\u0431\u043A\u0430 VK API");
    }
    return {
      success: true,
      message: `\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ${vkId} \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 "${groupSettings.name}"`,
      data: response.response
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: `\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0432 \u0433\u0440\u0443\u043F\u043F\u0443: ${error.message}`
    });
  }
});
async function getGroupSettings(courseSlug) {
  const groups = [
    {
      courseSlug: "tekhnologiya-poshiva",
      vkId: "123456",
      name: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u043F\u043E\u0448\u0438\u0432\u0430",
      token: process.env.VK_COMMUNITY_TOKEN || ""
    },
    {
      courseSlug: "master-konstruirovaniya",
      vkId: "234567",
      name: "\u0413\u0435\u043D\u0435\u0442\u0438\u043A\u0430 \u041A\u0440\u043E\u044F \u2014 \u041C\u0430\u0441\u0442\u0435\u0440 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
      token: process.env.VK_COMMUNITY_TOKEN || ""
    }
  ];
  return groups.find((g) => g.courseSlug === courseSlug) || null;
}

const invite_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: invite_post
}, Symbol.toStringTag, { value: 'Module' }));

const resolveId_post = defineEventHandler(async (event) => {
  const { screenName } = await readBody(event);
  if (!screenName) {
    throw createError({ statusCode: 400, message: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D screen_name" });
  }
  console.log("\u{1F50D} [API] \u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 VK ID \u0434\u043B\u044F:", screenName);
  try {
    const settings = await $fetch("/api/admin/settings/all").catch(() => null);
    if (/^\d+$/.test(screenName)) {
      return { success: true, id: screenName, type: "group" };
    }
    const vkToken = process.env.VK_SERVICE_TOKEN || "";
    if (!vkToken) {
      return {
        success: false,
        error: "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F VK access_token \u0434\u043B\u044F \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u044F ID \u043F\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u043C\u0443 \u0438\u043C\u0435\u043D\u0438",
        hint: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ID \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043D\u0430 https://regvk.com/id/",
        manualUrl: `https://regvk.com/id/`
      };
    }
    const vkResponse = await $fetch(`https://api.vk.com/method/utils.resolveScreenName`, {
      params: {
        screen_name: screenName,
        access_token: vkToken,
        v: "5.131"
      }
    });
    if (vkResponse.response && vkResponse.response.object_id) {
      const id = vkResponse.response.object_id;
      const type = vkResponse.response.type;
      console.log("\u2705 [API] VK ID \u043D\u0430\u0439\u0434\u0435\u043D:", { id, type });
      return { success: true, id: String(id), type };
    }
    return {
      success: false,
      error: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C ID",
      hint: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0438 \u0438\u043B\u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ID \u043D\u0430 https://regvk.com/id/",
      manualUrl: `https://regvk.com/id/`
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F VK ID:", e);
    return {
      success: false,
      error: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043A VK API",
      hint: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ID \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043D\u0430 https://regvk.com/id/",
      manualUrl: `https://regvk.com/id/`
    };
  }
});

const resolveId_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: resolveId_post
}, Symbol.toStringTag, { value: 'Module' }));

const testConnection_post = defineEventHandler(async (event) => {
  var _a;
  const { vkId, token } = await readBody(event);
  if (!vkId || !token) {
    throw createError({
      statusCode: 400,
      message: "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D ID \u0433\u0440\u0443\u043F\u043F\u044B \u0438\u043B\u0438 \u0442\u043E\u043A\u0435\u043D"
    });
  }
  console.log("\u{1F9EA} [API] \u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A VK API");
  console.log("   \u0413\u0440\u0443\u043F\u043F\u0430:", vkId);
  console.log("   \u0422\u043E\u043A\u0435\u043D:", token.substring(0, 20) + "...");
  try {
    const vkResponse = await $fetch("https://api.vk.com/method/groups.getById", {
      method: "POST",
      body: new URLSearchParams({
        group_id: vkId,
        access_token: token,
        v: "5.131"
      })
    });
    if (vkResponse.error) {
      const errorCode = vkResponse.error.error_code;
      const errorMsg = vkResponse.error.error_msg;
      console.error("\u274C [API] VK API \u0432\u0435\u0440\u043D\u0443\u043B \u043E\u0448\u0438\u0431\u043A\u0443:", { code: errorCode, msg: errorMsg });
      let userMessage = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A VK API";
      switch (errorCode) {
        case 5:
          userMessage = "\u0422\u043E\u043A\u0435\u043D \u043D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u0435\u043D \u0438\u043B\u0438 \u0438\u0441\u0442\u0435\u043A";
          break;
        case 15:
          userMessage = "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0433\u0440\u0443\u043F\u043F\u0435. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u0447\u0442\u043E \u0442\u043E\u043A\u0435\u043D \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u043E\u0442 \u0438\u043C\u0435\u043D\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430";
          break;
        case 100:
          userMessage = "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ID \u0433\u0440\u0443\u043F\u043F\u044B";
          break;
        case 113:
          userMessage = "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 ID \u0433\u0440\u0443\u043F\u043F\u044B";
          break;
        default:
          userMessage = `\u041E\u0448\u0438\u0431\u043A\u0430 VK API (${errorCode}): ${errorMsg}`;
      }
      return {
        success: false,
        error: userMessage,
        vkError: { code: errorCode, message: errorMsg }
      };
    }
    if (vkResponse.response && vkResponse.response.length > 0) {
      const group = vkResponse.response[0];
      console.log("\u2705 [API] \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E! \u0413\u0440\u0443\u043F\u043F\u0430:", group.name);
      return {
        success: true,
        groupName: group.name,
        groupId: group.id,
        membersCount: group.members_count || "\u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E",
        isClosed: group.is_closed,
        type: group.type
      };
    }
    return {
      success: false,
      error: "\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0438\u043B\u0438 API \u0432\u0435\u0440\u043D\u0443\u043B \u043F\u0443\u0441\u0442\u043E\u0439 \u043E\u0442\u0432\u0435\u0442"
    };
  } catch (e) {
    console.error("\u274C [API] \u041E\u0448\u0438\u0431\u043A\u0430 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F:", e);
    if ((_a = e.message) == null ? void 0 : _a.includes("fetch failed")) {
      return {
        success: false,
        error: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A VK API. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435."
      };
    }
    return {
      success: false,
      error: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438: " + (e.message || "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430")
    };
  }
});

const testConnection_post$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: testConnection_post
}, Symbol.toStringTag, { value: 'Module' }));

const sitemap_xml = defineEventHandler(async (event) => {
  try {
    const allCourses = await db.select().from(courses$1);
    const baseUrl = "https://kroyfit.ru";
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    xml += `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
    for (const course of allCourses) {
      xml += `  <url>
    <loc>${baseUrl}/courses/${course.slug}</loc>
    <lastmod>${new Date(course.createdAt || /* @__PURE__ */ new Date()).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    }
    xml += `  <url>
    <loc>${baseUrl}/profile</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    xml += `  <url>
    <loc>${baseUrl}/cabinet</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    xml += "</urlset>";
    setHeader(event, "Content-Type", "application/xml");
    return xml;
  } catch (e) {
    console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 sitemap:", e);
    return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>';
  }
});

const sitemap_xml$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sitemap_xml
}, Symbol.toStringTag, { value: 'Module' }));

function renderPayloadResponse(ssrContext) {
	return {
		body: encodeForwardSlashes(stringify(splitPayload(ssrContext).payload, ssrContext["~payloadReducers"])) ,
		statusCode: getResponseStatus(ssrContext.event),
		statusMessage: getResponseStatusText(ssrContext.event),
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(opts.data, opts.ssrContext["~payloadReducers"])) : "";
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	{
		payload.id = "__NUXT_DATA__";
	}
	if (opts.src) {
		payload["data-src"] = opts.src;
	}
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, ...initial } = ssrContext.payload;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload: {
			data,
			prerenderedAt
		}
	};
}

const renderSSRHeadOptions = {"omitLineBreaks":true};

// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__buildAssetsURL = buildAssetsURL;
// @ts-expect-error private property consumed by vite-generated url helpers
globalThis.__publicAssetsURL = publicAssetsURL;
const HAS_APP_TELEPORTS = !!(appTeleportAttrs.id);
const APP_TELEPORT_OPEN_TAG = HAS_APP_TELEPORTS ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = HAS_APP_TELEPORTS ? `</${appTeleportTag}>` : "";
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
const handler = defineRenderHandler(async (event) => {
	const nitroApp = useNitroApp();
	// Whether we're rendering an error page
	const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
	if (ssrError && !("__unenv__" in event.node.req)) {
		throw createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error",
			message: "Page Not Found: /__nuxt_error"
		});
	}
	// Initialize ssr context
	const ssrContext = createSSRContext(event);
	// needed for hash hydration plugin to work
	const headEntryOptions = { mode: "server" };
	ssrContext.head.push(appHead, headEntryOptions);
	if (ssrError) {
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		const status = ssrError.status || ssrError.statusCode;
		if (status) {
			// eslint-disable-next-line @typescript-eslint/no-deprecated
			ssrError.status = ssrError.statusCode = Number.parseInt(status);
		}
		if (typeof ssrError.data === "string") {
			try {
				ssrError.data = destr(ssrError.data);
			} catch {}
		}
		setSSRError(ssrContext, ssrError);
	}
	// Get route options (for `ssr: false`, `isr`, `cache` and `noScripts`)
	const routeOptions = getRouteRules(event);
	// Whether we are prerendering route or using ISR/SWR caching
	const _PAYLOAD_EXTRACTION = !ssrContext.noSSR && (NUXT_RUNTIME_PAYLOAD_EXTRACTION);
	// When NUXT_PAYLOAD_INLINE is true (payloadExtraction: 'client'), we inline the full payload
	// in the HTML to avoid a separate _payload.json fetch on initial load (which would trigger a
	// second render or lambda invocation). The _payload.json endpoint still works for client-side nav.
	const _PAYLOAD_INLINE = !_PAYLOAD_EXTRACTION || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (_PAYLOAD_EXTRACTION || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		const url = ssrContext.url.substring(0, ssrContext.url.lastIndexOf("/")) || "/";
		ssrContext.url = url;
		event._path = event.node.req.url = url;
	}
	if (routeOptions.ssr === false) {
		ssrContext.noSSR = true;
	}
	const payloadURL = _PAYLOAD_EXTRACTION ? joinURL(ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL, ssrContext.url.replace(/\?.*$/, ""), PAYLOAD_FILENAME) + "?" + ssrContext.runtimeConfig.app.buildId : undefined;
	// Render app
	const renderer = await getRenderer(ssrContext);
	const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
		// We use error to bypass full render if we have an early response we can make
		// TODO: remove _renderResponse in nuxt v5
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") {
			return {};
		}
		// Use explicitly thrown error in preference to subsequent rendering errors
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	// Render inline styles
	// TODO: remove _renderResponse in nuxt v5
	const inlinedStyles = [];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) {
		// TODO: remove _renderResponse in nuxt v5
		return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	}
	// Handle errors
	if (ssrContext.payload?.error && !ssrError) {
		throw ssrContext.payload.error;
	}
	// Directly render payload routes
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext);
		return response;
	}
	const NO_SCRIPTS = routeOptions.noScripts;
	// Setup head
	const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
	// 1. Preload payloads and app manifest
	// Skip preload when inlining full payload in HTML (no separate fetch needed for initial load)
	if (_PAYLOAD_EXTRACTION && !_PAYLOAD_INLINE && !NO_SCRIPTS) {
		ssrContext.head.push({ link: [{
			rel: "preload",
			as: "fetch",
			crossorigin: "anonymous",
			href: payloadURL
		} ] }, headEntryOptions);
	}
	// 2. Styles
	if (inlinedStyles.length) {
		ssrContext.head.push({ style: inlinedStyles });
	}
	const link = [];
	for (const resource of Object.values(styles)) {
		// Do not add links to resources that are inlined (vite v5+)
		if ("inline" in getQuery(resource.file)) {
			continue;
		}
		// Add CSS links in <head> for CSS files
		// - in production
		// - in dev mode when not rendering an island
		link.push({
			rel: "stylesheet",
			href: renderer.rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (link.length) {
		ssrContext.head.push({ link }, headEntryOptions);
	}
	if (!NO_SCRIPTS) {
		// 4. Resource Hints
		// Remove lazy hydrated modules from ssrContext.modules so they don't get preloaded
		// (CSS links are already added above, this only affects JS preloads)
		if (ssrContext["~lazyHydratedModules"]) {
			for (const id of ssrContext["~lazyHydratedModules"]) {
				ssrContext.modules?.delete(id);
			}
		}
		ssrContext.head.push({ link: getPreloadLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		ssrContext.head.push({ link: getPrefetchLinks(ssrContext, renderer.rendererContext) }, headEntryOptions);
		// 5. Payloads
		ssrContext.head.push({ script: _PAYLOAD_INLINE ? renderPayloadJsonScript({
			ssrContext,
			data: ssrContext.payload
		})  : renderPayloadJsonScript({
			ssrContext,
			data: splitPayload(ssrContext).initial,
			src: payloadURL
		})  }, {
			...headEntryOptions,
			tagPosition: "bodyClose",
			tagPriority: "high"
		});
	}
	// 6. Scripts
	if (!routeOptions.noScripts) {
		const tagPosition = "head";
		ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
			type: resource.module ? "module" : null,
			src: renderer.rendererContext.buildAssetsURL(resource.file),
			defer: resource.module ? null : true,
			tagPosition,
			crossorigin: ""
		})) }, headEntryOptions);
	}
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	// Create render context
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([headTags]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , APP_TELEPORT_OPEN_TAG + (HAS_APP_TELEPORTS ? joinTags([ssrContext.teleports?.[`#${appTeleportAttrs.id}`]]) : "") + APP_TELEPORT_CLOSE_TAG],
		bodyAppend: [bodyTags]
	};
	// Allow hooking into the rendered result
	await nitroApp.hooks.callHook("render:html", htmlContext, { event });
	// Construct HTML response
	return {
		body: renderHTMLDocument(htmlContext),
		statusCode: getResponseStatus(event),
		statusMessage: getResponseStatusText(event),
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
});
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) {
			result.push(chunk);
		}
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) {
		return "";
	}
	return " " + chunks.join(" ");
}
function renderHTMLDocument(html) {
	return "<!DOCTYPE html>" + `<html${joinAttrs(html.htmlAttrs)}>` + `<head>${joinTags(html.head)}</head>` + `<body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>` + "</html>";
}

const renderer = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
