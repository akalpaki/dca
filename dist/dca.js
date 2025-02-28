"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// dca.ts
var dca_exports = {};
__export(dca_exports, {
  AssertionError: () => AssertionError,
  assert: () => assert,
  deepEqual: () => deepEqual,
  equal: () => equal,
  greaterThan: () => greaterThan,
  lessThan: () => lessThan,
  notEqual: () => notEqual
});
module.exports = __toCommonJS(dca_exports);
var AssertionError = class _AssertionError extends Error {
  constructor(errorMessage) {
    const errorText = errorMessage ? `${errorMessage}` : "an assertion failed";
    super(errorText);
    this.name = "AssertionError";
    Error.captureStackTrace(this, _AssertionError);
  }
};
function assert(condition, errorMessage) {
  if (!condition) {
    throw new AssertionError(errorMessage ? errorMessage : void 0);
  }
}
function equal(a, b) {
  if (a !== b) {
    throw new AssertionError(`${a} is not equal to ${b}`);
  }
}
function notEqual(a, b) {
  if (a === b) {
    throw new AssertionError(`${a} is equal to ${b}`);
  }
}
function greaterThan(a, b) {
  if (!(a > b)) {
    throw new AssertionError(`${a} is not greater than ${b}`);
  }
}
function lessThan(a, b) {
  if (!(a < b)) {
    throw new AssertionError(`${a} is greater than ${b}`);
  }
}
function deepEqual(a, b) {
  const fail = () => {
    throw new AssertionError(`deepEqual: values are not equal!`);
  };
  if (typeof a !== typeof b) {
    throw new AssertionError(
      `deepEqual: ${a} and ${b} are not the same type!`
    );
  }
  if (typeof a !== "object") {
    if (a !== b) {
      fail();
    }
    return;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      fail();
    }
    for (let i = 0; i < a.length; i++) {
      deepEqual(a[i], b[i]);
    }
  }
  const aProps = Object.keys(a);
  const bProps = Object.keys(b);
  if (aProps.length !== bProps.length) {
    fail();
  }
  for (const key of aProps) {
    if (!Object.hasOwn(b, key)) {
      fail();
    } else {
      deepEqual(a[key], b[key]);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AssertionError,
  assert,
  deepEqual,
  equal,
  greaterThan,
  lessThan,
  notEqual
});
