import { styled } from 'styled-components';

const Name = styled.div`
    position: Fixed;
    justify-content: Center;
    top: 0;
    background-color: green;
    width: 100%;
    left:0%; 
    font-size: calc(10px + 2px);
    @media screen and (max-width: 750px) {
        left: 0;
        justify-content: center;
        width: 100% 
    }
`
export default function Header() {
    return (
        <Name>
            <h1> DAVID KIM</h1>
        </Name>
    )
}