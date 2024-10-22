import { styled } from 'styled-components';
import pic  from '../assets/high.jpg'
import pic2 from '../assets/consulting.jpg'
const Achievement = styled.div`
    border: black; 
    justify-content: center;
`
const AchievementImg = styled.img`
width: 30%;
height: 30%
`
export default function AchievementPage(){
    return (
        <Achievement>
            <h2>Achievements</h2>
            <h3>Dean's list</h3>
            <h3>Boston University Consulting Strategylab finalist</h3>
            <AchievementImg src={pic2} />
            <h3>Highschool Validictorian</h3>
            <AchievementImg src = {pic}/>
        </Achievement>
    )
}