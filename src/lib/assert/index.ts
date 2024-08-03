export function assert(v: unknown, message?: string): asserts v {
    if (!v) {
        throw new Error(message ?? "Assertion Error");
    }
}
