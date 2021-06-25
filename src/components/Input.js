export default function Input(props) {
    const { value, changeHandler, name, className, type } = props;
    return (
        <input
            type={type}
            value={value}
            onChange={changeHandler}
            className={className}
            name={name}
        />
    );
}
