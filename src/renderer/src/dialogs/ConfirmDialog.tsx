import Dialog from "../components/Dialog/Dialogs";
import { DialogButton } from "../types/dialog";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function ConfirmDialog({ open, onClose }: Props) {
    const headerButtons: DialogButton[] = [
        {
            label: "Close",
            onClick: onClose,
            variant: "danger"
        }
    ];

    const footerButtons: DialogButton[] = [
        {
            label: "Cancel",
            onClick: onClose,
            variant: "secondary"
        },
        {
            label: "Confirm",
            onClick: () => {
                alert("Confirmed!");
                onClose();
            },
            variant: "primary"
        }
    ];

    return (
        <Dialog
            open={open}
            title="Confirmation"
            icon=""
            headerButtons={headerButtons}
            footerButtons={footerButtons}
        >
            <p>Are you sure you want to continue?</p>
        </Dialog>
    );
}