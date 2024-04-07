import { isGASEnvironment } from './utils/is-gas-environment';
import { FunctionHost } from './classes/function-host';
import { GASPromises } from './classes/gas-promises';
import type { ServerFunctions, FunctionMap } from './types/functions';
import { MockFunctions } from './classes/mock-functions';

class GASClient<FM extends FunctionMap = {}> {
  private _functionHost: FunctionHost<FM>;

  constructor(mockFunctionMap: FM) {
    if (isGASEnvironment()) {
      this._functionHost = new GASPromises();
    } else {
      this._functionHost = new MockFunctions<FM>(mockFunctionMap);
    }
  }

  get serverFunctions(): ServerFunctions<FM> {
    return this._functionHost.serverFunctions;
  }
}

export { GASClient, type ServerFunctions };
