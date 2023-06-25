import styled from 'styled-components';

const StyledImage = styled.img`
    position: relative;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
`;

export const Thumbnail = ({ src }: { src: string }) =>
    typeof src === 'undefined' ? null : (
        <StyledImage src={src} alt="thumbnail" />
    );
