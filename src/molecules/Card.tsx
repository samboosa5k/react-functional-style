import { Heading } from '@/atoms/Heading';

import styled from 'styled-components';

export const CardRoot = styled.div`
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    overflow: hidden;
`;

export const CardBody = styled.div`
    padding: 1rem 1.25rem;
`;

export const CardTitle = styled(Heading)`
    display: block;
    margin: 0 0 0.5rem 0;
`;

export const CardText = styled.p`
    margin: 0;
    color: #333;
`;

export const Card = Object.assign(CardRoot, {
    Body: CardBody,
    Title: CardTitle,
    Text: CardText,
});
