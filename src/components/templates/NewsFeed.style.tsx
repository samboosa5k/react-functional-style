import styled, { css } from 'styled-components';

// Future globals
const listColors = css`
    --secondColor: rgb(253, 159, 36);
    --thirdColor: rgb(0, 142, 255);
    --fourthColor: rgb(254, 86, 33);
    --bettingColor: rgb(0, 127, 45);
    --darkerBettingColor: rgb(0, 93, 33);
    --breakingColor: rgb(254, 86, 33);
    --errorColor: rgb(223, 0, 45);
    --textColor: rgb(26, 26, 31);
    --lightSectionBack: rgb(243, 243, 244);
    --lightSectionBorder: rgb(243, 243, 244);
    --lighterTextColor: rgb(163, 163, 165);
    --invertedTextColor: rgb(254, 254, 254);
    --linkColor: rgb(0, 142, 255);
`;

const baseListStyle = css`
    --container-padding: 1rem;
    --row-padding: 0.5em;
    --inner-padding: 0.25em;

    // material border-radius
    --border-radius: 4px;
    --border-radius-sm: 2px;
`;

// Container stlye
export const Container = styled.section`
    ${baseListStyle};
    ${listColors};

    box-sizing: border-box;
    padding: 0;
    margin: 0;

    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;

    // Typography

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: Lato, Helvetica, Arial, sans-serif;
    }

    p,
    span {
    }
`;
