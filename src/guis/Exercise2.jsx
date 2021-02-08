import { h } from 'preact';
import { useState } from 'preact/hooks';

import Window from '../components/Window';
import Label from '../components/Label';
import Input from '../components/Input';

const formatValue = value => {
    if (typeof value === 'number') {
        return Number(value.toFixed(2));
    }
    return '';
}

const numberRegex = new RegExp(/^\d+$/);

const Exercise2 = () => {
    const [c, setCelsius] = useState('');
    const [incorrectC, setIncorrectC] = useState(false);
    const [incorrectF, setIncorrectF] = useState(false);
    const f = c ? c * (9/5) + 32 : '';

    const onCelsiusInput = (event) => {
        const { target: {value} } = event;
        if (value === '') {
            setCelsius(value);
            setIncorrectC(false);
        } else if (numberRegex.test(value)) {
            setCelsius(Number(value));
            setIncorrectC(false);
        } else {
            setIncorrectC(true)
        }
    }

    const onFahrenheitInput = (event) => {
        const { target: {value} } = event;
        if (value === '') {
            setCelsius(value);
            setIncorrectC(false);
        } else if (numberRegex.test(value)) {
            setCelsius((Number(value) - 32) * (5/9));
            setIncorrectF(false);
        } else {
            setIncorrectF(true)
        }
    }

    const celsius = formatValue(c);
    const fahrenheit = formatValue(f);
    
    console.log(c, f, incorrectC, incorrectF)

    return (
        <Window title="Temperature Conventer" width={400}>
            <Input type="text" disable={incorrectF} error={incorrectC} value={celsius} onInput={onCelsiusInput} />
            <Label>Celsius =</Label>
            <Input type="text" disable={incorrectC} error={incorrectF} value={fahrenheit} onInput={onFahrenheitInput} />
            <Label>Fahrenheit</Label>
        </Window>
    );
}

export default Exercise2;