import { h } from 'preact';
import './Input.scss';

const Input = ({ type, disable, error, onInput, value }) => {
    const className = `input ${error ? 'input--error' : ''}`;
    return (
        <input type={type} disable={disable} className={className} value={value} onInput={onInput} />
    )
};

export default Input;