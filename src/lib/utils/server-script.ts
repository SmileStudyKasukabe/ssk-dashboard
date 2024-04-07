import * as mockFunctions from "../../server/mock";
import * as server from "../../server";
import { GASClient } from "./gas-client";

export const { serverFunctions } = new GASClient<typeof server>(mockFunctions);
