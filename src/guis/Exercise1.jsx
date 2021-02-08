import { h } from 'preact';
import { useState } from 'preact/hooks';

import Window from '../components/Window';
import Label from '../components/Label';
import Button from '../components/Button';

const Exercise1 = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    return (
        <Window title="Counter" width={200}>
            <Label>{count}</Label>
            <Button onClick={increment}>Count</Button>
        </Window>
    );
}

export default Exercise1;