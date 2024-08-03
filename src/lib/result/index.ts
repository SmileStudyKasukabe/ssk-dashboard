export type Result<T, E> = Ok<T, E> | Err<T, E>;

interface IResult<T, E> {
    isOk(): this is Ok<T, E>;
    isErr(): this is Err<T, E>;
    expect(message: string): T;
    unwrapOr(value: T): T;
}

export class Ok<T, E> implements IResult<T, E> {
    constructor(public value: T) {}

    isOk(): this is Ok<T, E> {
        return true;
    }

    isErr(): this is Err<T, E> {
        return false;
    }

    expect(_: string): T {
        return this.value;
    }

    unwrapOr(_: T): T {
        return this.value;
    }
}

export class Err<T, E> implements IResult<T, E> {
    constructor(public error: E) {}

    isOk(): this is Ok<T, E> {
        return false;
    }
    isErr(): this is Err<T, E> {
        return true;
    }
    expect(message: string): T {
        throw new Error(message);
    }
    unwrapOr(value: T): T {
        return value;
    }
}

export function ok<T, E>(value: T) {
    return new Ok<T, E>(value);
}

export function err<T, E>(error: E) {
    return new Err<T, E>(error);
}
