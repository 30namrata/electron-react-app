import Dialog from "../components/Dialog/Dialogs";
import { DialogButton } from "../types/dialog";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function InfoDialog({ open, onClose }: Props) {
    const headerButtons: DialogButton[] = [
        {
            label: "Close",
            onClick: onClose,
            variant: "danger"
        }
    ];

    const footerButtons: DialogButton[] = [
        {
            label: "OK",
            onClick: onClose,
            variant: "primary"
        }
    ];

    return (
        <Dialog
            open={open}
            title="Information"
            headerButtons={headerButtons}
            footerButtons={footerButtons}
            footerDescription="This is a simple information dialog."
        >
            <p>This dialog displays information to the user.</p>
        </Dialog>
    );
}