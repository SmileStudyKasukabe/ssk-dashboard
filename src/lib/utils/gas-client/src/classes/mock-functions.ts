import { FunctionHost } from './function-host';
import type { FunctionMap, ServerFunctions } from '../types/functions';

class MockFunctions<FM extends FunctionMap> extends FunctionHost<FM> {
  public _serverFunctions: ServerFunctions<FM> = {} as ServerFunctions<FM>;

  constructor(mockFunctionMap: FM) {
    super();

    for (const key in mockFunctionMap) {
      this._serverFunctions[key] = mockFunctionMap[key];
    }
  }
}

export { MockFunctions };
