import styled from 'styled-components'

export const AppHeader = styled.h1`
font-size: 64px;
text-align: center;
margin: 40px 0;
`;

export const Row = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1600px;
margin: 40px auto;
height: 78px;

button{
    margin-left: 0 !important;
}
`;

export const AppHeaderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1600px;
margin: 0 auto;
`;

export const NewsList = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 40px;
grid-row-gap: 40px;
max-width: 1600px;
margin: 0 auto;
`;