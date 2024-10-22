import { styled } from 'styled-components';
import poop from '../assets/IMG_2464.jpg'
const Reference = styled.div`
    border: black;
`
const ReferenceTable = styled.table`
    border: green;
`
const Head = styled.h2`
    margin-left: -80%
`
const ReferenceImg = styled.img`
width: 40%;
height: 40%
`
export default function ReferencesPage(){
    return (
        <Reference>
            <h2>References</h2>
            <ReferenceImg src={poop}/>
            <Head>Professional</Head>
            <ReferenceTable>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Asnee</td>
                    <td>Former Boss</td>
                    <td>720-469-6546</td>
                </tr>
                <tr>
                    <td>Artemios</td>
                    <td>Mentor</td>
                    <td>508-816-4456</td>
                </tr>
                <tr>
                    <td>Jordan</td>
                    <td>Mentee</td>
                    <td>927-570-1108</td>
                </tr>
            </ReferenceTable>
            <Head>Personal</Head>
            <ReferenceTable>
                <tr>
                    <th>Name</th>
                    <th>Relationship</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Joshua</td>
                    <td>Roommate</td>
                    <td>857-337-8093</td>
                </tr>
                <tr>
                    <td>Jordan</td>
                    <td>Pikachu</td>
                    <td>508-816-4456</td>
                </tr>
                <tr>
                    <td>Tony</td>
                    <td>Indentured servant</td>
                    <td>334-320-5900</td>
                </tr>
                <tr>
                    <td>Evan</td>
                    <td>Dawg/Hound</td>
                    <td>203-788-5733</td>
                </tr>
            </ReferenceTable>
        </Reference>
    )
}