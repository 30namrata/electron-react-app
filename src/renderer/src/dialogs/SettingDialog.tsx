import Dialog from "../components/Dialog/Dialogs";
import { DialogButton } from "../types/dialog";

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function SettingsDialog({ open, onClose }: Props) {
    const footerButtons: DialogButton[] = [
        {
            label: "Cancel",
            onClick: onClose,
            variant: "secondary"
        },
        {
            label: "Save",
            onClick: () => {
                new window.Notification("Settings Saved", {
                    body: "Your application preferences have been updated."
                });
                onClose();
            },
            variant: "primary"
        }
    ];

    return (
        <Dialog
            open={open}
            title="Settings"
            footerButtons={footerButtons}
            footerDescription="Application preferences"
        >
            <div className="space-y-4">
                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Enable Notifications
                </label>

                <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Dark Mode
                </label>
            </div>
        </Dialog>
    );
}