interface ContentProps {
    children: React.ReactNode

}

const Content = ({ children }: ContentProps) => {
    return (
        <div className="py-6">
            {children}
        </div>
    );
}

export default Content;
