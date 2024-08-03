import { ALERT_TYPES } from "../constants/alert-types";

export type AlertType = (typeof ALERT_TYPES)[number];

export type MessageContent = {
    title: string;
    message: string;
    alertType: AlertType;
};

export type OpenModal = (
    icon: AlertType,
    title: string,
    content: string
) => void;
