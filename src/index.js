import { h, render } from 'preact';
import Exercise1 from './guis/Exercise1';

const Main = () => (
    <div>
        <h1>Exercise 1</h1>
        <Exercise1 />
    </div>
);

render(<Main />, document.body);
