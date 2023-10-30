import styled, { createGlobalStyle } from "styled-components";

// GlobalStyle - reset da página
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #4E515B;
    padding: 16px;
    border-radius: 10px;
    gap: 8px;
`;

export const Div = styled.div`
    display: flex;
    gap: 8px;
`

export const H2 = styled.h2`
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #9dcd96;
    border-radius: 5px;
    height: 44px;
    padding: 0 8px;
`;

export const ButtonDark = styled.button `
    background-color: #32383E;
    color: white;
    border: none;
    width: 40px;
    height: 44px;
    border-radius: 5px;
    font-size: 20px;
`

export const ButtonLight = styled.button `
    background-color: #A8ACB6;
    color: white;
    border: none;
    width: 40px;
    height: 44px;
    border-radius: 5px;
    font-size: 20px;
`