interface TitleProps {
    title?: string;
    stylesClass?: string;
    styles?: object;
}

const TitleComponent = ({ title = "Refranes de nuestros amigos Minibuseros", stylesClass, styles }: TitleProps) => {
    return (
        <h1
            className={`text-2xl font-bold mb-4 ${stylesClass}`}
            style={{ ...styles }}
        >
            {title}
        </h1>
    );
};

export default TitleComponent;