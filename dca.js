// TODO: JSDoc
export class AssertionError extends Error {
    constructor(errorMessage) {
        const errorText = errorMessage
            ? `${errorMessage}`
            : "an assertion failed";
        super(errorText);
        this.name = "AssertionError";
        Error.captureStackTrace(this, AssertionError);
    }
}

export function assert(condition, errorMessage) {
    if (!condition) {
        throw new AssertionError(errorMessage ? errorMessage : undefined);
    }
}

export function equal(a, b) {
    if (a !== b) {
        throw new AssertionError(`${a} is not equal to ${b}`);
    }
}

export function notEqual(a, b) {
    if (a === b) {
        throw new AssertionError(`${a} is equal to ${b}`);
    }
}

export function greaterThan(a, b) {
    if (!(a > b)) {
        throw new AssertionError(`${a} is not greater than ${b}`);
    }
}

export function lessThan(a, b) {
    if (!(a < b)) {
        throw new AssertionError(`${a} is greater than ${b}`);
    }
}

export function deepEqual(a, b) {
    const fail = () => {
        throw new AssertionError(`deepEqual: values are not equal!`);
    };

    if (typeof a !== typeof b) {
        throw new AssertionError(
            `deepEqual: ${a} and ${b} are not the same type!`,
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
