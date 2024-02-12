interface ContainerProps {
    children: React.ReactNode
    onClickSection: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const Container = ({ children, onClickSection }: ContainerProps) => {
    return (
        <section className="bg-black h-screen flex flex-col flex-1" onClick={onClickSection} >
            { children }
        </section>
    )
}
