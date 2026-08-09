import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


import type { DialogProps } from "../../types/dialog";

const Dialog = ({
    open,
    title,
    icon,
    children,
    headerButtons = [],
    footerButtons = [],
    footerDescription
}: DialogProps) => {

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="w-[550px] max-w-[90vw] min-w-[300px] min-h-[200px] max-h-[90vh] resize overflow-auto rounded-lg bg-white shadow-xl p-5 flex flex-col">
                <Header
                    title={title}
                    icon={icon}
                    buttons={headerButtons}
                />

                <Content>
                    {children}
                </Content>

                <Footer
                    description={footerDescription}
                    buttons={footerButtons}
                />

            </div>

        </div>
    );
};

export default Dialog;