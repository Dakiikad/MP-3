import { styled } from 'styled-components';
import farrand  from '../assets/farrand.jpg'
import Bu from '../assets/bu-campus.jpg'
const Education = styled.div`
    border: black; 
`
const EducationImg = styled.img`
width: 40%;
height: 40%
`
export default function EducationPage(){
    return (
        <Education>
        <h2>Education</h2>
    <EducationImg src={farrand}/>
    <p>After highschool, I attended the university of Colorado Boulder to study Computer science and Finance. </p>
    <p>GPA: 3.97</p>
    <EducationImg src={Bu}  />
    <p>
        However, after my first year, I decided to transfer to Boston University to study Math, Economics, and Compuer
        science.
    </p>
    <p>GPA: 3.51</p>
        </Education>
)
}