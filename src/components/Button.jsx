import { h } from 'preact';
import './Button.scss';

const Button = ({ children, onClick }) => (
    <button className="button" onClick={onClick}>{children}</button>
);

export default Button;