import { h } from 'preact';
import './Label.scss';

const Label = ({ children }) => (
    <p className="label">{children}</p>
);

export default Label;