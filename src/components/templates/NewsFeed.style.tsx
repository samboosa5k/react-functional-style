import styled from 'styled-components';

// Container stlye
export const Container = styled.section`
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;

    // Typography

    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./Inter.woff2?v=3.13') format('woff2');
    }
    font-family: Inter, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
`;
