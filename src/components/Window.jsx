import { h } from 'preact';
import './Window.scss';

const Window = ({ title, width, children }) => (
    <div className="window" style={{ width: width + 'px' }}>
        <div className="window__title">{title}</div>
        <div className="window__content">
            {children}
        </div>
    </div>
);

export default Window;