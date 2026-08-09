interface IconTextProps {
    icon: React.ReactNode
    title: string
}

const IconText = ({ icon, title }: IconTextProps) => {
    return (
        <div className="flex items-center gap-2 w-full">
            {icon && <span>{icon}</span>}
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
    )
}

export default IconText;