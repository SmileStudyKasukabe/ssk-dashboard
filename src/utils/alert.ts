import { ALERT_TYPES } from "../constants/alert-types";
import type { AlertType } from "../types/alert";


export function isAlertType(str: string): str is AlertType {
    return ALERT_TYPES.includes(str as never);
}
