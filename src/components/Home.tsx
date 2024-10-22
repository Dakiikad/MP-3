import { styled } from 'styled-components';
import koko  from '../assets/koko.jpg'
const Home = styled.div`
    border: black; 
`
const HomeImg = styled.img`
width: 40%;
height: 40%
`
export default function HomePage(){
    return (
        <Home>
            <HomeImg src={koko}/>
            <p>My name is David Kim. I am full-time student Computer science and Economics student at Boston University.
                I would like to hopefully get an internship this summer.</p>
        </Home>
    )
}