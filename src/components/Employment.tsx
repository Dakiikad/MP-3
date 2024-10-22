import { styled } from 'styled-components';
import pic  from '../assets/IMG_1664.jpg'
const Employee = styled.div`
    border: black; 
    justify-content: center;
`
const EmployeeImg = styled.img`
width: 30%;
height: 30%
`
export default function EmployeePage(){
    return (
        <Employee>
            <h2> Employment</h2>
            <h3>Data analyst intern</h3>
            <EmployeeImg src={pic}/>
            <p> My most recent employment was at a startup called Shoptaki where my role was a data analyst intern.</p>
            <ul>
                <li>Assisted in the development of property evaluation software using python, pandas, pytorch, and
                    Numpy
                </li>
                <li>Collaborated with data science to help build functional chat bot utilizing GPT API</li>
                <li>Communicated effectively to streamline development process</li>
            </ul>
        </Employee>
    )
}