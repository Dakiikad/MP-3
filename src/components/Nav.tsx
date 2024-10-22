import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavBar = styled.nav`
    position: absolute;
    top: 10%;
    background-color: green;
    width: 15%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    @media screen and (max-width: 750px) {
        position:fixed;
        width: 100%;
        flex-direction: row;
        
    }
`;

const NavItem = styled.li`
    padding: 8px; 
    list-style: none;
    color: white;
    @media screen and (max-width: 750px) {
        font-size: calc(2.5vw + 2px);
    }
`;

export default function Nav() {
    return (
        <NavBar>
            <NavItem>
                <Link to="/">Home</Link>
            </NavItem>
            <NavItem><Link to="/Education">Education</Link></NavItem>
            <NavItem><Link to="/Employment">Employment</Link></NavItem>
            <NavItem><Link to="/Project">Project</Link></NavItem>
            <NavItem><Link to="/Achievements">Achievements</Link></NavItem>
            <NavItem><Link to="/References">References</Link></NavItem>
        </NavBar>
    );
}
