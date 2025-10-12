import styled from 'styled-components';

import { Image } from '../atoms/Image';
import { Card } from './Card';

const Media = styled(Image)`
    width: 100%;
    display: block;
`;

interface MediaCardProps {
    src: string;
    title?: string;
    text?: string;
}

export const MediaCard = ({ src, title, text }: MediaCardProps) => (
    <Card>
        <Media src={src} alt={title || 'media'} />
        <Card.Body>
            {title && <Card.Title as="h3">{title}</Card.Title>}
            {text && <Card.Text>{text}</Card.Text>}
        </Card.Body>
    </Card>
);

export default MediaCard;
