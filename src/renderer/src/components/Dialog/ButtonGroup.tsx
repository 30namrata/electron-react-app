import type { DialogButton } from "../../types/dialog";
import Button from "./Button";

interface Props {
    buttons: DialogButton[];
}
//header buttons should be dynamic
const ButtonGroup = ({ buttons }: Props) => {
    return (
        <div className="flex  gap-2">
            {buttons.map((button, index) => (
                <Button key={index} label={button.label} variant={button.variant} onClick={button.onClick} />
            ))}
        </div>
    );
}

export default ButtonGroup;