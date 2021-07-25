import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EntryPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;
min-height: 100vh;
background-color: #a6abb1;

`;

export const PageHeader = styled(Link)`
font-size: 2rem;
font-weight: 600;
margin: 40px 0;
color: inherit;
text-decoration: none;
`;

