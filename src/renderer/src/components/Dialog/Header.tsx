import { DialogButton } from "@renderer/types/dialog";
import IconText from "./IconText";
import ButtonGroup from "./ButtonGroup";

interface HeaderProps {
    title: string
    icon?: React.ReactNode
    buttons: DialogButton[]
}

const Header = ({ title, icon, buttons }: HeaderProps): React.JSX.Element => {
    return (
        <div className="dialog-header cursor-move flex items-center justify-between px-5 py-4 border-b gap-4">
            <IconText icon={icon} title={title} />
            {buttons.length > 0 && (
                <ButtonGroup buttons={buttons} />
            )}
        </div>
    );
}

export default Header;