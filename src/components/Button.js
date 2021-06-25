export default function Button(props) {
    const { text, clickHandler, className } = props;
    return (
        <button onClick={clickHandler} className={className}>
            {text}
        </button>
    );
}
