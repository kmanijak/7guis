import { h, render } from 'preact';
import Exercise1 from './guis/Exercise1';
import Exercise2 from './guis/Exercise2';

const Main = () => (
    <div>
        <h1>Exercise 1</h1>
        <Exercise1 />
        <hr />
        <h1>Exercise 2</h1>
        <Exercise2 />
    </div>
);

render(<Main />, document.body);
