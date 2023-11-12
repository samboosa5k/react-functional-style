import styled from 'styled-components';

const StyledTag = styled.span`
    background: var(--fourthColor);
    border-radius: var(--border-radius-sm);
    color: whitesmoke;
    display: inline-flex;
    font-size: 0.75em;
    height: auto;
    line-height: 1em;
    margin: 0.25em;
    overflow: hidden;
    padding: 0.25em;
    position: relative;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: 600;
`;

export const Tag = ({ ...props }) => (
    <StyledTag {...props}>{props?.text}</StyledTag>
);
