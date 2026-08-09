import { DialogButton } from "@renderer/types/dialog"
import ButtonGroup from "./ButtonGroup"

interface FooterProps {
    description?: string
    buttons: DialogButton[]
}

const Footer = ({ description, buttons = [] }: FooterProps): React.JSX.Element => {
    return (
        <div className="flex justify-between items-center border-t pt-3">
            {description ? (
                <p>{description}</p>
            ) : (
                <div></div>
            )}
            {buttons.length > 0 && (
                <ButtonGroup buttons={buttons} />
            )}
        </div>
    )
}
export default Footer;