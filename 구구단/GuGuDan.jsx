const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first_num, setFirst_num] = useState(Math.ceil(Math.random() * 9));
    const [second_num, setSecond_num] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const onRefFocus = useRef(null);

    const onChange = e => {
        setValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        if(value == first_num * second_num) {
            setResult(`${first_num} * ${second_num} = ${value} 정답!!`);
            setFirst_num(Math.ceil(Math.random() * 9));
            setSecond_num(Math.ceil(Math.random() * 9));
            setValue('');
            onRefFocus.current.focus();
        }
        else {
            setResult(`${first_num} * ${second_num} = ${value} 땡!!`);
            setValue('');
            onRefFocus.current.focus();
        }
    }

    return (
        <>
            <div>{first_num} 곱하기 {second_num} 는(은) ?</div>
            <form onSubmit = {onSubmit}>
                <input type="text" ref = {onRefFocus} value = {value} onChange = {onChange} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = GuGuDan;
       