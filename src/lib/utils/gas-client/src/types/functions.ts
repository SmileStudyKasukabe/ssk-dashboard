type FunctionMap = Record<string, (...args: any[]) => any>;

type Promisified<Fn extends (...args: any[]) => any> = (...params: Parameters<Fn>) => Promise<ReturnType<Fn>>;

type RecognizedServerFunctions<FM extends FunctionMap> = {
  [FnName in keyof FM]: Promisified<FM[FnName]>;
};

type UnrecognizedServerFunctions = {
  [key: string]: (...args: any[]) => Promise<any>;
};

type ServerFunctions<FM extends FunctionMap> = RecognizedServerFunctions<FM> & UnrecognizedServerFunctions;

export type { FunctionMap, ServerFunctions };
