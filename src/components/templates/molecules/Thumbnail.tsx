import styled from 'styled-components';

import { StyledBlockProps } from '../atoms';

const StyledImage = styled.img<Partial<StyledBlockProps>>`
    position: relative;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: auto;
`;

export const Thumbnail = StyledImage;