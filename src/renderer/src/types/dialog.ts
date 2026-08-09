import { ReactNode } from "react";

export interface DialogButton {
    label: string;
    variant?: "primary" | "secondary" | "danger" | "outline";
    onClick: () => void;
}

export interface DialogProps {
    open: boolean;
    title: string;

    icon?: ReactNode;

    children: ReactNode;

    headerButtons?: DialogButton[];

    footerButtons?: DialogButton[];

    footerDescription?: string;

    onClose?: () => void;
}