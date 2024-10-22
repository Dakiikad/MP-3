import { styled } from 'styled-components';
import { useState } from 'react';

const CalculatorContainer = styled.main`
    width: 100%;
    margin: 10% auto;
    height: auto;
    padding: 5%;
    background-color: #f4f4f4;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 2%;
    padding: 5%;
    background-color: grey;
    border-radius: 10%;
    width: 60%;
    margin: 0 auto;
`;

const Button = styled.button`
    width: 100%;
    margin: 5% 0;
    padding: 5%;
    color: white;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #555;
    }
`;

const Label = styled.label`
    font-size: 18px;
    color: #333;
    margin-bottom: 5%;
`;

const Input = styled.input`
    width: 80%;
    padding: 5%;
    font-size: 1.2rem;
    border: none;
    border-radius: 5%;
    text-align: center;
    margin-bottom: 5%;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OutputDiv = styled.div<{ isNegative: boolean }>`
    font-size: 1.5rem;
    color: ${(props) => (props.isNegative ? "red" : "#333")};
    margin-top: 10%;
    text-align: center;
`;

export default function Calculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState<number | null>(null);

    const handleAddition = () => {
        setOutput(Number(first) + Number(second));
    };

    const handleSubtraction = () => {
        setOutput(Number(first) - Number(second));
    };

    const handleMultiplication = () => {
        setOutput(Number(first) * Number(second));
    };

    const handleDivision = () => {
        setOutput(Number(first) / Number(second));
    };

    const handlePower = () => {
        setOutput(Math.pow(Number(first), Number(second)));
    };

    const clearAll = () => {
        setFirst("");
        setSecond("");
        setOutput(null);
    };

    return (
        <CalculatorContainer>
            <ButContainer>
                <Label htmlFor="first">1st number:</Label>
                <Input
                    type="text"
                    id="first"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />

                <Label htmlFor="second">2nd number:</Label>
                <Input
                    type="text"
                    id="second"
                    value={second}
                    onChange={(e) => setSecond(e.target.value)}
                />

                <Button onClick={handleAddition}>+</Button>
                <Button onClick={handleSubtraction}>-</Button>
                <Button onClick={handleMultiplication}>*</Button>
                <Button onClick={handleDivision}>/</Button>
                <Button onClick={handlePower}>Power</Button>
                <Button onClick={clearAll}>Clear</Button>

                <OutputDiv isNegative={output !== null && output < 0}>
                    {output !== null ? `Result: ${output}` : "No result yet"}
                </OutputDiv>
            </ButContainer>
        </CalculatorContainer>
    );
}
